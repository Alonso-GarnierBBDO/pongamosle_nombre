import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
// import 'swiper/css/navigation';

function MotivcacionComponent(){

    return(
        <>
            <section className="motivaciones" data-scroll data-scroll-id="motivaciones">
                <section className='escritorio'>
                    <section className="two">
                        <div className="item white">
                            <span>Si te niegan tu derecho a vivir libremente tu identidad de género</span>
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
                            <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                        </div>
                        <div className="item dark">
                            <span>Cuando te niegan una educación sexual integral.</span>
                            <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                        </div>
                        <div className="item dark">
                            <span>Cuando te niegan una educación sexual integral.</span>
                            <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                        </div>
                    </section>
                    <section className="two">
                        <div className="item white">
                            <span>Cuando te niegan una educación sexual integral.</span>
                            <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                        </div>
                        <div className="item white">
                            <span>Cuando te niegan una educación sexual integral.</span>
                            <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
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
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Si te niegan tu derecho a vivir libremente tu identidad de género</span>
                                <strong>NO ES OPINIÓN, ES VIOLENCIA</strong>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                            </SwiperSlide>
                        <SwiperSlide className='slider-item'>
                            <section>
                                <span>Cuando te niegan una educación sexual integral.</span>
                                <strong>NO ES PRUDENCIA, ES VIOLENCISIA</strong>
                            </section>
                        </SwiperSlide>
                    </Swiper>
                </motion.section>
            </section>
        </>
    )

}

export default MotivcacionComponent;