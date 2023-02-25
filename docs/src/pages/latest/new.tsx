import { Container } from '@/assets/style/style';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const icons = () => {
  return (
    <>
      <Container>
        <Navbar />
        <div>
          <h1>What's new</h1>
          <p>Here you can find the latest changes and updates.</p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default icons;
