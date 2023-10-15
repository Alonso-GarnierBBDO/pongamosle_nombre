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

    return (
        <>

            <section  className="mensajes_home" data-scroll data-scroll-id="modal" data-scroll-speed="0">
                <section className="container">
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
                                    
                                        <div className="allContent" key={key} data-scroll data-scroll-speed="2">
                                            <div className="item" style={style}>
                                                <p>{item.content}</p>
                                                <span className="arrow" style={styleArrow}></span>
                                            </div>
                                        </div>
                                    )
                                }else if(key % 3 === 0){
                                    return (
                                    
                                        <div className="allContent" key={key} data-scroll data-scroll-speed="1.5">
                                            <div className="item" style={style}>
                                                <p>{item.content}</p>
                                                <span className="arrow" style={styleArrow}></span>
                                            </div>
                                        </div>
                                    )
                                }else{
                                    return (
                                    
                                        <div className="allContent" key={key} data-scroll data-scroll-speed="1">
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