# Arpith Thomas — Portfolio Website

A personal portfolio website built following the **Modern Web Development Workflow**.

## 🔄 Workflow Followed

```
Local Git Repo → GitHub → CI/CD (GitHub Actions) → Hosting (GitHub Pages + Firebase) → Browser
```

This project follows the workflow taught in BCA coursework:

| Step | Tool | Purpose |
|------|------|---------|
| Local Development | VS Code + Git | Write code, commit changes |
| Version Control | GitHub | Push, track, and manage code |
| CI/CD Pipeline | GitHub Actions | Auto-lint and validate on push |
| Backend | Firebase Realtime DB | Store contact form messages |
| Hosting | GitHub Pages | Serve the static site |
| Domain/DNS | GitHub Pages URL | Accessible via browser |

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
- **Backend:** Firebase Realtime Database (v10 SDK)
- **Version Control:** Git & GitHub
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML structure
├── style.css        # Styles and responsive layout
├── script.js        # Firebase logic + form validation
├── .github/
│   └── workflows/
│       └── ci.yml   # GitHub Actions CI pipeline
└── README.md        # This file
```

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/portfolio.git

# Open in browser (use Live Server or similar)
cd portfolio
# Open index.html in your browser
```

---

## ✅ CI/CD Pipeline

On every `git push` to `main`, GitHub Actions automatically:
- Checks HTML structure
- Validates file presence
- Confirms deployment readiness

See `.github/workflows/ci.yml` for the pipeline config.

---

## 📬 Contact

- **GitHub:** [github.com/arpith-thomas](https://github.com)
- **LinkedIn:** [linkedin.com/in/arpith-thomas](https://linkedin.com)

---

© 2026 Arpith Thomas
