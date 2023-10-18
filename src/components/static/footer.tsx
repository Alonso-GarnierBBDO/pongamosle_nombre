import Logo from '@/assets/img/header/logo.svg';
import Image from 'next/image';


function FooterComponent(){

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <footer>
                <Image src={Logo.src} width={200} height={100} alt='Logo del pongamosle nombre'/>    
                <section>
                    <span>{ year }</span>
                    <p>Campaña creada en conjunto con <br/> <a href="https://garnierbbdo.com/" target='_black'>Garnier BBDO</a> y la Coalición XX</p>
                </section>
            </footer>
        </>
    )

}

export default FooterComponent;