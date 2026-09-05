import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/sections/Hero/Hero'
import { Faq } from '@/sections/Faq/Faq'
import { About } from '@/sections/About/About'
import { Directions } from '@/sections/Directions/Directions'
import { TrialBanner } from '@/sections/TrialBanner/TrialBanner'
import { LearningProcess } from '@/sections/LearningProcess/LearningProcess'
import { SignupForm } from '@/sections/SignupForm/SignupForm'
import { Certificate } from '@/sections/Certificate/Certificate'
import { Reviews } from '@/sections/Reviews/Reviews'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <About />
        <Directions />
        <TrialBanner />
        <LearningProcess />
        <SignupForm />
        <Certificate />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
