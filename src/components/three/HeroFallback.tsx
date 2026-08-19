import Image from "next/image";

export function HeroFallback() {
  return (
    <div className="hero-fallback" aria-hidden="true">
      <div className="hero-fallback__frame hero-fallback__frame--one">
        <Image
          src="/media/jaisa/woman.webp"
          alt=""
          fill
          fetchPriority="high"
          loading="eager"
          quality={78}
          sizes="(max-width: 720px) 48vw, 29vw"
        />
      </div>
      <div className="hero-fallback__frame hero-fallback__frame--two">
        <Image
          src="/media/jaisa/man.webp"
          alt=""
          fill
          quality={78}
          sizes="(max-width: 720px) 42vw, 25vw"
        />
      </div>
      <div className="hero-fallback__frame hero-fallback__frame--three">
        <Image
          src="/media/jaisa/child.webp"
          alt=""
          fill
          quality={75}
          sizes="18vw"
        />
      </div>
    </div>
  );
}
