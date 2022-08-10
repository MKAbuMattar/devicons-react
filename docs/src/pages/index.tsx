import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Container } from '@/assets/style/style';

const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Header />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
