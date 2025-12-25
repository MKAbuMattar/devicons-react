import dynamic from 'next/dynamic';
import {Suspense} from 'react';

import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';

const DynamicMain = dynamic(() => import('@/components/Main'), {
  loading: () => <Loader />,
});

//data
import {Container} from '@/assets/style/style';
import iconsDataBeta from '@/data/icons.beta.json';
import iconsDataLatest from '@/data/icons.latest.json';

const icons = () => {
  function getDifference(arr1, arr2) {
    const arr1Names = arr1.map((obj) => obj.name);
    const arr2Names = arr2.map((obj) => obj.name);

    const diffNames = arr1Names.filter((name) => !arr2Names.includes(name));

    const diffObjs = arr1.map((obj) => {
      if (diffNames.includes(obj.name)) {
        return {
          ...obj,
          isNew: true,
        };
      } else {
        return {
          ...obj,
          isNew: false,
        };
      }
    });

    return diffObjs;
  }

  const difference = getDifference(iconsDataBeta, iconsDataLatest);

  return (
    <>
      <Container>
        <Navbar />
        <Suspense fallback={'Loading...'}>
          <DynamicMain icons={difference} isLatest={false} />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default icons;
