# Gethsemane Nepali A.G Church Website

A beautiful, modern, and responsive static website for Gethsemane Nepali A.G Church serving the Nepali community in Bangalore, India.

![Church Website](https://page.gensparksite.com/v1/base64_upload/fb2a8ed230941119eda81702e94168ba)

## 🌟 Overview

This is a professionally designed static website featuring a stunning gradient hero section with perfectly aligned navigation menu. The website serves two church locations in Bangalore with complete information about services, ministries, events, and contact details.

## ✨ Features

### Design & User Experience
- ✅ **Perfectly Aligned Header Navigation** - Equal spacing and responsive behavior
- ✅ **Beautiful Gradient Hero Section** - Royal blue to orange gradient matching church branding
- ✅ **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Fast Loading** - Optimized for performance
- ✅ **Accessibility Friendly** - Semantic HTML and proper ARIA labels

### Pages & Content
1. **Home Page** (`index.html`)
   - Hero section with call-to-action buttons
   - Service times for both locations
   - Welcome section
   - Quick info cards
   - Full church information

2. **About Page** (`about.html`)
   - Church history and background
   - Mission and vision statements
   - Core values
   - What we believe
   - Timeline of church growth

3. **Ministries Page** (`ministries.html`)
   - 6 ministry showcases:
     - Worship Ministry
     - Youth Fellowship
     - Prayer Ministry
     - Children's Ministry
     - Community Outreach
     - Discipleship Ministry

4. **Events Page** (`events.html`)
   - Regular weekly services
   - Special events calendar
   - Fellowship gatherings
   - Seasonal celebrations

5. **Pastors Page** (`pastors.html`)
   - Senior Pastor: Ps. Eprahim Gurung
   - Junior Pastor: Ps. David Gurung
   - Contact information
   - Ministry responsibilities
   - Leadership philosophy

6. **Locations Page** (`locations.html`)
   - Main Church: Marathahalli
   - Branch Church: Sarjapur Road
   - Detailed addresses and timings
   - Google Maps integration ready
   - What to expect when visiting

7. **Contact Page** (`contact.html`)
   - Contact form (demo)
   - Pastor contact information
   - Church addresses
   - Social media links
   - Quick contact buttons

## 📁 Project Structure

```
gethsemane-church/
├── index.html              # Home page
├── about.html             # About us page
├── ministries.html        # Ministries page
├── events.html            # Events page
├── pastors.html           # Pastors page
├── locations.html         # Locations page
├── contact.html           # Contact page
├── css/
│   ├── style.css          # Main styles with gradient & navigation
│   └── pages.css          # Page-specific styles
├── js/
│   └── main.js            # JavaScript functionality
└── README.md              # This file
```

## 🎨 Design Highlights

### Color Scheme
- **Primary Blue**: `#1e3a8a` - Represents faith and trust
- **Primary Orange**: `#f97316` - Represents warmth and community
- **Gradient**: Royal blue to orange - Matches church logo perfectly
- **Neutral Colors**: Clean grays and whites for content

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive sizing** for all screen sizes

### Key UI Components
1. **Header Navigation**
   - Perfectly aligned menu items
   - Equal spacing between links
   - Smooth hover effects with gradient underline
   - Mobile-responsive hamburger menu
   - Sticky positioning

2. **Gradient Hero Section**
   - Full-width gradient background
   - Overlay effects for depth
   - White text with excellent contrast
   - Call-to-action buttons
   - Responsive typography

3. **Cards & Sections**
   - Consistent shadow system
   - Smooth hover animations
   - Icon integration with Font Awesome
   - Gradient accents throughout

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Download the files**
   ```bash
   # Clone or download the project files
   ```

2. **Open locally**
   - Option 1: Double-click `index.html` to open in browser
   - Option 2: Use a local server (recommended)

3. **Using a Local Server (Recommended)**

   **Python (if installed):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then visit: `http://localhost:8000`

   **Node.js (if installed):**
   ```bash
   npx http-server -p 8000
   ```
   Then visit: `http://localhost:8000`

   **VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📱 Responsive Breakpoints

The website is fully responsive with optimized layouts for:

- **Desktop**: 1024px and above - Full navigation, multi-column layouts
- **Tablet**: 768px - 1023px - Adapted layouts, responsive grids
- **Mobile**: Below 768px - Hamburger menu, single column layouts

## 🎯 Church Information

### Main Church Location
**Address:**
SGR Dental College Campus
SGR Dental College Main Road
Munnekolala, Marathahalli
Bangalore - 560037

**Service Times:**
- Sunday: 7:00 AM - 8:45 AM (Nepali Service)
- Tuesday: 8:00 PM - 9:30 PM (Cottage Fellowship)
- Saturday: 8:00 PM - 9:30 PM (Youth Fellowship)

### Branch Church Location
**Address:**
Petra Pebbles
Ambalipura - Sarjapur Road
Mullur, Bengaluru - 560035

**Service Times:**
- Sunday: 10:00 AM - 12:00 PM (Nepali Service)

### Pastoral Leadership
- **Senior Pastor**: Ps. Eprahim Gurung - +91-7204516832
- **Junior Pastor**: Ps. David Gurung - +91-7019878500

## 🛠️ Customization Guide

### Updating Church Information

1. **Service Times**: Edit in `index.html` and `locations.html`
2. **Pastor Information**: Update in all pages (footer) and `pastors.html`
3. **Events**: Modify `events.html` to add/remove events
4. **Ministries**: Edit `ministries.html` to update ministry descriptions

### Changing Colors

Edit `css/style.css` and modify the CSS variables:

```css
:root {
    --primary-blue: #1e3a8a;      /* Change main blue color */
    --primary-orange: #f97316;     /* Change accent orange */
    --gradient-start: #1e40af;     /* Gradient start color */
    --gradient-end: #f97316;       /* Gradient end color */
}
```

### Adding New Pages

1. Copy an existing page (e.g., `about.html`)
2. Update the content
3. Add navigation link in header of all pages
4. Update footer links if needed

### Integrating Contact Form

The contact form is currently a demo. To make it functional:

**Option 1: Email Service (Formspree)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Backend Integration**
- Set up a backend server (Node.js, PHP, Python)
- Update form action to point to your backend endpoint
- Handle form submission server-side

**Option 3: Email Services**
- Use services like EmailJS, SendGrid, or AWS SES
- Add their JavaScript SDK
- Configure email delivery

### Adding Google Maps

Replace the map placeholder in `locations.html`:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%" 
    height="300" 
    style="border:0; border-radius: var(--radius-lg);" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

Get embed code from Google Maps:
1. Search for your location on Google Maps
2. Click "Share"
3. Select "Embed a map"
4. Copy the iframe code

## 🌐 Deployment

### Deploy to Free Hosting

**1. Netlify (Recommended)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

Or drag and drop your folder on [Netlify Drop](https://app.netlify.com/drop)

**2. Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**3. GitHub Pages**
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

**4. Cloudflare Pages**
1. Connect your Git repository
2. Configure build settings (none needed for static site)
3. Deploy automatically on git push

### Custom Domain Setup

After deploying to any platform:
1. Purchase a domain (e.g., gethsemanechurch.com)
2. Add custom domain in hosting platform settings
3. Update DNS records as instructed
4. Enable SSL certificate (usually automatic)

## 🔧 Maintenance

### Regular Updates
- Update event information monthly
- Add new photos to ministries/events sections
- Update pastor messages/sermons
- Refresh upcoming events calendar
- Check and update contact information

### Performance Optimization
- Compress images before uploading
- Use WebP format for images when possible
- Minimize CSS/JS files for production
- Enable browser caching
- Use a CDN for static assets

## 📝 Browser Support

The website works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer 11 (limited support)

## 🤝 Contributing

To suggest improvements or report issues:
1. Document the issue or enhancement
2. Contact the church administrators
3. Provide detailed description and screenshots if applicable

## 📞 Support & Contact

For technical support or questions about the website:

**Church Contacts:**
- Senior Pastor: Ps. Eprahim Gurung - +91-7204516832
- Junior Pastor: Ps. David Gurung - +91-7019878500

**For Website Issues:**
- Document the problem with screenshots
- Note the browser and device you're using
- Contact church administrators

## 📄 License

This website is created for Gethsemane Nepali A.G Church. All content and design are property of the church.

## 🙏 Acknowledgments

- **Church Logo**: Provided by Gethsemane Nepali A.G Church
- **Icons**: Font Awesome (free version)
- **Fonts**: Google Fonts (Poppins)
- **Design**: Custom design matching church branding

## 📊 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, grid
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome 6**: Icons
- **Google Fonts**: Typography
- **No frameworks**: Pure, lightweight code

## 🎯 Future Enhancements

Potential features to add:
- [ ] Online sermon archive with video player
- [ ] Prayer request submission system
- [ ] Event registration forms
- [ ] Photo gallery with lightbox
- [ ] Newsletter subscription
- [ ] Multi-language support (English/Nepali toggle)
- [ ] Live streaming integration
- [ ] Online giving/donation system
- [ ] Blog section for updates
- [ ] Member login area

## 📈 SEO Recommendations

To improve search engine visibility:
1. Add meta descriptions to all pages
2. Create a sitemap.xml
3. Add structured data (Schema.org)
4. Optimize images with alt text
5. Submit to Google Search Console
6. Create Google My Business listings for both locations
7. Build backlinks from church directories

---

## 🌟 Website Highlights

### ✅ What Makes This Website Special

1. **Perfect Header Alignment** - Navigation menu items are evenly spaced with consistent padding
2. **Stunning Gradient Hero** - Eye-catching gradient that matches church branding
3. **Professional Design** - Modern, clean, and trustworthy appearance
4. **Full Information** - Everything visitors need to know about the church
5. **Mobile-First** - Works beautifully on all devices
6. **Easy to Maintain** - Simple HTML/CSS structure
7. **Fast Performance** - No heavy frameworks, loads instantly

---

**Built with ❤️ for Gethsemane Nepali A.G Church**

*Serving the Nepali Community in Bangalore*

---

## Quick Start Commands

```bash
# View locally (Python)
python -m http.server 8000

# View locally (Node.js)
npx http-server -p 8000

# Deploy to Netlify
netlify deploy --prod

# Deploy to Vercel
vercel --prod
```

**Visit the website:** Open `index.html` in your browser or deploy to web hosting.

---

*Last Updated: 2024*
*Version: 1.0.0*