import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/sections/Hero/Hero'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
