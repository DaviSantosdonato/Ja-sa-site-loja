import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const frames = [
  { src: "/media/jaisa/man.webp", alt: "Editorial masculino demonstrativo" },
  { src: "/media/jaisa/child.webp", alt: "Editorial infantil demonstrativo" },
  {
    src: "/media/jaisa/shoes.webp",
    alt: "Editorial demonstrativo de calçados",
  },
  { src: "/media/jaisa/woman.webp", alt: "Editorial feminino demonstrativo" },
];

export function MovingGallery() {
  return (
    <section className="moving-gallery" aria-labelledby="gallery-title">
      <div className="moving-gallery__intro section-shell">
        <SectionLabel index="03">Em movimento</SectionLabel>
        <h2 id="gallery-title" data-reveal>
          Moda que acompanha
          <em>o ritmo da vida.</em>
        </h2>
      </div>
      <div className="gallery-stage" data-gallery-stage>
        <div className="gallery-word" aria-hidden="true">
          JAÍSA
        </div>
        <div
          className="gallery-track"
          data-gallery-track
          role="region"
          aria-label="Galeria editorial"
          tabIndex={0}
        >
          {frames.map((frame, index) => (
            <figure
              className={`gallery-frame gallery-frame--${index + 1}`}
              key={frame.src}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                sizes="(max-width: 720px) 70vw, 27vw"
              />
              <figcaption>0{index + 1} / Movimento real</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
