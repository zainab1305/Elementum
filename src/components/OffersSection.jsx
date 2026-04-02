export default function OffersSection({ bgLine, underlineImg, roundThingImg, offerItems }) {
  return (
    <section className="offers-section">
      <img src={bgLine} className="bg-line bg-line-offers" alt="" aria-hidden="true" />
      <h2 className="offers-title">
        <span className="offers-title-line-one">
          What we <span className="mark mark-mint-badge">can</span>
        </span>
        <span className="offers-title-line-two">
          <span className="mark mark-yellow-underline">
            offer
            <img src={underlineImg} className="underline-img" alt="" aria-hidden="true" />
          </span>{' '}
          you
        </span>
      </h2>

      <ul>
        {offerItems.map((item, index) => (
          <li key={item.title} className={`offer-row${index === 2 ? ' offer-row-accent' : ''}`}>
            <p>{item.label}</p>
            <div className="offer-title-wrap">
              <h3>{item.title}</h3>
              {index === 2 ? (
                <img
                  src={roundThingImg}
                  alt=""
                  aria-hidden="true"
                  className="offer-round-thing"
                />
              ) : null}
            </div>
            <span aria-hidden="true">&rarr;</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
