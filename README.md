# 🏛️ Tula's International School (TIS) — The Modern Gurukul
### Animated, High-Converting Frontend Web Redesign

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![CBSE Affiliated](https://img.shields.io/badge/CBSE_Affiliation-No._3530364-D4AF37)](https://tis.edu.in/)

---

## 🌟 Project Overview
This project is an **animated, high-converting homepage redesign for Tula's International School (TIS), Dehradun** ([https://tis.edu.in/](https://tis.edu.in/)), ranked **#1 Co-Ed Residential Boarding School in Uttarakhand & North India**.

The redesign retains authentic TIS branding and copy ("The Modern Gurukul", 22-Acre Himalayan campus, CBSE affiliation, 16+ Olympic sports, and residential boarding life) while elevating the entire experience into a cutting-edge web application with rich micro-interactions, 3D card perspectives, and fluid animations.

---

## 🚀 Key Stand-Out Features

### 1. 🎯 Interactive Custom Magnetic Cursor
- **Fluid Spring Physics**: Dual-layer cursor with inner dot and outer lag follower powered by Framer Motion springs.
- **Context-Aware Dynamic States**: Automatically transforms into `EXPLORE`, `PAN 360°`, `DRAG`, or active hover states based on element `data-cursor` attributes.
- **Device Detection**: Seamlessly hides on touch devices for accessibility.

### 2. 🌗 Animated 3-Tier Theme Switcher
- **Imperial Royal Navy & Gold** (*Default TIS Signature Theme*)
- **Pearl Light** (*Editorial Modern Gurukul Theme*)
- **Cyber Emerald** (*Midnight Dark Slate Theme*)
- Animated smooth transitions with persistent `localStorage` support.

### 3. 📊 Scroll Reading Progress Bar & Floating Indicator
- High-precision gradient top progress bar with dynamic percentage reader.
- Smart floating "Back to Top" trigger and quick section navigators.

### 4. 🧭 Interactive 360° Virtual Campus Explorer & Panorama Simulation
- Interactive multi-node map spanning 6 key campus landmarks:
  - *Academic Conclave & Smart Labs*
  - *Royal Equestrian Arena & Stables*
  - *Olympic Swimming Complex & Sports Pavilion*
  - *Central Gurukul Library & Research Hub (20,000+ Books)*
  - *Executive Residential Hostels & Dining Hall*
  - *Open-Air Amphitheatre & Sunset Deck*
- **Interactive Drag-to-Pan 360° Viewer**: Rotate horizontally in real-time with live compass heading azimuth, zoom controls, and auto-rotation toggle.
- **Synthesized Ambient Audio**: Web Audio API generated Himalayan mountain breeze and ambient atmosphere toggle with 0 external sound dependencies.

### 5. 🧘 "The Modern Gurukul" 4-Pillars Matrix
- Interactive dimension tabs for **Mind (Dhi)**, **Body (Shakti)**, **Soul (Satva)**, and **Global Edge (Vishwa)** with 3D card tilt and animated highlight reveals.

### 6. 🎓 Academic Grade Pathways & Workstation Explorer
- Interactive curriculum navigator for **Junior (IV-V)**, **Middle (VI-VIII)**, **Secondary (IX-X)**, and **Senior Secondary (XI-XII)** with specialized Science, Commerce, Humanities, and IIT-JEE/NEET/SAT prep streams.

### 7. 🏇 16+ Olympic & Precision Sports Hub
- Interactive category-filtered sports grid with signature spotlights for **Horse Riding / Equestrian Arena** and **10m Air Rifle Shooting Range**.

### 8. ⏰ "A Day in the Life" 24-Hour Timeline Scroller
- Interactive routine scrubber from 06:00 AM Himalayan Pranayama to 09:30 PM Night Reflection.
- 4 Pillars of Boarding Care (4-tier security, 24/7 medical infirmary, farm-to-table organic dining, resident housemasters).

### 9. 🧮 Interactive Admission & Scholarship Calculator Wizard
- 4-step instant calculation tool (Grade selection, Residential type, Student category, Merit/Defense concessions) with dynamic fee breakdown, estimated scholarship waiver, and instant Prospectus 2026-27 download.

### 10. 💬 High-Converting Admission Enquiry Modal
- Real-time form validation, reference ID generation, celebration confetti bursts, and direct WhatsApp counselor connect.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | React 18 (TypeScript) + Vite |
| **Styling** | Vanilla CSS + Tailwind CSS v4 |
| **Animations** | Framer Motion 11 + Canvas Confetti + Custom HTML5 Canvas Particle Engine |
| **Icons** | Lucide React |
| **Typography** | Google Fonts (`Playfair Display`, `Outfit`, `Cinzel`, `Plus Jakarta Sans`) |

### 📁 Project Structure

```
TIS_animation/
├── index.html                   # HTML template with Google Fonts & SEO meta tags
├── package.json                 # Project dependencies and scripts
├── tailwind.config.js           # Custom TIS color palette & keyframe tokens
├── postcss.config.js            # PostCSS configuration
├── src/
│   ├── App.tsx                  # Main application orchestrator
│   ├── main.tsx                 # React DOM mount point
│   ├── index.css                # Global CSS variables, glassmorphism & themes
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme state provider (Navy, Light, Midnight)
│   ├── data/
│   │   └── tisData.ts           # Curated authentic TIS data & copy
│   └── components/
│       ├── CustomCursor.tsx         # Magnetic custom cursor follower
│       ├── ScrollProgressBar.tsx    # Reading progress bar & scroll-to-top
│       ├── ThemeSwitcher.tsx        # Animated theme toggle
│       ├── Navbar.tsx               # Sticky glass navigation & mobile menu
│       ├── HeroSection.tsx          # Cinematic hero with stats & 3D card stack
│       ├── HeroParticles.tsx        # Ambient canvas stardust/mist particle engine
│       ├── WhyGurukulSection.tsx    # 4 Pillars of Excellence interactive tabs
│       ├── VirtualTour360Section.tsx# Campus map & hotspot explorer
│       ├── AcademicsSection.tsx     # Curriculum & Grade IV-XII pathways
│       ├── SportsEquestrianSection.tsx # 16+ Sports & Horse Riding showcase
│       ├── BoardingLifeSection.tsx  # 24h daily schedule & hostel care
│       ├── FeeCalculatorWizard.tsx  # Interactive admission fee & scholarship wizard
│       ├── TestimonialsSection.tsx  # Parent, alumni & student reviews + Ivy League ticker
│       ├── AwardsAndFaqSection.tsx  # National rankings & interactive FAQs
│       ├── AdmissionCTASection.tsx  # High-converting bottom banner
│       ├── EnquiryModal.tsx         # Admission form with validation & confetti
│       ├── CampusTourModal.tsx      # Interactive 360° panoramic viewer
│       ├── CampusVideoModal.tsx     # Campus video reel modal
│       ├── FloatingQuickActions.tsx # WhatsApp & direct call floating drawer
│       └── Footer.tsx               # Comprehensive footer & location details
```

---

## ⚡ Local Setup & Development Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd TIS_animation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit `http://localhost:5173/` (or the port indicated in your terminal).

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository and select **Vite** as the framework preset.
4. Keep the default build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Deploying to Netlify
1. Go to [Netlify Dashboard](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select your GitHub repository.
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

---

## 🏛️ Authentic TIS Branding & Contact Details
- **Institution**: Tula's International School (TIS) — "The Modern Gurukul"
- **Location**: Dhoolkot, PO-Selaqui, Chakrata Road, Dehradun, Uttarakhand - 248011, India
- **CBSE Affiliation**: Affiliation No. 3530364 (School Code: 81591)
- **Admissions Helpline**: +91 98379 83791 / +91 94103 01844
- **Official Website**: [https://tis.edu.in/](https://tis.edu.in/)
