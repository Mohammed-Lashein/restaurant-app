'use client'
import styles from '@/styles/Featured.module.css'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const Featured = () => {

	let featuredProducts = [
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
			text: 'Our weekly offer, buy 1 Get 1 free',
		},
	]

	const [currentProductSlideIndex, setCurrentProductSlideIndex] = useState(0)
	const [prevProductSlideIndex, setPrevProductSlideIndex] = useState(0)
	const [productsArray, setProductsArray] = useState(featuredProducts)
	const carousel = useRef(null)
	let productsArrayOfElements = carousel?.current?.children
	// Using optional chaining above is very important as we don't have the element directly , so if we try to access a property on a null object all the program will stop due to the error thrown (but on using optional chaining, we just get undefined and the program works with no problems . )

	

	const handleCarouselIncrement = () => {
		if (currentProductSlideIndex === featuredProducts.length - 1) {
			setCurrentProductSlideIndex(0)
			setPrevProductSlideIndex(featuredProducts.length - 1)
			return
			// The importance of the return is that if this block of code got executed, the code below it is blocked from execution .
		}
		setPrevProductSlideIndex(currentProductSlideIndex)
		setCurrentProductSlideIndex((prev) => prev + 1)

		/* Good comments: 
		1. Don't forget that the target element is stored in the current property
		2. After logging what we've got, it is an HTML collection . And if you inspect it's prototype, you won't find the map higher order function, so we need to first convert that HTML collection to an array */
	}

	useEffect(() => {
		// The above one should print the correct value of the current slide since we're using useEffect

		if (productsArrayOfElements) {
			productsArrayOfElements = Array.from(productsArrayOfElements)
			productsArrayOfElements.forEach((el) => el.classList.add('sliding-transition'))
			// productsArrayOfElements.map((el, i) => (el.style.transform = `translateX(-${currentProductSlideIndex * 100}%)`))
			productsArrayOfElements.map((el, i) => (el.style.transform = `translateX(-100%)`))

			console.log(`Current Product slide index is: ${currentProductSlideIndex}`);
			console.log(`Prev slide index is: ${prevProductSlideIndex}`);


			setTimeout(() => {
				productsArrayOfElements.forEach((el) => (el.style.transform = ''))
				console.log(productsArrayOfElements);

				const elToAppend = featuredProducts.splice(prevProductSlideIndex, 1)
				let updatedProductsArray = featuredProducts.concat(...elToAppend)
				/* I spreaded out elToAppend since after logging and reading in the docs, I found that the splice method returns an array containing the deleted elements even if they're only one . I could have done elToAppend[0], but I prefered using the spread operator .  */

				setProductsArray(updatedProductsArray)

				// carousel?.current.appendChild(productsArrayOfElements[prevProductSlideIndex])
				// productsArrayOfElements.forEach((el) => el.classList.remove('sliding-transition'))
			}, 500)
		}
	}, [currentProductSlideIndex, prevProductSlideIndex, productsArrayOfElements])

	const handleCarouselIncrementAndUpdate = () => {
		handleCarouselIncrement()
		/* After asking chatGPT why in the code he provided he put the handleCarouselIncrement fn in another fn, he gave me some reasons, but to sum up : 
		1. To separate concerns, where one function updates the state and another one deals with the side effects . 
		2. It is a cleaner way to separate the logic */
	}

	const handleCarouselDecrement = () => {
		if (currentProductSlideIndex === 0) {
			setCurrentProductSlideIndex(featuredProducts.length - 1)
			return
		}
		setCurrentProductSlideIndex((prev) => prev - 1)
	}

	const handleBulletClick = (i) => {
		setCurrentProductSlideIndex(i)
	}

	return (
		<div className={styles.container}>
			<Image
				src='/img/arrowl.png'
				alt='left arrow'
				width={100}
				height={100}
				className={styles.arrowLeft}
				onClick={handleCarouselDecrement}
			/>
			<Image
				src='/img/arrowr.png'
				alt='right arrow'
				width={100}
				height={100}
				className={styles.arrowRight}
				onClick={handleCarouselIncrementAndUpdate}
			/>

			<div
				className={styles.carouselContainer}
				ref={carousel}
			>
				{featuredProducts.map((product,i) => (
					<div
						className={styles.featuredProduct}
						key={product.text}
						productnumber = {i + 1}
					>
						<h1>{product.text}</h1>
						<Image
							src={product.img}
							width={300}
							height={300}
							className={styles.productImage}
							alt={product.text}
						/>
					</div>
				))}
			</div>

			<div className={styles.bulletsContainer}>
				{featuredProducts.map((product, i) => (
					<span
						className={currentProductSlideIndex === i ? styles.bulletActive : styles.bullet}
						key={i}
						onClick={() => handleBulletClick(i)}
					></span>
				))}
			</div>
		</div>
	)
}
export default Featured
