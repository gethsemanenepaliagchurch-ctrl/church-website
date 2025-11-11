# Quick Start Guide

## 🚀 Get Your Website Running in 3 Steps

### Step 1: Download
Download all the project files to your computer.

### Step 2: Open the Website
**Option A: Simple (Double-click)**
```
Double-click on index.html
```

**Option B: Local Server (Better)**
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

### Step 3: Customize
Edit the HTML files to update your church information!

---

## 📁 What's Included

```
Your Website Files:
├── index.html           → Home page
├── about.html          → About us
├── ministries.html     → Church ministries
├── events.html         → Upcoming events
├── pastors.html        → Meet our pastors
├── locations.html      → Church locations
├── contact.html        → Contact form
├── css/
│   ├── style.css       → Main styles
│   └── pages.css       → Page styles
├── js/
│   └── main.js         → Interactive features
└── README.md           → Full documentation
```

---

## ✏️ Quick Customization

### Update Church Name
**Find in all files:**
```html
<h1>Gethsemane Nepali A.G Church</h1>
```
**Replace with your church name**

### Update Pastor Information
**Find in footer of all pages:**
```html
<p><strong>Senior Pastor:</strong><br>Ps. Eprahim Gurung<br>+91-7204516832</p>
```
**Update with your pastor details**

### Change Colors
**Edit: css/style.css**
```css
:root {
    --primary-blue: #1e3a8a;    /* Your color here */
    --primary-orange: #f97316;   /* Your color here */
}
```

### Update Service Times
**Edit: index.html & locations.html**

Find the timing sections and update as needed.

---

## 🌐 Publishing Your Website

### Free Hosting Options

**1. Netlify (Easiest)**
1. Go to netlify.com
2. Drag and drop your folder
3. Done! You get a free URL

**2. GitHub Pages**
1. Create GitHub account
2. Create repository
3. Upload files
4. Enable Pages in settings

**3. Vercel**
1. Go to vercel.com
2. Import your files
3. Deploy

---

## 📱 Test Your Website

**Desktop**: Open in Chrome, Firefox, Safari
**Mobile**: Open on your phone's browser
**Tablet**: Test on tablet if available

---

## 🆘 Common Issues

**Problem**: Images not showing
**Solution**: Check image URLs are correct

**Problem**: Menu not working on mobile
**Solution**: Make sure main.js is loaded

**Problem**: Contact form not sending emails
**Solution**: Form is demo only - needs backend setup (see README.md)

---

## 📞 Need Help?

Contact your church administrators or refer to the detailed README.md file for more information.

---

## ✅ Checklist Before Going Live

- [ ] Updated all pastor information
- [ ] Updated service times
- [ ] Updated church addresses
- [ ] Tested on mobile phone
- [ ] Tested contact form
- [ ] Updated social media links
- [ ] Added Google Maps (optional)
- [ ] Checked all links work
- [ ] Spell-checked all content
- [ ] Compressed images (if any added)

---

**Your church website is ready to serve your community! 🎉**