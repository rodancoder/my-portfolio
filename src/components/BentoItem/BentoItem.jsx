import SocialGrid from '../SocialGrid/SocialGrid'
import TechStack from '../TechStack/TechStack'
import './BentoItem.scss'

const BentoItem = ({ data }) => {
  const { areaName, heading, subheading, description, content, image, tools, social } = data

  return (
    <section className={`BentoItem BentoItem--${areaName}`} style={{ gridArea: areaName }}>
      {heading && <h2 className='BentoItem-heading'>{heading}</h2>}

      {subheading && <h3 className='BentoItem-subheading'>{subheading}</h3>}

      {description && <p className='BentoItem-description'>{description}</p>}

      {content &&
        content.map((paragraph, i) => (
          <p key={i} className='BentoItem-paragraph'>
            {paragraph}
          </p>
        ))}

      {tools && <TechStack list={tools} />}

      {social && <SocialGrid links={social} />}

      {image && (
        <span className='BentoItem-pic'>
          <img src={image.imgSrc} alt={image.alt} className='BentoItem-image' loading='lazy' />
        </span>
      )}
    </section>
  )
}

export default BentoItem
