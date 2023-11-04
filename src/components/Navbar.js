'use client'
import styles from '@/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // Desktop navbar classes
  const activeMenuClasses = styles.menuIcon + ' ' +  styles.active;
  const inactiveMenuClass = styles.menuIcon;
  // mobile navbar classes
  const mobileActiveMenuClasses = styles.navbarMenuMobile + ' ' + styles.mobileMenuActive;
  const mobileInactiveMenuClasses = styles.navbarMenuMobile;

	return (
    <>
		<nav className={styles.container}>
			<section className={styles.contact}>
				<div className={styles.telephoneImgContainer}>
					<Image
						src='/img/telephone.png'
						alt='telephone'
						width={30}
						height={30}
					/>
				</div>
				<div className={styles.contactDetails}>
					<p>ORDER NOW !</p>
					<p>012 345 678</p>
				</div>
			</section>
			<ul className={styles.navbarMenu}>
				<li>
					<Link href='/'>Homepage</Link>
				</li>
				<li>
					<Link href='/'>Products</Link>
				</li>
				<li>
					<Link href='/'>Menu</Link>
				</li>
				<li>
					<Image
						src='/img/logo.png'
						alt='Logo'
						width={100}
						height={50}
					/>
				</li>
				<li>
					<Link href='/'>Events</Link>
				</li>
				<li>
					<Link href='/'>Blog</Link>
				</li>
				<li>
					<Link href='/'>Contact</Link>
				</li>
			</ul>
      
			<div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
				<div className={styles.cartIconContainer}>
					<Link href='/cart'>
						<Image
							src='/img/cart.png'
							alt='cart icon'
							width={30}
							height={30}
						/>
						<p className={styles.inCartNumber}>2</p>
					</Link>
				</div>
					<div className={openMenu ?  activeMenuClasses: inactiveMenuClass} onClick={() => setOpenMenu(prev => !prev)}>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
					</div>
			</div>
		</nav>
    {/* mobile only start */}
    <ul className={openMenu ? mobileActiveMenuClasses : mobileInactiveMenuClasses}>
      <li>
					<Link href='/'>Homepage</Link>
				</li>
				<li>
					<Link href='/'>Products</Link>
				</li>
				<li>
					<Link href='/'>Menu</Link>
				</li>
				<li>
					<Link href='/'>Events</Link>
				</li>
				<li>
					<Link href='/'>Blog</Link>
				</li>
				<li>
					<Link href='/'>Contact</Link>
				</li>
      </ul>
      {/* mobile only end */}
    </>
  )
}
export default Navbar
