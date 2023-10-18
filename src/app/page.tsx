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

type modalContent = {
  active: boolean;
  image: string;
};

export default function Home() {
  useLocoScrollFunction();

  const [activeModal, setActiveModal] = useState(false);
  const [image, setImage] = useState("");

  const handleChildEvent = (eventData: modalContent) => {
    setActiveModal(eventData.active);
    setImage(eventData.image);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <>
      <section className="locomotive_scroll">
        <section className="sectionScroll">
          <InicioComponent />
        </section>
        <section className="sectionScroll mensajes_main">
          <MensajesComponents />
        </section>
        <section className="sectionScroll">
          <ViolenciaComponent />
        </section>
        <section className="sectionScroll">
          <ComunidadComponent />
        </section>
        <section className="sectionScroll">
          <PonerleNombreComponent />
        </section>
        <section className="sectionScroll">
          <MotivcacionComponent />
        </section>
        <section className="sectionScroll">
          <IniciativaComponent />
        </section>
        <section className="sectionScroll">
          <CifrasComponent />
        </section>
        <section className="sectionScroll">
          <VictimasComponent />
        </section>
        <section className="sectionScroll">
          <MotivcacionSegundaComponent />
        </section>
        <section className="sectionScroll">
          <UneteComponent />
        </section>
        <section className="sectionScroll">
          <EsfuerzoProyecto onEvent={handleChildEvent} />
        </section>
        <section className="sectionScroll">
          <FormComponent/>
        </section>
      </section>
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
              <Image src={image} width={400} height={400} alt="Photo" />
            </section>
            <section className="content_item">
              <section>
                <h4>¿quiénes son?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </section>
              <section>
                <h4>¿cúal es su propósito?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </section>
              <section>
                <h4>¿Por qué apoyan la campaña?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </section>
              <section className="actions">
                <div>
                  <img src={ImageWord.src} alt="Imagen del enlace" />
                </div>
                <a href="@">conoce más</a>
              </section>
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
