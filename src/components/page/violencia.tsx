
import Puno from '@/assets/img/home/Puño.svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es';
import { motion, useInView } from 'framer-motion';

export default function ViolenciaComponent(){

    const containerText = useRef(null);
    const elementView = useInView(containerText);

    useEffect(()=>{
        console.log(elementView);
        if(containerText.current){
            lettersAnimation(containerText.current);
        }
    }, [elementView]);

    return (
        <>

            <section className="violencia">
                <section className='imageContainer' data-scroll data-scroll-speed="1">
                    <Image src={Puno.src} width={100} height={100} alt="Puño ilustrativos" title='Puño ilustrativos' />
                </section>
                <section className='content'>
                    <motion.p ref={ containerText } title='¿Cuántas veces has escuchado o repetido estas palabras, incluso sin darte cuenta de que en realidad disfrazan formas de violencia?'>¿Cuántas veces has escuchado o repetido estas palabras, incluso sin darte cuenta de que en realidad disfrazan formas de violencia?</motion.p>
                </section>
            </section>

        </>
    );

}   

function lettersAnimation(containerText : HTMLElement){

    if(containerText.textContent){
        containerText.innerHTML = containerText.textContent?.replace(/\S/g, "<span class='letter'>$&</span>")

        anime.timeline({loop: false}).add({
            targets: '.content .letter',
            opacity: [0,1],
            translateX: [40,0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "spring(1, 80, 10, 0)",
            duration: 800,
            offset: '-=600',
            delay: (el, i) => 150 + 25 * i
        })

    }

}