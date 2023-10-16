import BackgroundImage from '@/assets/img/home/victimasBackground.png';
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function VictimasComponent(){

    const chat = useRef<HTMLElement>(null);
    const viewItem = useInView(chat, { once: true });
    const styleContent = {
        backgroundImage: `url(${BackgroundImage.src})`
    }

    useEffect(()=>{
        if(viewItem){
            const tagChat : HTMLElement | null = chat.current;
            if(chat && tagChat){
                tagChat.classList.add('active');
            }
        }
    }, [viewItem]);

    return (
        <>  
            <section className="victimas_component">
                <motion.section 
                    className="content" 
                    style={styleContent}
                    initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring" }}
                >
                    <motion.section 
                        className="victimas"
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
                </motion.section>
            </section>
        </>
    )

}

export default VictimasComponent;