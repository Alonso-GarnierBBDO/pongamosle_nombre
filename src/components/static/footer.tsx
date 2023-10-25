import Logo from '@/assets/img/header/logo.svg';
import Image from 'next/image';


function FooterComponent(){

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <footer>
                <Image src={Logo.src} width={200} height={100} alt='Logo del pongamosle nombre' priority />    
                <section>
                    <span>{ year }</span>
                    <p>Campaña donada y creada en conjunto con la <br/> Alianza para la Educación Inclusiva y  <a href="https://garnierbbdo.com/" target='_black'>Garnier BBDO</a>.</p>
                </section>
            </footer>
        </>
    )

}

export default FooterComponent;