import ImageTest from "@/assets/img/home/imageTest.jpg";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Share bottons
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";

// Groups
import SharedImage from "@/assets/img/home/share/shared.svg";
import FacebookImage from "@/assets/img/home/share/facebook.svg";
import InImage from "@/assets/img/home/share/in.svg";
import TwitterImage from "@/assets/img/home/share/twitter.svg";
import URLImage from "@/assets/img/home/share/url.svg";
import Megafono from "@/assets/img/home/megafono.svg";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

function UneteComponent() {
  const [viewModal, setViewModal] = useState(false);
  const [copyLink, setCopyLink] = useState(false);

  function modal(e: React.MouseEvent) {
    e.stopPropagation(); // Evita la propagación del evento
    e.nativeEvent.stopImmediatePropagation();
    viewModal ? setViewModal(false) : setViewModal(true);
  }

  async function copyElement(url : string, event: React.MouseEvent) {

    const child = event.currentTarget;

    try {
      if(child){

        const image = child.querySelector('img');
        const svg = child.querySelector('svg');

        if(image && svg){
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

  const shared = [
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
    {
        img: ImageTest.src,
        url: 'https://github.com/next-share',
        title: 'next-share is a social share buttons for your next React apps.'
        
    },
  ]

  useEffect(() => {}, []);

  return (
    <>
      <section className="uneteComponent">
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
            {
                shared.map((item, key) => {
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
                                <LinkedinShareButton
                                url={item.url}
                                title={item.title}
                                >
                                <Image
                                    src={InImage.src}
                                    width={100}
                                    height={100}
                                    alt="Icono de Linkedin"
                                />
                                </LinkedinShareButton>

                                <FacebookShareButton
                                url={item.url}
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
                                <TwitterShareButton
                                    url={item.url}
                                    title={item.title}
                                >
                                <Image
                                    src={TwitterImage.src}
                                    width={100}
                                    height={100}
                                    alt="Icono de X"
                                />
                                </TwitterShareButton>
                                <button onClick={(event) => copyElement(item.url, event)} disabled={copyLink}>
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
                                    src={URLImage.src}
                                    alt="Copiar"
                                    width={100}
                                    height={100}
                                    />
                                </button>
                            </div>
                            </SwiperSlide>
                    )
                })
            }
          </Swiper>
        </motion.section>
      </section>
    </>
  );
}

export default UneteComponent;
