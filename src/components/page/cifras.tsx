import LeyesImage from '@/assets/img/home/options/leyes.svg';
import ChatImage from '@/assets/img/home/options/chat.svg';
import CerebroImage from '@/assets/img/home/options/cerebro.svg';
import PersonasImage from '@/assets/img/home/options/personas.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { useInView } from 'framer-motion';


function CifrasComponent(){

    const options = [
        {
            image: LeyesImage.src,
            content: 'Cuando le ponemos leyes, podemos responsabilizar a los culpables.'
        },
        {
            image: ChatImage.src,
            content: 'Cuando hablamos, tomamos consciencia  de nuestra realidad.'
        },
        {
            image: CerebroImage.src,
            content: 'Cuando sabemos qué está pasando, podemos ponerle un alto.'
        },
        {
            image: PersonasImage.src,
            content: 'Cuando le ponemos rostro, podemos empatizar con miles de historias.'
        }
    ]

    return (
        <>
            <section className="cifras_components" id='cifras'>
                <motion.section 
                    className="options"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring" }} 
                >
                    {
                        options.map( (item, key) => {
                            return (
                                <div className='item' key={key}>
                                    <Image src={item.image} alt={item.content} title={item.content} width={100} height={100}/>
                                    <p>{ item.content }</p>
                                </div>
                            )
                        })
                    }
                </motion.section>
                <h2 className='title'>CIFRAS ACTUALES</h2>    
                <motion.section 
                    className="cifras-actuales"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring" }} 
                >
                    <motion.section 
                        className='item'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }} 
                    >
                        <span>86mil</span>
                        <p>Denuncias por violencia sexual</p>
                    </motion.section>
                    <motion.section 
                        className='item'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }} 
                    >
                        <span>85%</span>
                        <p>De las víctimas son mujeres</p>
                    </motion.section>
                    <motion.section 
                        className='item'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }} 
                    >
                        <span>50%</span>
                        <p>Son mujeres jóvenes entre 13 y 30 años</p>
                    </motion.section>
                    <section className='content_items'>
                        <motion.section 
                            className='item'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring" }} 
                        >
                            <span>Más de 16 mil</span>
                            <p>Violaciones de niñas y adolescentes</p>
                        </motion.section>
                        <motion.section 
                            className='item'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring" }} 
                        >
                            <span>15 mil</span>
                            <p>Embarazos</p>
                        </motion.section>
                        <motion.section 
                            className='item'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring" }} 
                        >
                            <span>5 mil</span>
                            <p>Partos de niñas y adolescentes</p>
                        </motion.section>
                        <motion.section 
                            className='item'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring" }} 
                        >
                            <span>67 de 76</span>
                            <p>Casos de discriminación contra personas LBTI han sido desestimados</p>
                        </motion.section>
                    </section>
                </motion.section>
                <section className='fuente'>
                    Fuente: <a href="https://www.vivirsinviolencia.org" target='_black'>vivirsinviolencia.org</a>
                </section>
            </section>
        </>
    )

}


export default CifrasComponent;