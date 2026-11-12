# AI-Driven Inclusive Education Platform

An accessible web platform designed around different learning needs. Students and teachers can upload learning materials (PDFs, text documents, images, audio, video) and explore them through dedicated accessibility modes: **Visual Mode**, **Hearing Mode**, and **Learning Support Mode**.


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
