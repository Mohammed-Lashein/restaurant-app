import styles from '@/styles/Footer.module.css'
import  Image  from 'next/image';
const Footer = () => {
  return (
    <div className={styles.container}>
      <section>
        <Image src='/img/bg.png' alt='footer img' width={300} height={300}/>
      </section>
      <section>
        <h1>
        OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
        </h1>
      </section>
      <section>
        <h1>
          Find our restaurants
        </h1>
        <p>
        1654 R. Don Road #304.
NewYork, 85022
(602) 867-1010
        </p>
        <p>
        2356 K. Laquie Rd #235.
NewYork, 85022
(602) 867-1011
        </p>
        <p>
        1614 E. Erwin St #104.
NewYork, 85022
(602) 867-1012
        </p>
        <p>
        1614 W. Caroll St #125.
NewYork, 85022
(602) 867-1013
        </p>
      </section>
      <section>
        <h1>
          working hours
        </h1>
        <p>
        MONDAY UNTIL FRIDAY
9:00 &ndash; 22:00
        </p>
         <p>
         SATURDAY - SUNDAY
12:00 &ndash; 24:00
        </p>
      </section>
    </div>
  )
}
export default Footer