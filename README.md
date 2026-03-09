# Presson - Professional Consultant Website

A high-end, minimalist corporate consulting website inspired by the Hostinger 'Presson' template.

## 🎨 Design Features

### Core Aesthetic
- **Minimalist & Modern**: Clean, authority-driven design
- **Sophisticated Color Palette**: 
  - Deep charcoal/black backgrounds (#1a1a1a, #2a2a2a)
  - Crisp white typography (#ffffff)
  - Elegant gold accents (#c9a961)
  - Muted slate gray tones (#8b7f6a)

### Typography
- **Headlines**: Playfair Display (Serif) - Bold, authoritative
- **Body Text**: Inter (Sans-Serif) - Clean, highly readable
- **Generous White Space**: Premium, uncluttered feel

## 📋 Sections

### 1. Hero Header
- Full-width section with professional portrait (left-aligned)
- Large-scale headline with accent styling (right-aligned)
- Dual CTAs: "Work With Me" and "View Portfolio"
- Smooth parallax effect on scroll

### 2. Authority Section
- "Trusted By Industry Leaders" label
- Logo strip featuring 5 company logos
- Subtle hover effects

### 3. Core Expertise (Services)
- 3-column grid layout
- Minimal SVG icons
- Services:
  - Strategic Planning
  - Financial Consulting
  - Digital Transformation
- Hover animations with accent border

### 4. Success Stories (Portfolio)
- 2x2 grid of high-resolution project images
- Overlay on hover with project title and category
- Smooth image zoom effect

### 5. Client Testimonials
- 3-column layout
- Circular profile photos
- Elegant quote styling
- Client names and titles

### 6. Contact Section
- Centered layout with form
- Fields: Name, Email, Company, Phone, Message
- Smooth form submission animation

### 7. Footer
- 4-column layout:
  - Brand & social links
  - Quick links
  - Services
  - Newsletter signup
- Social media icons (LinkedIn, Twitter, Instagram)

## 🚀 Features

### Interactive Elements
- **Sticky Navigation**: Transparent initially, becomes solid on scroll
- **Smooth Scrolling**: Anchor links with offset for fixed nav
- **Mobile Menu**: Hamburger menu with smooth animation
- **Intersection Observer**: Elements fade in on scroll
- **Form Validation**: Client-side validation with success messages
- **Parallax Effects**: Hero image moves on scroll
- **Active Nav Highlighting**: Current section highlighted in navigation

### Responsive Design
- Desktop-first approach
- Breakpoints:
  - 1024px: Tablet landscape
  - 768px: Tablet portrait / Mobile landscape
  - 480px: Mobile portrait
- Mobile hamburger menu
- Flexible grid layouts

## 📁 File Structure

```
Task01/
├── index.html              # Main HTML structure
├── styles.css              # Complete styling
├── script.js               # Interactive features
├── generate-placeholders.js # Canvas-based placeholder images
└── README.md               # This file
```

## 🎯 How to View

### Option 1: Direct File Opening
1. Navigate to `c:\Users\HP\Desktop\Prodigi\Task01\`
2. Double-click `index.html`
3. Opens in your default browser

### Option 2: Live Server (Recommended)
```bash
# If you have Python installed
cd c:\Users\HP\Desktop\Prodigi\Task01
python -m http.server 8000
# Then open: http://localhost:8000
```

### Option 3: VS Code Live Server
1. Open the folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🖼️ Images

Currently using canvas-generated placeholder images. To add real images:

1. **Hero Portrait** (`hero-portrait.jpg`): 800x1000px professional headshot
2. **Company Logos** (`logo1.png` - `logo5.png`): 200x80px monochrome logos
3. **Portfolio Images** (`portfolio1.jpg` - `portfolio4.jpg`): 800x600px project photos
4. **Client Photos** (`client1.jpg` - `client3.jpg`): 200x200px circular portraits

### Image Guidelines
- High-contrast photography
- Professional quality
- Consistent filter/tone
- Grayscale or muted colors preferred

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-primary: #1a1a1a;      /* Main background */
    --color-accent: #c9a961;        /* Gold accent */
    --color-white: #ffffff;         /* Text color */
    /* ... more variables */
}
```

### Content
- Edit text directly in `index.html`
- Update service descriptions
- Modify testimonials
- Change contact form fields

### Fonts
Current fonts from Google Fonts:
- Playfair Display (Headlines)
- Inter (Body text)

To change, update the `<link>` tag in HTML and CSS variables.

## ✨ Key Design Principles

1. **Premium Feel**: Every element designed to feel high-end
2. **Visual Hierarchy**: Clear distinction between sections
3. **Micro-animations**: Subtle hover effects enhance UX
4. **Accessibility**: Semantic HTML, proper contrast ratios
5. **Performance**: Optimized CSS, minimal dependencies

## 🔧 Technical Details

- **No Framework Dependencies**: Pure HTML, CSS, JavaScript
- **Modern CSS**: Grid, Flexbox, Custom Properties
- **ES6 JavaScript**: Modern syntax and features
- **SEO Optimized**: Proper meta tags, semantic HTML
- **Cross-browser Compatible**: Works on all modern browsers

## 📱 Mobile Optimization

- Touch-friendly buttons and links
- Responsive typography
- Optimized images for mobile
- Hamburger menu for small screens
- Single-column layouts on mobile

## 🎭 Animation Details

- **Fade In Up**: Service cards, portfolio items, testimonials
- **Parallax**: Hero image on scroll
- **Hover Transforms**: Cards lift on hover
- **Smooth Transitions**: 0.3s ease for most interactions
- **Navigation**: Slides down on mobile

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

Potential additions:
- Backend integration for contact form
- CMS integration
- Blog section
- Case study detail pages
- Advanced animations (GSAP)
- Performance optimization (lazy loading)
- Analytics integration

## 📄 License

This is a demonstration project. Customize freely for your needs.

---

**Created with attention to detail and premium design principles.**
