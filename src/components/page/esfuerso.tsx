import ImageContent from '@/assets/img/home/imageTest.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ChildComponentProps {
    onEvent: (eventData: {
        active: boolean;
        image: string;
        quienes: string,
        proposito: string,
        campana: string, 
        link: string
    }) => void;
}

function EsfuerzoProyecto({ onEvent } : ChildComponentProps ){

    const image = [
        {
            img: ImageContent.src,
            quienes: 'Promovemos los derechos sexuales y reproductivos.',
            proposito: 'Impulsar el acceso a la salud sexual.',
            campana: 'Es necesaria, nombrar la violencia es esencial para prevenirla.',
            link: 'http://tanuxil.org.gt/',
        },
        {
            img: ImageContent.src,
            quienes: 'Espacio de resiliencia para mujeres.',
            proposito: 'Promover el reconocimiento de mujeres lesbianas y bisexuales.',
            campana: 'Para visibilizar los derechos de las mujeres.',
            link: 'https://www.atom.bio/vidasparalelasong',
        },
        {
            img: ImageContent.src,
            quienes: 'Colectivo para mujeres que buscan nombrarse y reconocerse.',
            proposito: 'Recontar la historia por nosotras.',
            campana: 'Es un problema que esta generación no ha abordado.',
            link: 'http://larevuelta.com',
        },
        {
            img: ImageContent.src,
            quienes: 'Espacio de diálogo de personas plurales y diversas.',
            proposito: 'Fortalecer activismos de las mujeres.',
            campana: 'Para visibilizar las violencias cotidianas y normalizadas.',
            link: 'mailto:mujeresmovimienta@gmail.com',
        },
        {
            img: ImageContent.src,
            quienes: 'Colectivo de inclusión de mujeres discapacitadas.',
            proposito: 'Promover los derechos humanos.',
            campana: 'Para visibilizar la violencia hacia personas con discapacidad.',
            link: 'mailto:colectivolaslemuras@gmail.com ',
        },
        {
            img: ImageContent.src,
            quienes: 'Representación de jóvenes en Guatemala.',
            proposito: 'Defender los derechos humanos, sexuales y reproductivos.',
            campana: 'Puede dar herramientas para reconocer la violencia.',
            link: 'http://incidejoven.org',
        },
        {
            img: ImageContent.src,
            quienes: 'Expresión del movimiento de mujeres y feminista.',
            proposito: 'Construir nuestro pensamiento propio y estrategias.',
            campana: 'Para identificar las violencias normalizadas.',
            link: 'http://www.sectordemujeres.org.gt',
        },
        {
            img: ImageContent.src,
            quienes: 'Pioneras en el trabajo con mujeres trans y LGBTIQ+.',
            proposito: 'Empoderamiento de las mujeres trans.',
            campana: 'Para empoderar a las personas Trans al reconocer sus derechos.',
            link: 'http://www.reinasdelanoche.org.gt',
        },
        {
            img: ImageContent.src,
            quienes: 'Red multicultural de mujeres trans.',
            proposito: 'Promover los derechos de las mujeres trans.',
            campana: 'Es importante visibilizar la vida y expresión de las mujeres trans.',
            link: 'http://www.redmmutransgt.org',
        },
        {
            img: ImageContent.src,
            quienes: 'Grupo que aboga por el desarrollo humano. ',
            proposito: 'Fomentar el bienestar social de la población.',
            campana: '',
            link: 'https://www.instagram.com/asociacion_idei/',
        },
        {
            img: ImageContent.src,
            quienes: 'Colectiva de mujeres con discapacidad en el área rural.',
            proposito: 'Promover espacios de apoyo colectivo.',
            campana: '',
            link: 'http://www.mujeresconcapacidad.wordpress.com',
        },
        {
            img: ImageContent.src,
            quienes: 'Asociación de mujeres que viven con VIH.',
            proposito: 'Mejorar la calidad de vida y defensa de los derechos humanos.',
            campana: '',
            link: '',
        }
    ]

    const handleModal = (img : string, quienes : string, proposito : string, campana : string, link : string) => {
        onEvent({
            active: true,
            image: img,
            quienes: quienes,
            proposito: proposito,
            campana: campana,
            link: link
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
                                    <button onClick={() => handleModal(item.img, item.quienes, item.proposito, item.campana, item.link)}>
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