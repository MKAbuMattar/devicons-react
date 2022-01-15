import { Fragment } from 'react'
import FilteredList from '../components/FilteredList/FilteredList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const index = () => {
  return (
    <Fragment>
      <Header />
      <FilteredList />
      <Footer/>
    </Fragment>
  )
}

export default index
