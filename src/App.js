import React from 'react'
import { Hero, CustomerReview, Footer, PopulorProduct, Services, SpecialOffers, Subscribe, SuperQuality } from './sections'
import { Navbar } from './components'

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopulorProduct />
      </section>
      <section className='padding padding-x py-10'>
        <SuperQuality />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReview />
      </section>
      <section className='padding-x sm:py:32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App