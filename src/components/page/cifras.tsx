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
                        <span>14</span>
                        <p>Denuncias diarias de violencia sexual</p>
                    </motion.section>
                    <motion.section 
                        className='item'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }} 
                    >
                        <span>23</span>
                        <p>Niñas y adolescentes son abusadas sexualmente todos los días</p>
                    </motion.section>
                    <motion.section 
                        className='item'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }} 
                    >
                        <span>45%</span>
                        <p>De las mujeres guatemaltecas no conocen sus derechos</p>
                    </motion.section>
                </motion.section>
            </section>
        </>
    )

}


export default CifrasComponent;