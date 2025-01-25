import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import Facts from './Facts'
import Features from './Features'
import Services from './Services'
import Latest from './Latest'
import Team from './Team'
import Clients from './Clients'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
    <Banner/>
    <About/>
    <Facts/>
    <Features/>
    <Services/>
    <Latest/>
    <Team/>
    <Clients/>
    <Footer/>
    </>
  )
}
