
import Puno from '@/assets/img/home/Puño.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ViolenciaComponent(){

    return (
        <>

            <section className="violencia"  data-scroll>
                <section className='imageContainer' data-scroll data-scroll-speed="1">
                    <Image src={Puno.src} width={100} height={100} alt="Puño ilustrativos" title='Puño ilustrativos' />
                </section>
                <section className='content'>
                    <motion.p  
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                        title='¿Cuántas veces has escuchado o repetido estas palabras, incluso sin darte cuenta de que en realidad disfrazan formas de violencia?'>¿Cuántas veces has escuchado o repetido estas palabras, incluso sin darte cuenta de que en realidad disfrazan formas de violencia?</motion.p>
                </section>
            </section>

        </>
    );

}   
