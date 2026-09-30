import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Historia from './components/Historia.jsx'
import Productos from './components/Productos.jsx'
import Mayoristas from './components/Mayoristas.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Historia />
        <Productos />
        <Mayoristas />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
