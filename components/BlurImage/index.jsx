import React from 'react'
import Image from 'next/image'


/**
 * Handling blur Image with tailwindcss
 * @param props
 * @param {string} props.className Class name of the wrapped div.
 * @param {string} props.src Source url of the image.
 * @param {string} props.alt Alternative text of the image.
 * @returns {JSX.Element} Image with blur effect.
 */
const BlurImage = ({src, className, alt}) => {
  const [isLoading, setLoading] = React.useState(true)
  const cn = (...classes) => {
    return classes.join(' ')
  }

  return (
      <div className={className + ' relative'}>
        <Image
            className={cn('duration-700 ease-in-out',
                isLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
            )}
            layout={'fill'}
            objectFit={'cover'}
            src={src}
            alt={alt}
            onLoadingComplete={() => { setLoading(false) }}
        />
      </div>
  )
}

export default BlurImage
