import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';

const DynamicMain = dynamic(() => import('@/components/Main'), {
  loading: () => <Main />,
  suspense: true,
});

import iconsData from '@/data/icons-beta.json';
import { Container } from '@/assets/style/style';

const icons = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Suspense fallback={'Loading...'}>
          <DynamicMain icons={iconsData} isLatest={false} />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default icons;
