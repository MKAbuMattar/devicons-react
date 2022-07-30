import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const DynamicMain = dynamic(() => import('@/components/Main'), {
  loading: () => <Main />,
  suspense: true,
})

import iconsData from '@/data/icons.json'

import { Grid, Container } from '@/style/style'

const icons = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Suspense fallback={`Loading...`}>
          <DynamicMain icons={iconsData} isLatest={true} />
        </Suspense>
      </Container>
      <Footer />
    </>
  )
}

export default icons
