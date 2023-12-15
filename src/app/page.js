import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Featured/>
      <PizzaList/>
    </main>
  )
}
