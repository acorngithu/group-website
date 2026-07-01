// src/data/gallery.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the Gallery page. Each { } block is one image:
//   • src     — path under /public, e.g. "/gallery/lab-2025.jpg".
//               Files go in /public/gallery/ (self-hosted = loads in China).
//   • caption — optional text shown under / over the image.
//   • alt     — optional accessible description (falls back to the caption).
// Images render in a grid in this order. Missing files show a placeholder.
// ─────────────────────────────────────────────────────────────────────────

export interface GalleryItem {
  src: string;
  caption?: string;
  alt?: string;
}

export const gallery: GalleryItem[] = [
  { src: "/gallery/photo-1.jpg", caption: "Placeholder caption — e.g. group retreat, 2025." },
  { src: "/gallery/photo-2.jpg", caption: "Conference trip." },
  { src: "/gallery/photo-3.jpg", caption: "In the lab." },
  { src: "/gallery/photo-4.jpg", caption: "Fieldwork." },
  { src: "/gallery/photo-5.jpg", caption: "Seminar." },
  { src: "/gallery/photo-6.jpg", caption: "Celebrating a new paper." },

  // ── add more photos below ──
];
