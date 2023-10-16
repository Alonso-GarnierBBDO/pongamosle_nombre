import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
// import 'swiper/css/navigation';

function MotivcacionComponent(){


    const items = [
        {
            context: 'Si te niegan tu derecho a vivir libremente tu identidad de género.',
            title: 'NO ES OPINIÓN, ES VIOLENCIA'
        },
        {
            context: 'Cuando te niegan una educación sexual integral.',
            title: 'NO ES PRUDENCIA, ES VIOLENCISIA'
        },
        {
            context: 'Cuando te niegan una educación sexual integral.',
            title: 'NO ES PRUDENCIA, ES VIOLENCIA'
        },
        {
            context: 'Si te exigen una prueba de un embarazo en un trabajo.',
            title: 'NO ES REQUISITO, ES VIOLENCIA'
        },
        {
            context: 'Cuando te niegan atención médica digna.',
            title: 'NO ES EL ‘SISTEMA’ ES VIOLENCIA'
        },
        {
            context: 'Si te obliga a tener relaciones sexuales aunque tu no quieras.',
            title: 'NO ES EL ‘SISTEMA’ ES VIOLENCIA'
        },
        {
            context: 'Cuando te cela y se pone agresivo contigo.',
            title: 'NO ES AMOR, ES VIOLENCIA'
        }
    ]

    return(
        <>
            <section className="motivaciones" data-scroll data-scroll-id="motivaciones">
                <section className='escritorio'>
                    <section className="two">
                        <div className="item white">
                            <span>Si te niegan tu derecho a vivir libremente tu identidad de género.</span>
                            <strong>NO ES OPINIÓN, ES VIOLENCIA</strong>
                        </div>
                        <div className="item white">
                            <span>Cuando te niegan una educación sexual integral.</span>
                            <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                        </div>
                    </section>
                    <section className="three">
                        <div className="item dark">
                            <span>Cuando te niegan una educación sexual integral.</span>
                            <strong>NO ES PRUDENCIA, ES VIOLENCIA</strong>
                        </div>
                        <div className="item dark">
                            <span>Cuando te niegan atención médica digna.</span>
                            <strong>NO ES EL ‘SISTEMA’ ES VIOLENCIA</strong>
                        </div>
                        <div className="item dark">
                            <span>Si te exigen una prueba de un embarazo en un trabajo.</span>
                            <strong>NO ES REQUISITO, ES VIOLENCIA</strong>
                        </div>
                    </section>
                    <section className="two">
                        <div className="item white">
                            <span>Si te obliga a tener relaciones sexuales aunque tu no quieras.</span>
                            <strong>NO ES EL ‘SISTEMA’ ES VIOLENCIA</strong>
                        </div>
                        <div className="item white">
                            <span>Cuando te cela y se pone agresivo contigo.</span>
                            <strong>NO ES AMOR, ES VIOLENCIA</strong>
                        </div>
                    </section>
                </section>
                <motion.section 
                    className='mobile slider'
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring" }}
                >
                    <Swiper 
                        grabCursor={true}
                        modules={[Autoplay, Navigation]} 
                        autoplay={{
                            delay: 3000,
                        }}
                        navigation={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        className="mySwiper"
                    >
                        {
                            items.map( (e, key) => {
                                return (
                                    <SwiperSlide className='slider-item' key={key}>
                                        <section>
                                            <span>{ e.context }</span>
                                            <strong>{ e.title }</strong>
                                        </section>
                                    </SwiperSlide>
                                );
                            })
                        }
                        
                    </Swiper>
                </motion.section>
            </section>
        </>
    )

}

export default MotivcacionComponent;