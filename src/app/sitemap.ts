import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jaisa.example", lastModified: new Date("2026-08-19") },
  ];
}
