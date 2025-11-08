// Centralized brand asset mapping. Update paths to switch images without touching components.
// All paths are relative to the CRA public/ folder (start with "/images/").

export const assets = {
  headerLogo: "/images/LogoNoText.png",         // Small square mark for header
  footerLogo: "/images/LogoNoText.png",         // Small square mark for footer
  heroLogo: "/images/Logo.png",                 // Prominent hero mark with name
  arcadiaxLogo: "/images/ArcadiaX-Logo (1).png", // ArcadiaX product logo
  seoImage: "/images/LogoNoText.png",           // Default social/OG image
  team: {
    rens: "/images/Rens Rens Text (2).png",
    ruslan: "/images/Ruslan GGeese Text Old (2).png",
  },
  videoThumbnailFallback: "/images/LogoNoText.png",
};

export default assets;
