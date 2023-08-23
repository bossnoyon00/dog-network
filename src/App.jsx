import './App.css'
import Banner from './components/Banner/Banner'
import DogMessage from './components/DogMessage/DogMessage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Plan from './components/Plan/Plan'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Plan></Plan>
      <DogMessage></DogMessage>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

export default App
