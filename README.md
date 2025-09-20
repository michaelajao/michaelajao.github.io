# 🧬 Michael Ajao-Olarinoye Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring animated elements and a professional dark theme design.

## 🌟 Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Animated Elements**: Smooth animations using Framer Motion, including floating bubbles around profile image
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Comprehensive Sections**:
  - Hero section with animated decorative elements
  - Featured research projects with expandable content
  - Publications and presentations
  - Professional experience timeline
  - Educational background
  - Skills and expertise
  - Contact form with social links

## 🚀 Live Demo

Visit the live portfolio at: [https://michaelajao.github.io/](https://michaelajao.github.io/)

## 🛠️ Built With

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages with GitHub Actions

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/michaelajao/researcher-portfolio.git
cd researcher-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build and Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🎨 Customization

### Personal Information
Update personal details in:
- `src/components/Hero.tsx` - Main hero section content
- `src/components/Contact.tsx` - Contact information
- `src/components/Experience.tsx` - Work experience
- `src/components/Education.tsx` - Educational background
- `src/components/Publications.tsx` - Research publications

### Styling
- Colors and themes: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component-specific styles: Individual component files

### Assets
- Profile image: `public/profile-image.jpg`
- CV/Resume: `public/michael_cv.pdf`
- Technology icons: `public/icons/`

## 📁 Project Structure

```
researcher-portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   └── components/        # React components
├── .github/workflows/     # GitHub Actions
├── tailwind.config.ts     # Tailwind configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ajaoolarinoyemichael@gmail.com
- **LinkedIn**: [michael-ajao](https://www.linkedin.com/in/michael-ajao)
- **GitHub**: [michaelajao](https://github.com/michaelajao)

---
*Portfolio updated with EmailJS integration - Contact form now fully functional!*