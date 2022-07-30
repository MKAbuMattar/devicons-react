import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { Grid, Container } from '@/style/style'

const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Header />
      </Container>
      <Footer />
    </div>
  )
}

export default Home
