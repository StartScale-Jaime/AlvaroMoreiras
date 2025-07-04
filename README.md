### 🔪 How to Use the MVP Template (Step-by-Step)

#### 📊 1. Clone the Template Repository

Make a fresh copy of the MVP template:

```bash
git clone https://github.com/StartScale-Jaime/base-mvp-template.git your-new-project-name
```

Replace `your-new-project-name` with your project folder name.

#### 📁 2. Enter the New Project Directory

```bash
cd your-new-project-name
```

#### 🔄 3. Reinitialize Git (Clean History)

```bash
rm -rf .git
git init
git remote add origin git@github.com:StartScale-Jaime/base-mvp-template.git
git add .
git commit -m "Initial commit from 48H MVP template"
git push -u origin main
```

> Replace the remote URL with your new project repository.

#### ⚙️ 4. Install Dependencies

```bash
npm install
```

#### 🚀 5. Run Development Server

```bash
npm run dev
```

Visit your app at: `http://localhost:3000`

---


### 📦 What's Included in the Template?

- ✅ TailwindCSS
- ✅ Shadcn/UI components
- ✅ Next.js 14 with App Router
- ✅ Minimal MVP-ready layout
- ✅ Pre-configured basic structure
- ✅ `README.md` for setup guidance

---

### ⚡ For Each New MVP

1. Clone the template repo
2. Reinit Git
3. Setup your remote
4. Install & start dev server

Build and ship fast ✨

