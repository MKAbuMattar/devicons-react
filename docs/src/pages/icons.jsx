import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const DynamicMain = dynamic(() => import('@/components/Main'), {
  loading: () => <Main />,
  suspense: true,
});

import iconsData from '@/data/icons.json';
import { Container } from '@/style/style';

const icons = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Suspense fallback={'Loading...'}>
          <DynamicMain icons={iconsData} isLatest={true} />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default icons;
