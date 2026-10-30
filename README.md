# AutoVideoBuilder Studio V2 — Official Landing Page

A modern, responsive, high-converting one-pager website for **AutoVideoBuilder Studio V2**, designed for easy deployment to **Netlify** or **Vercel**.

---

## 🚀 1. How to Deploy in 2 Minutes

### Option A: Deploy on Netlify (Easiest / Drag & Drop)
1. Go to **[netlify.com](https://www.netlify.com/)** and log in.
2. Go to your dashboard and click **"Add new site"** → **"Deploy manually"** (or open [app.netlify.com/drop](https://app.netlify.com/drop)).
3. Drag and drop this entire folder (`C:\Users\PC\autovideobuilder-website`) into the browser box.
4. Your website will be live in **10 seconds**!
5. (Optional) In Site Settings, you can set a free custom subdomain like `autovideobuilder.netlify.app`.

### Option B: Deploy on Vercel
1. Go to **[vercel.com](https://vercel.com/)** and log in.
2. Click **"Add New Project"**.
3. Import your GitHub repository or use the Vercel CLI:
   ```bash
   npm i -g vercel
   cd C:\Users\PC\autovideobuilder-website
   vercel
   ```
4. Accept the default static site settings. Vercel will deploy it instantly to a free `.vercel.app` URL.

---

## ⚡ 2. How to Update Download Links & Version in the Future

Whenever you release a new update (e.g. `v2.2.0` or `v3.0.0`), you **only need to change one file**:

Open: **`config.js`**

```javascript
const SITE_CONFIG = {
  version: "2.2.0",  // <-- Change version here
  fileSize: "475 MB", // <-- Change size here

  // Change the download link to your new GitHub Release or cloud link:
  downloadUrl: "https://github.com/advsyednaeemshah/autovideo-updates/releases/download/v2.2.0/AutoVideoBuilder_v2.2.0.zip",

  // (Optional) Change price or WhatsApp number here:
  pricePKR: "3,000",
  whatsAppNumber: "923170036949",
};
```

**That's it!** All download buttons, version badges, file sizes, and WhatsApp links across the entire website will update **automatically**.

---

## 💻 3. Key Website Highlights
* **Exclusively for Windows PC / Laptop Notice:** Bold banner clearly notifying visitors that this is desktop software for Windows 10/11, not for mobile phones.
* **Direct 1-Click Download:** Prominently links to your latest verified release ZIP on GitHub Releases.
* **Embedded Demo Video:** Includes the built-in promo video (`demo-promo.mp4`) showing the app in action.
* **74+ Voices Showcase:** Highlights Urdu (Uzma, Asad, Gul, Salman), Hindi (Swara, Madhur), English, and Arabic voices.
* **One-Time Lifetime Pricing Box (Rs. 3,000):** Clear callout with EasyPaisa and MCB Bank account details and 1-click "Copy Number" buttons.
* **Direct WhatsApp Integration:** Floating WhatsApp button and "Buy License" buttons pre-filled with order messages.
* **Interactive FAQ Accordion:** Answers common student questions about installation, monetization, and trials.

---

## 📁 Project Structure
```
autovideobuilder-website/
├── index.html           # Main landing page
├── config.js            # Central configuration (Version, Links, Pricing, WhatsApp)
├── README.md            # Documentation & deployment guide
├── assets/
│   ├── css/
│   │   └── style.css    # Custom luxury dark theme styling & animations
│   ├── js/
│   │   └── app.js       # Dynamic config injection, mobile menu, FAQ accordion
│   ├── images/
│   │   └── demo-poster.jpg
│   └── videos/
│       └── demo-promo.mp4  # Offline demo video
```
