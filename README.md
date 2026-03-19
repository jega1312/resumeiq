# ResumeIQ — Conceptual AI Resume Optimization Product SaaS Microsite 📝🧠

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?style=flat&logo=framer)

> A conceptual SaaS product microsite for an AI-powered resume optimization tool. Built as a frontend portfolio project to demonstrate real-world React skills, modern UI/UX patterns, and production-level component architecture.

---

## 🔗 Live Demo

**🌐[View Live Site](https://resumeiq-jega1312.vercel.app)**

---

## 📸 Preview

### Desktop View 🖥
![Hero Section](./screenshots/hero.png)
![Features Section](./screenshots/register.png)
![Register Form](./screenshots/pricing.png)

### Mobile View 📱
![Mobile View](./screenshots/mobile.png)

---

## 💡 About The Project

ResumeIQ is a **fictional SaaS product microsite** designed to mirror the quality and structure of real-world startup landing pages. The project covers a full user journey — from hero section to pricing, registration, and FAQ — with attention to responsiveness, animations, and user experience.

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | Component-based UI |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 12 | Scroll & entrance animations |
| React Hook Form | 7 | Form state & validation |
| Swiper.js | 11 | Testimonials carousel |
| Random User API | — | Testimonial profile pictures |
| React International Phone | 3 | Phone input with dial codes |
| React Icons | 5 | Icon library |

---

## ✨ Key Features

- **Fully Responsive** — Mobile-first design across all screen sizes
- **Scroll Animations** — Entrance animations triggered on scroll using Framer Motion
- **Active Section Detection** — Navbar highlights current section using scroll position
- **Form Validation** — Full validation using React Hook Form + manual validation for custom inputs
- **Floating Label Inputs** — Custom animated floating labels on all form fields
- **Testimonials Carousel** — Auto-playing carousel with custom navigation using Swiper.js
- **Live API Integration** — Fetches real profile pictures from Random User API for testimonials
- **FAQ Accordion** — Smooth animated accordion using CSS grid technique
- **Pricing → Register Flow** — Plan selection pre-selects the form dropdown via lifted state
- **Mobile Hamburger Menu** — Animated hamburger with full-screen overlay
- **Scroll To Top Button** — Animated floating button with entrance/exit transitions

---

## 🧠 React Concepts Demonstrated

| Concept | Where Used |
|---|---|
| `useState` | All components |
| `useEffect` | Scroll detection, API fetch, plan sync |
| `useRef` + `useInView` | Scroll-triggered animations |
| Lifting State Up | Pricing → App → Register |
| Controlled Inputs | Plan select dropdown |
| Cross-component Communication | `selectedPlan` prop |
| Custom Hooks Pattern | `useSwiper` in Testimonials |
| Form Validation | React Hook Form + manual |
| `AnimatePresence` | Scroll to top button enter/exit |
| Third Party Integration | Swiper, PhoneInput, React Hook Form |

---

## 📁 Project Structure

```
src/
└── assets/
    └── components/
        ├── Navbar.jsx        # Fixed navbar with active section detection
        ├── Hero.jsx          # Landing section with animated stats
        ├── HowItWorks.jsx    # 3-step process cards
        ├── Features.jsx      # 6 feature cards with hover effects
        ├── Pricing.jsx       # 3 pricing plans with plan selection
        ├── Testimonials.jsx  # Auto-playing Swiper carousel
        ├── Register.jsx      # Form with full validation
        ├── FAQ.jsx           # Animated accordion
        └── Footer.jsx        # Links and social icons
public/
└── images/
    ├── logo.png
    └── resume-logo.png
index.html                    # SEO meta tags
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jega1312/resumeiq.git

# Navigate into the project
cd resumeiq

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📦 NPM Packages Used

```bash
npm install react-hook-form
npm install swiper
npm install react-international-phone
npm install react-icons
npm install motion
```

---

## 🎨 Design Decisions

- **Dark Theme** — Deep navy gradient `#03001C → #1b1042` for a modern SaaS feel
- **Purple/Blue Accent** — Consistent `purple-500 → blue-600` gradient for CTAs and highlights
- **Inter Font** — Clean, professional typeface loaded via local font files
- **CSS Grid Accordion** — Smooth height animation using `grid-template-rows` transition
- **JS Floating Labels** — Custom floating label pattern compatible with React Hook Form

---

## 👨‍💻 Author

**Jegathiswaran Thiaghu**

[![GitHub](https://img.shields.io/badge/GitHub-jega1312-181717?style=flat&logo=github)](https://github.com/jega1312)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-jegathiswaran--thiaghu-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/jegathiswaran-thiaghu/)

---

## 📝 License

This project is open source and available under the MIT License ⚖.
