'use client'
import styles from '@/styles/Featured.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Featured = () => {
	const [currentProductSlide, setCurrentProductSlide] = useState(1);
  
	const featuredProducts = [
		{
			img: '/img/p1.png',
			text: 'Our pizzas are always fresh',
		},
		{
			img: '/img/p3.png',
			text: 'Freshly prepared for you',
		},
		{
			img: '/img/p6.png',
			text: 'Buy 1 Get 1 free',
		},
	];

  const handleCarouselIncrement = () => {
    if (currentProductSlide === featuredProducts.length - 1) {
      setCurrentProductSlide(0)
      console.log(currentProductSlide);
      return;
      // The importance of the return is that if this block of code got executed, the code below it is blocked from execution . 
    }
    setCurrentProductSlide(currentProductSlide + 1);
    console.log(currentProductSlide);
  }
  const handleCarouselDecrement = () => {
    if (currentProductSlide === 0) {
      setCurrentProductSlide(featuredProducts.length - 1);
      console.log(currentProductSlide);
      return;
    }
    setCurrentProductSlide((prev) => prev - 1);
    console.log(currentProductSlide);
  }

	const handleBulletClick = (i) => {
		setCurrentProductSlide(i);
	} 


	return (
		<div className={styles.container}>
			<Image
				src='/img/arrowl.png'
				alt='left arrow'
				width={150}
				height={150}
				className={styles.arrowLeft}
        onClick={handleCarouselDecrement}
			/>
			<Image
				src='/img/arrowr.png'
				alt='right arrow'
				width={150}
				height={150}
				className={styles.arrowRight}
        onClick={handleCarouselIncrement}
			/>
			<div className={styles.carouselContainer}>
				<div>
          <div style={{position: 'relative'}}>
            {featuredProducts.map((product,i) => (
              <div className={styles.offersContainer} style={{transform: `translateX(-${currentProductSlide * 100}%)`}} key={i}>
              <h1 className={styles.offerText}>{product.text}</h1>
              <Image
                src={product.img}
                alt='img'
                width={400}
                height={400}
              />
              </div>
            ))}
          </div>

					<div className={styles.bulletsContainer}>
						{featuredProducts.map((product, i) => (
							<span
								className={CuctSlide === i ? styles.bulletActive : styles.bullet}
								key={i}
								onClick={() => handleBulletClick(i)}
							></span>
						))}
					</div>
				</div>
				<div></div>
			</div>
		</div>
	)
}
export default Featured
