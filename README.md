# 🌟 Yousef Magdi - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a sleek dark theme with gradient accents, smooth animations, and a fully functional contact form.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with a dark theme
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS transitions and hover effects
- **Interactive Components**:
  - Custom cursor animation
  - Star background effect
  - Gradient text effects
- **Contact Form**: Fully functional email integration with EmailJS
- **Portfolio Showcase**: Project gallery with live demos and source code links
- **Skills Section**: Visual representation of technical skills
- **About Section**: Personal information and background
- **Social Links**: Direct links to LinkedIn and GitHub

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── CV.pdf
│   ├── *.png (project images)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursorNew.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollPortfolio.jsx
│   │   ├── Skills.jsx
│   │   └── StarBackground.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yousefmagdii/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly to your Gmail. To set it up:

1. **Create EmailJS Account**: [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Add Gmail Service**: Connect your Gmail account
3. **Create Email Template**: Set up a template for contact form emails
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Update .env**: Add your credentials to the environment file

### Email Template Variables

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## 🎨 Customization

### Colors & Theme

- Edit `tailwind.config.js` for color scheme changes
- Modify CSS variables in `index.css` for global styles
- Update gradient colors in component files

### Content Updates

- **Personal Info**: Update `Contact.jsx` with your details
- **Projects**: Add your projects in `Projects.jsx`
- **Skills**: Modify skills list in `Skills.jsx`
- **About**: Update personal information in `About.jsx`

### Images

- Replace project images in `/public/` folder
- Update image references in components
- Add your CV file as `CV.pdf`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Yousef Magdi**

- Email: yousef0magdi1@gmail.com
- LinkedIn: [yousef-magdii](https://www.linkedin.com/in/yousef-magdii/)
- GitHub: [yousefmagdii](https://github.com/yousefmagdii)
- Location: Cairo, Egypt

---

⭐ **Star this repository if you found it helpful!**
