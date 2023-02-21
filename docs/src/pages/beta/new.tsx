import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Highlight from '@/components/SyntaxHighlighter';

//data
import iconsDataLatest from '@/data/icons.latest.json';
import iconsDataBeta from '@/data/icons.beta.json';

import {
  Container,
  WhatNew,
  WhatNewTitle,
  WhatNewDescription,
  WhatNewCards,
} from '@/assets/style/style';

const icons = () => {
  // function getDifference(arr1, arr2) {
  //   const arr1Names = arr1.map(obj => obj.name);
  //   const arr2Names = arr2.map(obj => obj.name);

  //   const diffNames = arr1Names.filter(name => !arr2Names.includes(name));

  //   const diffObjs = arr1.map(obj => {
  //     if (diffNames.includes(obj.name)) {
  //       return {
  //         ...obj,
  //         isNew: true
  //       };
  //     } else {
  //       return {
  //         ...obj,
  //         isNew: false
  //       };
  //     }
  //   });

  //   return diffObjs;
  // }

  const getDifference = (arr1, arr2) => {
    const arr1Names = arr1.map((obj) => obj.name);
    const arr2Names = arr2.map((obj) => obj.name);

    const diffNames = arr1Names.filter((name) => !arr2Names.includes(name));

    const diffObjs = arr1.filter((obj) => diffNames.includes(obj.name));

    return diffObjs;
  };

  const difference = getDifference(iconsDataBeta, iconsDataLatest);

  return (
    <>
      <Container>
        <Navbar />
        <WhatNew>
          <WhatNewTitle>What's new? @beta</WhatNewTitle>
          <WhatNewDescription>
            Here you can see what's new in the beta version of the{' '}
            <mark>devicons-react</mark>.
          </WhatNewDescription>
          <WhatNewCards>
            {difference?.map((icon, index: number) => (
              <div key={index}>
                <Highlight language={'JSON'} theme={'Base16Nord'}>
                  {`{
  "index": ${index},
  "isNew": true,
  "name": "${icon.name}", 
  "componentName": "${icon.componentName}"
}`}
                </Highlight>
              </div>
            ))}
          </WhatNewCards>
        </WhatNew>
      </Container>
      <Footer />
    </>
  );
};

export default icons;
