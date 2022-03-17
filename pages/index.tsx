import type { NextPage } from 'next'
import Heading from '../components/common/Heading'
import BreadCrumb from '../components/layout/BreadCrumb'

const Home: NextPage = () => {
  return (
    <div>
      <BreadCrumb />
      <Heading>Home Page</Heading>
    </div>
  )
}

export default Home
