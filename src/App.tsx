import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/sections/Hero/Hero'
import { Faq } from '@/sections/Faq/Faq'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
