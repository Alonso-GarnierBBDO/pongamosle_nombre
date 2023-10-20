import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function PonerleNombreComponent(){

    const chat = useRef<HTMLElement>(null);
    const viewItem = useInView(chat, { once: true });

    useEffect(()=>{
        if(viewItem){
            const tagChat : HTMLElement | null = chat.current;
            if(chat && tagChat){
                tagChat.classList.add('active');
            }
        }
    }, [viewItem])

    return (
        <>
            <section className="ponerle_nombre" style={{contain: 'paint'}}>
                <section className="content">
                    <motion.section 
                        className="no-existe"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                    >
                        <h2>Lo que no se nombra, no existe</h2>
                    </motion.section>
                    <section ref={chat} className="content_chat">
                        <section className="ponerle-nombre">
                            <p>Hay que ponerle nombre, rostro y alto a la violencia</p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )

}

export default PonerleNombreComponent;