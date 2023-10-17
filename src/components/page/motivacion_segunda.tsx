import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
// import 'swiper/css/navigation';

function MotivcacionSegundaComponent(){


    const items = [
        {
            context: 'Luchamos por concientizar acerca de las violencias que sufren las mujeres con discapacidad, incluyendo el acoso, abuso sexual y esterilizaciones forzadas.',
            title: 'NO ES CUIDARTE, ES VIOLENTARTE.'
        },
        {
            context: 'Queremos un mundo donde las mujeres lesbianas, bisexuales y trans puedan vivir su identidad con libertad, expresar afecto sin discriminaciones y que las personas con VIH/Sida tengan acceso a atención preventiva y tratamiento.',
            title: 'NO ES SEGUIR LA LEY, ES VIOLAR TUS DERECHOS HUMANOS.'
        },
        {
            context: 'Todas las niñas, adolescentes y mujeres jóvenes tienen derecho a una educación sexual completa y al acceso a servicios de salud de alta calidad que prevengan las maternidades forzadas, exámenes de virginidad y matrimonio precoz.',
            title: 'NO ES PROTECCIÓN, ES VIOLENCIA.'
        },
        {
            context: 'Buscamos educar y reconocer las experiencias únicas y desafíos que enfrentan las mujeres migrantes, quienes merecen seguridad, dignidad y atención médica respetuosa en cada etapa de sus vidas.',
            title: 'NO ES UNA DECISIÓN MÉDICA, ES VIOLENCIA OBSTÉTRICA.'
        }
    ]

    return(
        <>
            <section className="motivaciones_two" data-scroll data-scroll-id="motivaciones_two">
                <section className='escritorio'>
                    <section className="one">
                        <div className="item white">
                            <span>Luchamos por concientizar acerca de las violencias que sufren las mujeres con discapacidad, incluyendo el acoso, abuso sexual y esterilizaciones forzadas.</span>
                            <strong>NO ES CUIDARTE, ES VIOLENTARTE.</strong>
                        </div>
                    </section>
                    <section className="two">
                        <div className="item dark">
                            <span>Queremos un mundo donde las mujeres lesbianas, bisexuales y trans puedan vivir su identidad con libertad, expresar afecto sin discriminaciones y que las personas con VIH/Sida tengan acceso a atención preventiva y tratamiento.</span>
                            <strong>NO ES SEGUIR LA LEY, ES VIOLAR TUS DERECHOS HUMANOS.</strong>
                        </div>
                        <div className="item dark">
                            <span>Todas las niñas, adolescentes y mujeres jóvenes tienen derecho a una educación sexual completa y al acceso a servicios de salud de alta calidad que prevengan las maternidades forzadas, exámenes de virginidad y matrimonio precoz.</span>
                            <strong>NO ES PROTECCIÓN, ES VIOLENCIA.</strong>
                        </div>
                    </section>
                    <section className="one">
                        <div className="item white">
                            <span>Buscamos educar y reconocer las experiencias únicas y desafíos que enfrentan las mujeres migrantes, quienes merecen seguridad, dignidad y atención médica respetuosa en cada etapa de sus vidas.</span>
                            <strong>NO ES UNA DECISIÓN MÉDICA, ES VIOLENCIA OBSTÉTRICA.</strong>
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

export default MotivcacionSegundaComponent;