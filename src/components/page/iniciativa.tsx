import BackgroundIniciativa from '@/assets/img/home/iniciativa_background.png';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function IniciativaComponent(){

    const chat = useRef<HTMLElement>(null);
    const isInView = useInView(chat);
    const styleBackground = {
        backgroundImage: `url(${BackgroundIniciativa.src})`,
    }


    useEffect( () => {

        const tagChat : HTMLElement | null = chat.current;

        if(isInView && tagChat){

            tagChat.classList.add('active');

        }

    }, [isInView])

    return(
        <>
            <section className="normalSize lgtbi-section">
                <motion.section 
                    className="container" 
                    style={styleBackground}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring" }}
                >
                    <section className='viewChat' ref={chat}>
                        <section className='message'>
                            <h2>Es muy difícil reconocer la violencia, si no podemos vocalizar lo que vivimos.</h2>
                        </section>
                    </section>
                    <section className='content'>
                        <h2>PONGÁMOSLE NOMBRE</h2>
                        <p>es una iniciativa creada con el propósito de educar sobre los derechos sexuales y reproductivos de mujeres, migrantes, personas de la comunidad LGBTIQ+ y personas con discapacidad en Guatemala, con el fin de concientizar, abordar y combatir los diversos tipos de violencia que enfrentan a diario. </p>
                    </section>
                </motion.section>
            </section>
        </>
    )

}

export default IniciativaComponent;