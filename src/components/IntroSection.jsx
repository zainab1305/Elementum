export default function IntroSection({
  title,
  description,
  linkLabel,
  linkAriaLabel,
  imageSrc,
  imageAlt,
  reverse = false,
  background = null,
  shapes = null,
}) {
  return (
    <section className={`intro-card${reverse ? ' reverse' : ''}`}>
      {background}
      <div className="intro-copy">
        {title}
        <p>{description}</p>
        <a href="#" className="inline-link" aria-label={linkAriaLabel}>
          {linkLabel}
        </a>
      </div>
      <div className="intro-image-wrap">
        {shapes}
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  )
}
