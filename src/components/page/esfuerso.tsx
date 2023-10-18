import ImageContent from '@/assets/img/home/imageTest.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ChildComponentProps {
    onEvent: (eventData: {
        active: boolean;
        image: string;
    }) => void;
}

function EsfuerzoProyecto({ onEvent } : ChildComponentProps ){

    const image = [
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
        {
            img: ImageContent.src
        },
    ]

    const handleModal = (img : string) => {
        onEvent({
            active: true,
            image: img
        });
    };

    return (
        <>
            <motion.section 
                className="esfuerzo_proyecto"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring" }} 
            >
                <h2>este proyecto nace del esfuerzo y la unión de los siguientes colectivos:</h2>
                <p>Conócelos más</p>
                <section className='imagenes'>
                    {
                        image.map((item, key) => {
                            return (
                                <div 
                                    key={key} 
                                    className={(key % 5 === 0 ? 'active-left' : '') + " " + ((key + 1) % 5 === 0 ? 'active-right' : '')}
                                >
                                    <button onClick={() => handleModal(item.img)}>
                                        <Image src={item.img} alt='Alt de la foto' width={500} height={500} />
                                    </button>
                                </div>
                            )
                        })
                    }
                </section>
            </motion.section>
        </>
    )

}

export default EsfuerzoProyecto;