'use client';

import ImageTest from "@/assets/img/home/person_logo.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Share bottons
import {
  FacebookShareButton,
} from "next-share";

// Groups
import FacebookImage from "@/assets/img/home/share/facebook.svg";
import URLImage from "@/assets/img/home/share/url.svg";
import Megafono from "@/assets/img/home/megafono.svg";
import DescargarImage from '@/assets/img/home/share/downloand.svg';

// All Image
import ImageOne from '@/assets/img/home/compartir/01.png';
import ImageTwo from '@/assets/img/home/compartir/02.png';
import ImageTres from '@/assets/img/home/compartir/03.png'
import ImageCuatro from '@/assets/img/home/compartir/04.png';
import ImageCinco from '@/assets/img/home/compartir/05.png';
import ImageSeis from '@/assets/img/home/compartir/06.png';
import ImageSiete from '@/assets/img/home/compartir/07.png';
import ImageOcho from '@/assets/img/home/compartir/08.png';
import ImageNueve from '@/assets/img/home/compartir/09.png';

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

function UneteComponent() {
  const [viewModal, setViewModal] = useState(false);
  const [url, setUrl] = useState('');

  function modal(e: React.MouseEvent) {
    e.stopPropagation(); // Evita la propagación del evento
    e.nativeEvent.stopImmediatePropagation();
    viewModal ? setViewModal(false) : setViewModal(true);
  }

  async function copyElement(url: string, event: React.MouseEvent) {
    const child = event.currentTarget;

    try {
      if (child) {
        const image = child.querySelector("img");
        const svg = child.querySelector("svg");

        if (image && svg) {
          image.style.display = "none";
          svg.style.display = "block";
          await navigator.clipboard.writeText(url);
          setTimeout(() => {
            image.style.display = "block";
            svg.style.display = "none";
          }, 1500);
        }
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  useEffect(()=>{
    setUrl(window.location.origin)
  }, [])

  const shared = [
    {
      img: ImageOne.src,
      title: "No es broma, es discriminación",
    },
    {
      img: ImageNueve.src,
      title: "No es falta de recursos, es indiferencia",
    },
    {
      img: ImageTres.src,
      title: "No es biología, es transfobia",
    },
    {
      img: ImageCuatro.src,
      title: "No es falta de recursos, es irresponsabilidad",
    },
    {
      img: ImageCinco.src,
      title: "No es ser diferentes, es descriminación",
    },
    {
      img: ImageSeis.src,
      title: "No es una frase chapina, es racismo",
    },
    {
      img: ImageSiete.src,
      title: "No es una forma de pago, es violencia migratoria",
    },
    {
      img: ImageOcho.src,
      title: "No es el 'SISTEMA', es violencia",
    },
  ];



  return (
    <>
      <section className="uneteComponent" id="comparte">
        <motion.section
          className="header_unete"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <Image
            src={Megafono.src}
            title="Megafono ilustrativo"
            alt="Megafono ilustrativo"
            width={200}
            height={200}
          />
          <section>
            <h2>Únete y comparte la campaña</h2>
            <p>
              Ayudanos a difundir nuestro mensaje y así más personas entiendan
              que, para ponerle fin a la violencia, el primer paso es llamar las
              cosas por su nombre.
            </p>
          </section>
        </motion.section>
        <motion.section
          className="slider"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="slideContent"
          >
            {shared.map((item, key) => {
              return (
                <SwiperSlide className="item" key={key}>
                  <Image
                    src={item.img}
                    alt="Imagen de unete"
                    title="Imagen de unete"
                    width={300}
                    height={300}
                  />
                  <div className="group">
                    <FacebookShareButton
                      url={`${url}${item.img}`}
                      quote={item.title}
                      title={item.title}
                    >
                      <Image
                        src={FacebookImage.src}
                        width={100}
                        height={100}
                        alt="Icono de facebook"
                      />
                    </FacebookShareButton>
                    <a href={`${url}${item.img}`} download={item.title} target="_black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>

                      <Image
                        src={DescargarImage.src}
                        alt="Copiar"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.section>
      </section>
    </>
  );
}

export default UneteComponent;
