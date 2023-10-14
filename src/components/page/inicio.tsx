import { useEffect, useState } from 'react';

import Logo from '@/assets/img/header/logo.svg';
import Background from '@/assets/img/home/backgroud_home.svg';
import Personas from '@/assets/img/home/personas.svg';
import { motion } from "framer-motion"



function InicioComponent(){


    const [heightItem, setHeightItem] = useState(0);

    useEffect(() => {
        // Accede a window.innerHeight en la fase de cliente
        setHeightItem(window.innerHeight);
    }, []);

    const styles = {

        backgroundImage: `url(${ Background.src })`,
        height: `${heightItem.toString()}px`

    }

    return (
        <>
            <section style={styles} className="inicio_home" data-scroll data-scroll-speed="0">
                <div className="contenido">
                    <section className="item">
                        <img data-scroll data-scroll-speed="2" src={Logo.src} alt="Pongámosle nombre" title="Pongámosle nombre"/>
                    </section>
                    <section className="item">
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring" }}
                        >
                            <img src={Personas.src} className='personas' alt="" />
                        </motion.div>
                    </section>
                </div>
            </section>
        </>
    )

}

export default InicioComponent;