import Logo from '@/assets/img/header/logo.svg';
import Image from 'next/image';
import FacebookIcon from '@/assets/img/home/facebook.svg';
import InstagramIcon from '@/assets/img/home/instagram.svg';
import EmailIcon from '@/assets/img/home/email.svg';


function FooterComponent(){

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <footer>
                <Image src={Logo.src} width={200} height={100} alt='Logo del pongamosle nombre' priority />    
                <section>
                    <div>
                        <span>{ year }</span>
                        <p>Campaña donada y creada en conjunto con la <br/> Alianza para la Educación Inclusiva y  <a href="https://garnierbbdo.com/" target='_black'>Garnier BBDO</a>.</p>
                    </div>
                    <div className='red_social'>
                        <a href='https://www.facebook.com/profile.php?id=61551865634564' target='_black' title='Ir a Facebook'>
                            <Image src={FacebookIcon.src} width={100} height={100} alt='Icono de facebook' />
                        </a>
                        <a href='https://www.instagram.com/pongamoslenombre' target='_black' title='Ir a Instagram'>
                            <Image src={InstagramIcon.src} width={100} height={100} alt='Icono de instagram' />
                        </a>
                        <a href='mailto:pongámoslenombre@gmail.com' target='_black' title='Ir a Instagram'>
                            <Image src={EmailIcon.src} width={100} height={100} alt='Icono de Email' />
                        </a>
                    </div>
                </section>
            </footer>
        </>
    )

}

export default FooterComponent;