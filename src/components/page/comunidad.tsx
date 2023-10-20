/**
 * En este archivo se muestra la tercer seccion del home la cual es la repeticion
 */
'use client';

import Image from 'next/image';
import { motion} from 'framer-motion';
import LebianaImage from '@/assets/img/home/lesbiana.png';
import BackgroundFlores from '@/assets/img/home/flores_background.png';
import BackgroundFloresEscritorio from '@/assets/img/home/background-flores-escrtorio.png';
import { useState, useEffect } from 'react';

function ComunidadComponent(){

    let [styleBox, setStyleBox] = useState({});

    // let styleBox = {};

    useEffect( () => {
        if(window.innerWidth <= 700){
            setStyleBox({
                backgroundImage: `url(${ BackgroundFlores.src})`,
            });
        }
    },[])

    return(
        <>
            <section className=" comunidad" >
                <section className="contentViolencia">
                    <motion.p 
                        title='¿Cuántas veces has escuchado o repetido estas palabras, incluso sin darte cuenta de que en realidad disfrazan formas de violencia?'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                    >¿Cuántas veces has escuchado o repetido estas palabras, incluso sin darte cuenta de que en realidad disfrazan formas de violencia?</motion.p>
                </section>
                <section 
                    className='box scale_big'
                    style={styleBox}
                >
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                    >Estas frases a menudo se usan para ocultar y suavizar la violenta realidad que viven miles de mujeres y miembros de la comunidad LGBTIQ+ en Guatemala.</motion.p>
                    <Image src={LebianaImage.src} alt='Imagen de lesbiana' width={400} height={400}/>
                </section>
            </section>
        </>
    )

}



export default ComunidadComponent;