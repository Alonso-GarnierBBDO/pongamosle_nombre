"use client";

import { useState } from "react";
import Image from "next/image";

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
import MotivcacionSegundaComponent from "@/components/page/motivacion_segunda";
import UneteComponent from "@/components/page/unete";
import EsfuerzoProyecto from "@/components/page/esfuerso";
import ImageWord from "@/assets/img/home/word.svg";
import FormComponent from "@/components/page/form";
import FooterComponent from "@/components/static/footer";

type modalContent = {
  active: boolean;
  image: string;
  quienes: string,
  proposito: string,
  campana: string, 
  link: string
};

export default function Home() {
  useLocoScrollFunction();

  const [activeModal, setActiveModal] = useState(false);
  const [image, setImage] = useState("");
  const [quienes, setQuienes] = useState("");
  const [proposito, setProposito] = useState("");
  const [campana, setCampana] = useState("");
  const [link, setLink] = useState("");

  const handleChildEvent = (eventData: modalContent) => {
    setActiveModal(eventData.active);
    setImage(eventData.image);
    setQuienes(eventData.quienes);
    setProposito(eventData.proposito);
    setCampana(eventData.campana);
    setLink(eventData.link);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <>

        <section className="sectionScroll">
          <InicioComponent />
        </section>
        <section className="sectionScroll mensajes_main" data-scroll-section>
          <MensajesComponents />
        </section>
        <section className="sectionScroll">
          <ViolenciaComponent />
        </section>
        <section className="sectionScroll">
          <ComunidadComponent />
        </section>
        <section className="sectionScroll" style={{overflowX: 'hidden'}}>
          <PonerleNombreComponent />
        </section>
        <section className="sectionScroll">
          <MotivcacionComponent />
        </section>
        <section className="sectionScroll" style={{overflow: 'hidden'}}>
          <IniciativaComponent />
        </section>
        <section className="sectionScroll" style={{overflow: 'hidden'}}>
          <CifrasComponent />
        </section>
        <section className="sectionScroll" style={{overflow: 'hidden'}}>
          <VictimasComponent />
        </section>
        <section className="sectionScroll">
          <MotivcacionSegundaComponent />
        </section>
        <section className="sectionScroll">
          <UneteComponent />
        </section>
        <section className="sectionScroll" id="organizaciones">
          <EsfuerzoProyecto onEvent={handleChildEvent} />
        </section>
        <section className="sectionScroll">
          <FormComponent/>
        </section>
        <FooterComponent/>
      <section
        className={"modaEsfuerzo" + " " + (activeModal ? "active" : "")}
        onClick={closeModal}
      >
        <section className="capa">
          <section
            className="content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button className="close" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <section className="photo">
              <img src={image} alt="Photo" width={400} height={400}  />
            </section>
            <section className="content_item">
              <section>

              {

                quienes.length > 0 && 

                <div>
                  <h4>¿quiénes son?</h4>
                  <p> { quienes } </p>
                </div>

              }
              </section>
              <section>
                {
                  proposito.length > 0 &&
                  <div>
                    <h4>¿cúal es su propósito?</h4>
                    <p>{ proposito }</p>
                  </div>
                }
              </section>
              <section>
                {
                  campana.length > 0 &&
                  <div>
                    <h4>¿Por qué apoyan la campaña?</h4>
                    <p>{ campana }</p>
                  </div>
                }
              </section>
             {
              link.length > 0 && 
                <section className="actions">
                  <div>
                    <img src={ImageWord.src} alt="Imagen del enlace" />
                  </div>
                  <a href={link} target="_black" >conoce más</a>
                </section>
             }
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

function useLocoScrollFunction() {
  useEffect(() => {
    locoScrollFunction();
  }, []);
}
