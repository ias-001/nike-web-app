import React from 'react'
import { services } from '../utils/constant'
import ServiceItem from '../components/ServiceItem'

const Services = () => {
  return (
    <section id="section" className=' max-container flex flex-wrap justify-center gap-9'>
      {services.map(service => (
        <div key={service.label}>
          <ServiceItem {...service} />
        </div>
      ))}
    </section>
  )
}

export default Services