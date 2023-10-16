'use client';

import React, { useEffect } from "react";
import InicioComponent from "@/components/page/inicio";
import MensajesComponents from "@/components/page/mensajes";
import ViolenciaComponent from "@/components/page/violencia";
import locoScrollFunction from "@/hook/useLocoScroll";
import ComunidadComponent from "@/components/page/comunidad";
import PonerleNombreComponent from "@/components/page/ponerle_nombre";
import MotivcacionComponent from "@/components/page/motivacion";
import IniciativaComponent from "@/components/page/iniciativa";
import CifrasComponent from "@/components/page/cifras";
import VictimasComponent from "@/components/page/victimas";

export default function Home() {

  useLocoScrollFunction();


  return (
      <>
        <section className='locomotive_scroll'>
          <section className='sectionScroll'>
            <InicioComponent/>
          </section>
          <section className='sectionScroll mensajes_main'>
            <MensajesComponents/>
          </section>
          <section className="sectionScroll">
            <ViolenciaComponent/>
          </section>
          <section className="sectionScroll">
            <ComunidadComponent/>
          </section>
          <section className="sectionScroll">
            <PonerleNombreComponent/>
          </section>
          <section className="sectionScroll">
            <MotivcacionComponent/>
          </section>
          <section className="sectionScroll">
            <IniciativaComponent/>
          </section>
          <section className="sectionScroll">
            <CifrasComponent/>
          </section>
          <section className="sectionScroll">
            <VictimasComponent/>
          </section>
        </section>
      </>
  )
}


function useLocoScrollFunction() {
  useEffect(() => {
    locoScrollFunction();
  }, []);
}
 