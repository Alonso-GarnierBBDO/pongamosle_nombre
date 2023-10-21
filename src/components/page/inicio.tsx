'use client';

import { useEffect, useState } from 'react';

import Logo from '@/assets/img/header/logo.svg';
import Background from '@/assets/img/home/backgroud_home.svg';
import PersonasTwo from '@/assets/img/home/personas_two.svg';
import PersonasThree from '@/assets/img/home/personas_three.svg';
import PersonasCuatro from '@/assets/img/home/personas_cuatro.svg';
import PersonasCinco from '@/assets/img/home/personas_cinco.svg';
import PersonasSeis from '@/assets/img/home/personas_seis.svg';
import Personas from '@/assets/img/home/personas.svg';
import { motion } from "framer-motion"
import Image from 'next/image';


function InicioComponent(){



    const [heightItem, setHeightItem] = useState(0);
    const [imageHome, setImageHome] = useState(null);

    useEffect(() => {
        // Accede a window.innerHeight en la fase de cliente
        setHeightItem(window.innerHeight);


        const numeroAleatorio = Math.random();

        // Ajusta el número al rango deseado (1 - 2)
        const numeroEnRango = 1 + (numeroAleatorio * 5); 

        // Redondea el número si es necesario
        const numeroFinal = Math.round(numeroEnRango);

        if(numeroFinal == 1){
            setImageHome(Personas.src);
        }else if(numeroFinal == 2){
            setImageHome(PersonasTwo.src);
        }else if(numeroFinal == 3){
            setImageHome(PersonasThree.src);
        }else if(numeroFinal == 4){
            setImageHome(PersonasCuatro.src);
        }else if(numeroFinal == 5){
            setImageHome(PersonasCinco.src);
        }else if(numeroFinal == 6){
            setImageHome(PersonasSeis.src);
        }else{
            setImageHome(Personas.src);
        }


        console.log(numeroFinal);

    }, []);


    const styles = {

        backgroundImage: `url(${ Background.src })`,
        height: `${heightItem.toString()}px`

    }

    return (
        <>
            <section style={styles} className="inicio_home" data-scroll data-scroll-speed="0" data-scroll-id="inicio">
                <div className="contenido">
                    <section className="item">
                        <Image src={Logo.src} alt="Pongámosle nombre" title="Pongámosle nombre" width={100} height={100} priority/>
                    </section>
                    <section className="item">
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring" }}
                        >
                            <img src={imageHome ? imageHome : ''} className='personas' alt="" />
                        </motion.div>
                    </section>
                </div>
            </section>
        </>
    )

}

export default InicioComponent;