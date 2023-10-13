'use client';


import React, { useEffect } from 'react';
import InicioComponent from "@/components/page/inicio";
import MensajesComponents from "@/components/page/mensajes";


export default function Home() {

  // Animacion suave
  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const container : HTMLElement | null = document.querySelector('[data-scroll-container]');
      if(container){
        new locomotiveModule.default({
          el: container,
          smooth: true,
          getSpeed: true,
        })
      }
    })
  }, [])

  return (
      <>
        <section data-scroll-container>
          <section data-scroll-section className='sectionScroll'>
            <InicioComponent/>
          </section>
          <section data-scroll-section className='sectionScroll'>
            <MensajesComponents/>
          </section>
        </section>
      </>
  )
}
