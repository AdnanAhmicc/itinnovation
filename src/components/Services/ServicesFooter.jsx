import Link from 'next/link'
import React from 'react'

const ServicesFooter = (props) => {
  return (
    <div className="services-footer">
      <div className="container pb-80">
        <h4 className="fst-italic text-white text-center fw-normal">{props.title}</h4>
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-lg-10 col-md-12">
            <div className="btns mt-40 text-center">
              <Link href="/about" className="butn">
                BOKA MÖTE FÖR RÅDGIVNING
              </Link>
              <Link href="/about" className="butn">
                BOKA MÖTE FÖR BEHOVSANALYS
              </Link>
              <Link href="/about" className="butn">
                BOKA EN DEMO
              </Link>
              <Link href="/about" className="butn">
                BLI KONTAKTAD
              </Link>
              <Link href="/about" className="butn">
                PRATA DIREKT MED SÄLJARE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesFooter