import ImageContent from '@/assets/img/home/imageTest.svg';
import Image from 'next/image';

// Esfuerzo
import MovimientoImage from '@/assets/img/home/unete/01.webp';
import VidaImage from '@/assets/img/home/unete/02.webp';
import TanImage from '@/assets/img/home/unete/03.webp';
import InsideImage from '@/assets/img/home/unete/04.webp';
import RevueltaImage from '@/assets/img/home/unete/05.webp';
import PositivasImage from '@/assets/img/home/unete/06.webp';
import OtransImage from '@/assets/img/home/unete/07.webp';
import RedmmutransImage from '@/assets/img/home/unete/08.webp';
import LosEmulrasImage from '@/assets/img/home/unete/09.webp';
import CapacidadImage from '@/assets/img/home/unete/10.webp';
import MujeresImage from '@/assets/img/home/unete/11.webp';
import IDEIImage from '@/assets/img/home/unete/12.webp';



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
            img: MovimientoImage.src,
            quienes: 'Espacio de diálogo de personas plurales y diversas.',
            proposito: 'Fortalecer activismos de las mujeres.',
            campana: 'Para visibilizar las violencias cotidianas y normalizadas.',
            link: 'mailto:mujeresmovimienta@gmail.com',
        },
        {
            img: VidaImage.src,
            quienes: 'Espacio de resiliencia para mujeres.',
            proposito: 'Promover el reconocimiento de mujeres lesbianas y bisexuales.',
            campana: 'Para visibilizar los derechos de las mujeres.',
            link: 'https://www.atom.bio/vidasparalelasong',
        },
        {
            img: TanImage.src,
            quienes: 'Promovemos los derechos sexuales y reproductivos.',
            proposito: 'Impulsar el acceso a la salud sexual.',
            campana: 'Es necesaria, nombrar la violencia es esencial para prevenirla.',
            link: 'http://tanuxil.org.gt/',
        },
        {
            img: InsideImage.src,
            quienes: 'Representación de jóvenes en Guatemala.',
            proposito: 'Defender los derechos humanos, sexuales y reproductivos.',
            campana: 'Puede dar herramientas para reconocer la violencia.',
            link: 'http://incidejoven.org',
        },
        {
            img: RevueltaImage.src,
            quienes: 'Colectivo para mujeres que buscan nombrarse y reconocerse.',
            proposito: 'Recontar la historia por nosotras.',
            campana: 'Es un problema que esta generación no ha abordado.',
            link: '',
        },
        {
            img: PositivasImage.src,
            quienes: 'Asociación de mujeres que viven con VIH.',
            proposito: 'Mejorar la calidad de vida y defensa de los derechos humanos.',
            campana: '',
            link: '',
        },
        {
            img: OtransImage.src,
            quienes: 'Pioneras en el trabajo con mujeres trans y LGBTIQ+.',
            proposito: 'Empoderamiento de las mujeres trans.',
            campana: 'Para empoderar a las personas Trans al reconocer sus derechos.',
            link: 'https://www.reinasdelanoche.org.gt',
        },
        {
            img: RedmmutransImage.src,
            quienes: 'Red multicultural de mujeres trans.',
            proposito: 'Promover los derechos de las mujeres trans.',
            campana: 'Es importante visibilizar la vida y expresión de las mujeres trans.',
            link: 'https://www.redmmutransgt.org',
        },  
        {
            img: LosEmulrasImage.src,
            quienes: 'Colectivo de inclusión de mujeres discapacitadas.',
            proposito: 'Promover los derechos humanos.',
            campana: 'Para visibilizar la violencia hacia personas con discapacidad.',
            link: 'mailto:colectivolaslemuras@gmail.com',
        },
        {
            img: CapacidadImage.src,
            quienes: 'Colectiva de mujeres con discapacidad en el área rural.',
            proposito: 'Promover espacios de apoyo colectivo.',
            campana: '',
            link: 'http://www.mujeresconcapacidad.wordpress.com',
        },
        {
            img: MujeresImage.src,
            quienes: 'Expresión del movimiento de mujeres y feminista.',
            proposito: 'Construir nuestro pensamiento propio y estrategias.',
            campana: 'Para identificar las violencias normalizadas.',
            link: 'https://www.sectordemujeres.org.gt',
        },
        {
            img: IDEIImage.src,
            quienes: 'Grupo que aboga por el desarrollo humano.',
            proposito: 'Fomentar el bienestar social de la población.',
            campana: '',
            link: 'https://www.instagram.com/asociacion_idei/',
        },
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
            <section 
                className="esfuerzo_proyecto"
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
            </section>
        </>
    )

}

export default EsfuerzoProyecto;