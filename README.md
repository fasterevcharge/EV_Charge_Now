# Amiras Project

Base scaffold. HTML/CSS/features come later.

```
.
├── frontend/   # Next.js + TypeScript → Vercel
├── backend/    # FastAPI (Python)     → Railway
└── .env.example
```

## 1. Env setup

Copy `.env.example` to `.env` and paste your Supabase + Railway keys.
For local Next.js dev, also copy `frontend/.env.local.example` to `frontend/.env.local`.

## 2. Frontend (Vercel)

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
```

**Deploy:** import the repo on Vercel, set **Root Directory** to `frontend`, and add the `NEXT_PUBLIC_*` env vars in the Vercel dashboard.

## 3. Backend (Railway)

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload   # http://localhost:8000
```

**Deploy:** create a Railway service from the repo, set **Root Directory** to `backend`. Railway auto-detects via `railway.json`/`Procfile`.
