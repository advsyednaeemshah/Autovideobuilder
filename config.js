/**
 * =========================================================================
 * AUTOVIDEOBUILDER WEBSITE CONFIGURATION
 * =========================================================================
 * Whenever you push a new update or change pricing / WhatsApp details,
 * simply change the values below. All download buttons, version badges,
 * pricing boxes, and contact links across the entire website will update
 * AUTOMATICALLY!
 * =========================================================================
 */

const SITE_CONFIG = {
  // Software Version Details
  appName: "AutoVideoBuilder Studio V2",
  version: "2.1.0",
  releaseDate: "October 2026",
  fileSize: "471 MB",
  platform: "Windows 10 & 11 (64-Bit)",

  // Main Download Link (Direct Zip File from GitHub Releases or Cloud)
  // When you release a new version (e.g., v2.2.0), just update this link:
  downloadUrl: "https://github.com/advsyednaeemshah/autovideo-updates/releases/download/v2.1.0/AutoVideoBuilder_v2.1.0.zip",

  // GitHub Release Notes Page
  releaseNotesUrl: "https://github.com/advsyednaeemshah/autovideo-updates/releases/tag/v2.1.0",

  // Pricing & License Information
  pricePKR: "3,000",
  originalPricePKR: "15,000",
  discountPercent: "80% OFF",
  licenseType: "Lifetime Commercial License (One-Time Payment)",

  // Payment & Bank Transfer Details
  developerName: "Syed Naeem Shah",
  whatsAppNumber: "923170036949",          // Without '+' or spaces for wa.me link
  whatsAppDisplay: "+92 317 0036949",      // Formatted for display
  accountTitle: "SYED NAEEM SHAH",
  easyPaisaNumber: "0317 0036949",
  bankName: "MCB Bank",
  bankAccountNumber: "1340210651001157",
  bankIBAN: "PK73MUCB1340210651001157",

  // Pre-filled WhatsApp Messages
  messages: {
    buyLicense: "Hi Syed! I visited your website and I want to purchase the Full Lifetime License for AutoVideoBuilder Studio V2 (PKR 3,000). Please share payment and activation details.",
    support: "Hi Syed! I need help or have a question regarding AutoVideoBuilder Studio V2.",
    trialInquiry: "Hi Syed! I downloaded AutoVideoBuilder Studio V2 and started my trial. Can you guide me on how to get the most out of it?"
  },

  // Free Trial Offer
  trial: {
    durationHours: 24,
    freeProjects: 6,
    creditCardRequired: false
  },

  // Demo Video
  demoVideo: {
    localPath: "assets/videos/demo-promo.mp4",
    posterPath: "assets/images/demo-poster.jpg",
    youtubeEmbedUrl: "" // Leave empty to use local video, or paste "https://www.youtube.com/embed/YOUR_ID"
  }
};

// Freeze config to prevent accidental runtime overrides
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}
