'use client';
import { useEffect, useState, useRef } from "react";

const MensajesComponents =  () => {

    const menssages =  [
        {
            content:  "“La educación sexual promueve la promiscuidad”",
            color: '#FFB8B8',
            textColor: '#B8364B',
        },
        {
            content:  "“Murió por crimen pasional”",
            color: '#D93F3F',
            textColor: '#FFCFC2',

        },
        {
            content:  "“Es mi opinión personal”",
            color: '#FFCFC2',
            textColor: '#B8364B'
        },
        {
            content:  "“Son solo cariños”",
            color: '#D93F3F',
            textColor: '#FFCFC2'
        },
        {
            content:  "“Solo era un halago”",
            color: '#FFB8B8',
            textColor: '#B8364B'
        },
        {
            content:  "“Es una prueba de amor”",
            color: '#FFB8B8',
            textColor: '#B8364B'
        },
        {
            content:  "“Eso va en contra de la naturaleza”",
            color: '#D93F3F',
            textColor: '#FFCFC2'
        },
        {
            content:  "“Tú te lo buscaste”",
            color: '#FFCFC2',
            textColor: '#B8364B'
        }

    ]

    const [ remove, setRemove ] = useState(false);
    const [ removeTwo, setRemoveTwo ] = useState(false);
    const element = useRef<HTMLElement | null>(null);

    // useEffect( () => {
    //     const tagElement : HTMLElement | null = element.current;
    //     if(tagElement){

    //         window.onscroll = () =>{
    //             const rect = tagElement.getBoundingClientRect();

    //             if(rect.bottom <= (rect.height / 1.6)){
    //                 setRemove(true);
    //             }else if(rect.bottom <= (rect.height / 1.9)){
    //                 setRemoveTwo(true);
    //             }else{
    //                 setRemove(false);
    //                 setRemoveTwo(false);
    //             }

    //         }
    //     }
    // },[])

    return (
        <>

            <section  className={"mensajes_home scroll" + " " + (remove ? 'remove' : '') + " " + (removeTwo ? 'removeTwo' : '')} id="menssage_home" ref={element}>
                <section className="container scale_big">
                    <div className="content">
                        {
                            menssages.map( (item, key) => {

                                const style = {
                                    backgroundColor: item.color,
                                    color: item.textColor
                                }

                                const styleArrow = {
                                    backgroundColor: item.color,
                                }

                                if(key % 2 == 0){
                                    return (
                                    
                                        <div className="allContent big" key={key}>
                                            <div className="item" style={style}>
                                                <p>{item.content}</p>
                                                <span className="arrow" style={styleArrow}></span>
                                            </div>
                                        </div>
                                    )
                                }else if(key % 3 === 0){
                                    return (
                                    
                                        <div className="allContent medium" key={key}>
                                            <div className="item" style={style}>
                                                <p>{item.content}</p>
                                                <span className="arrow" style={styleArrow}></span>
                                            </div>
                                        </div>
                                    )
                                }else{
                                    return (
                                    
                                        <div className="allContent small" key={key}>
                                            <div className="item" style={style}>
                                                <p>{item.content}</p>
                                                <span className="arrow" style={styleArrow}></span>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </section>
            </section>
        
        </>
    )

}

export default MensajesComponents;