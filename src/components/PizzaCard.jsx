import styles from '@/styles/PizzaCard.module.css'
import  Image  from 'next/image';

const PizzaCard = ({img_source}) => {
  return (
    <div className={styles.pizzaCardContainer}>
      <Image src={img_source} alt={'img'} width={200} height={200}/>
      <h3 className={styles.pizzaName}>
        fiorda di zucci
      </h3>
      <p className={styles.pizzaPrice}>
        $19.9
      </p>
      <p className={styles.pizzaDesc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
export default PizzaCard