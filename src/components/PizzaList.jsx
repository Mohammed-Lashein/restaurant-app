import styles from '@/styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';
const PizzaList = () => {
  const pizzaArray = [
    '/img/p1.png',
    '/img/p3.png',
    '/img/p4.png',
    '/img/p6.png',
    '/img/p8.png',
    '/img/p10.png',
    '/img/p11.png',
    '/img/p12.png',
  ]
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>The best pizza in town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sequi ipsum, nesciunt placeat mollitia ea praesentium fugit, iste, beatae itaque adipisci deleniti quos vero? Repellat.
      </p>
      <div className={styles.pizzaCardsContainer}>
        {pizzaArray.map((img_source) => (
          <PizzaCard img_source={img_source}/>
        ))}
      </div>
    </div>
  )
}
export default PizzaList