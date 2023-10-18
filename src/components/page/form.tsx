import Image from "next/image";
import Logo from '@/assets/img/header/logo.svg';
import { useState } from "react";
import { createClient } from '@supabase/supabase-js';



function FormComponent(){


    // Registramos supabase
    const supabaseUrl = 'https://physykgkvkzglwyfwhwa.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoeXN5a2drdmt6Z2x3eWZ3aHdhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzY1MDQ0NywiZXhwIjoyMDEzMjI2NDQ3fQ.S43U3Gcq-CgBQ62iHKgOFAT2hOUmItuIEoQbVGrMFAs';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [edad, setEdad] = useState('');
    const [content, setContent] = useState('');

    const [sendingEmail, setSendingEmail] = useState(false);
    const [sendingEmailText, setSendingEmailText] = useState('Enviar');
    const [succesfull, setSuccesfull] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = async (event : React.FormEvent) => {
        event.preventDefault();

        setSendingEmailText('Enviando...')
        setSendingEmail(true);
        setSuccesfull(false);
        setError(false);

        
            try{
                const { data, error } = await supabase
                .from('Emails')
                .insert([
                    { 
                        name: name,
                        last_name: lastName,
                        email: email,
                        phone: phone,
                        year: edad,
                        message: content
                    },
                ])
                .select()

                if(data){
                    setSendingEmailText('Enviar')
                    setSendingEmail(false);
                    setSuccesfull(true);
                    setName('');
                    setLastName('');
                    setEmail('');
                    setPhone('');
                    setEdad('');
                    setContent('');
                }

                if(error){
                    setSendingEmailText('Enviar')
                    setSendingEmail(false);
                    setError(true);
                }

            }catch(err){
                console.log(err);
                throw new Error(`Error: ${err}`);
            }





        
    }

    return (
        <>
            <section className="form">
                <section className="container">

                    <section className="logo">
                        <Image src={Logo.src} width={200} height={100} alt="Logo"/>
                        <p>Si te gustaría conocer más de esta iniciativa, apoyar o conectar con los colectivos organizadores, deja tu información aquí:</p>
                    </section>
                    <section className="formItem">
                        <form action="" onSubmit={sendEmail}  className={sendingEmail ? 'active' : ''}>
                            <section className="two">
                                <input type="text" value={name} disabled={sendingEmail} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value;
                                    setName(value);
                                }}  placeholder="Nombre" required/>
                                <input type="text" value={lastName} disabled={sendingEmail} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value;
                                    setLastName(value);
                                }} placeholder="Apellido" required/>
                            </section>
                            <input type="email" 
                                disabled={sendingEmail}
                                value={email}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value;
                                    setEmail(value);
                                }} 
                            placeholder="Correo electrónico" required/>
                            <section className="two_medium">
                                <input type="number" value={phone} disabled={sendingEmail} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value;
                                    setPhone(value);
                                }}  placeholder="Teléfono" required/>
                                <input type="number" value={edad} disabled={sendingEmail} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value;
                                    setEdad(value);
                                }} placeholder="Edad" required/>
                            </section>
                            <textarea name="" disabled={sendingEmail} required value={content} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    const value = e.target.value;
                                    setContent(value);
                                }} id="" placeholder="¿Quieres dejarnos un mensaje?"></textarea>
                            <section className="boton">
                                <button disabled={sendingEmail} type="submit">{sendingEmailText}</button>
                            </section>
                            {
                                succesfull ? (<p className="successful">Su mensaje fue enviando. Gracias por ponerse en contacto con nosotros.</p>) : ''
                            }

                            {
                                error ? (<p className="error">Error al enviar el mensaje. Verifique que todos los datos esten completados correctamente.</p>) : ''
                            }
                        </form>
                    </section>

                </section>
            </section>
        </>
    )

}

export default FormComponent;