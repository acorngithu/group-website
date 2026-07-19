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
  captionZh?: string;
  alt?: string;
}

export const gallery: GalleryItem[] = [
  { src: "/gallery/photo-1.jpg", caption: "Placeholder caption — e.g. group retreat, 2025.", captionZh: "占位说明 —— 例如：2025 年组内团建。" },
  { src: "/gallery/photo-2.jpg", caption: "Conference trip.", captionZh: "学术会议出行。" },
  { src: "/gallery/photo-3.jpg", caption: "In the lab.", captionZh: "实验室日常。" },
  { src: "/gallery/photo-4.jpg", caption: "Fieldwork.", captionZh: "外场工作。" },
  { src: "/gallery/photo-5.jpg", caption: "Seminar.", captionZh: "组会研讨。" },
  { src: "/gallery/photo-6.jpg", caption: "Celebrating a new paper.", captionZh: "庆祝新论文发表。" },

  // ── add more photos below ──
];
