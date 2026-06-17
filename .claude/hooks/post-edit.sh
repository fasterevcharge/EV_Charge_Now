#!/usr/bin/env bash
# Auto-runs after every Edit/Write tool call.
# - Type-checks the frontend if any .ts(x) file changed
# - Stays silent on success; prints errors so they show up in the assistant context
# - Skips quickly for unrelated files
set -uo pipefail

FILE="${1:-}"
[ -z "$FILE" ] && exit 0

# Only react to frontend TS/TSX edits (don't slow down everything else).
case "$FILE" in
  */frontend/*.ts|*/frontend/*.tsx) ;;
  *) exit 0 ;;
esac

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
FRONTEND="$REPO_ROOT/frontend"

# tsc --noEmit is fast incremental on warm builds. Errors print to stderr → Claude sees them.
if ! ( cd "$FRONTEND" && npx --no-install tsc --noEmit -p tsconfig.json 2>&1 ); then
  echo "::warning::TypeScript errors after editing $FILE — see output above."
  # Non-zero exit signals the hook detected a problem; Claude reads stderr.
  exit 2
fi

exit 0
