import Image from "next/image";
import Logo from '@/assets/img/header/logo.svg'

function FormComponent(){

    return (
        <>
            <section className="form">
                <section className="container">

                    <section className="logo">
                        <Image src={Logo.src} width={200} height={100} alt="Logo"/>
                        <p>Si te gustaría conocer más de esta iniciativa, apoyar o conectar con los colectivos organizadores, deja tu información aquí:</p>
                    </section>
                    <section className="formItem">
                        <form action="">
                            <section className="two">
                                <input type="text"  placeholder="Nombre"/>
                                <input type="text" placeholder="Apellido"/>
                            </section>
                            <input type="email" placeholder="Correo electrónico"/>
                            <section className="two_medium">
                                <input type="number" placeholder="Teléfono"/>
                                <input type="number" placeholder="Edad"/>
                            </section>
                            <textarea name="" id="" placeholder="¿Quieres dejarnos un mensaje?"></textarea>
                            <section className="boton">
                                <button type="submit">ENVIAR</button>
                            </section>
                        </form>
                    </section>

                </section>
            </section>
        </>
    )

}

export default FormComponent;