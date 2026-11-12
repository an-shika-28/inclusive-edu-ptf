# AI-Driven Inclusive Education Platform

An accessible web platform designed around different learning needs. Students and teachers can upload learning materials (PDFs, text documents, images, audio, video) and explore them through dedicated accessibility modes: **Visual Mode**, **Hearing Mode**, and **Learning Support Mode**.

Developed under **AI Team Build Contract (v4)**.

---

## 🎨 Design System & Palette

This project adheres to the exact contract color palette:

| Token | Hex | Role | Usage |
|---|---|---|---|
| **Sand Dune** | `#EAE0CC` | Primary warm neutral | Application background, canvas |
| **Almond Silk** | `#C9ADA1` | Warm accent | Secondary cards, subtle highlights |
| **Dry Sage** | `#A0A083` | Muted mode accent | Feature tags, quiet badges, mode indicators |
| **Grey Olive** | `#798478` | Brand support | Secondary buttons, borders, student branding |
| **Blue Slate** | `#4D6A6D` | Main brand | Primary buttons, links, headings, focus accents |

**Typography**: Inter / Clean system sans-serif with minimum 44px touch targets and high-contrast accessible states.

---

## 🧭 Routes & Navigation

| Route | Page Component | Access | Description |
|---|---|---|---|
| `/` | `LandingPage` | Public | Hero, product preview, accessibility modes, how it works, role entry, footer |
| `/login` | `LoginPage` | Public | Role selector (Teacher / Student) with preselection support and demo access |
| `/teacher` | `TeacherDashboard` | Teacher | Material upload, visibility management (shared/private), search, and filtering |
| `/student` | `StudentDashboard` | Student | "Shared With Me" resources and private student uploads |
| `/workspace/:materialId` | `WorkspacePage` | Role-Aware | Active material viewer with Visual, Hearing, and Learning Support modes |
| `*` | `NotFoundPage` | Fallback | Accessible 404 page with return link |

---

## 👥 Team Workstreams & Responsibilities

- **Member A (Foundation & Integration Lead)**:
  - Shared frontend foundation & Vite setup
  - Global styles and design system tokens (`src/index.css`)
  - App entry point and routing (`src/App.jsx`)
  - Shared UI components (`PageContainer`, `Navbar`, `Footer`, `Button`, `Card`, `Badge`)
  - Landing page (`src/pages/LandingPage.jsx`)
  - Login & role selection page (`src/pages/LoginPage.jsx`)
  - 404 page & project documentation (`README.md`)

- **Member B (Dashboards & Upload UI)**:
  - Teacher dashboard (`src/pages/TeacherDashboard.jsx`)
  - Student dashboard (`src/pages/StudentDashboard.jsx`)
  - File upload component (`src/components/FileUpload.jsx`)
  - Material cards & list filtering (`src/components/MaterialCard.jsx`, `src/services/materialService.js`)

- **Member C (Workspace & Visual Mode)**:
  - Workspace shell (`src/pages/WorkspacePage.jsx`)
  - Visual mode & reading controls (`src/features/visual/VisualMode.jsx`)

- **Member D (Hearing & Learning Support Modes)**:
  - Hearing mode transcripts & audio controls (`src/features/hearing/HearingMode.jsx`)
  - Learning support mode & text simplification (`src/features/learning-support/LearningSupportMode.jsx`)

---

## 📋 Shared Data Contract: `Material` Object

```json
{
  "id": "string",
  "title": "string",
  "fileName": "string",
  "fileType": "pdf | image | audio | video | text",
  "mimeType": "string",
  "ownerId": "string",
  "ownerRole": "teacher | student",
  "visibility": "shared | private",
  "createdAt": "ISO-8601 string",
  "status": "ready | processing | failed",
  "fileUrl": "string | null"
}
```

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🧪 Testing the User Flow

1. Open `http://localhost:3000/`.
2. Inspect the Landing Page:
   - Check navigation links ("How it works" and "Accessibility modes" smooth-scroll to their sections).
   - Try the interactive Hero preview toolbar (switch between Visual, Hearing, and Support modes; adjust text size).
   - In the **Start with your learning role** section, click **"Continue as Teacher"** &rarr; verify `/login` opens with Teacher preselected.
   - Return to `/` and click **"Continue as Student"** &rarr; verify `/login` opens with Student preselected.
3. On `/login`:
   - Click **"Continue as teacher"** &rarr; successfully opens `/teacher` dashboard.
   - Click **"Back to home"** &rarr; returns to `/`.
   - Select **Student** &rarr; click **"Continue as student"** &rarr; opens `/student` dashboard.
4. On `/teacher` and `/student`:
   - Inspect mock materials, search filter, and file upload zone.
