import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const useLocoScroll = () => {

    gsap.registerPlugin(ScrollTrigger);


    import("locomotive-scroll").then((locomotiveModule) => {
        const container : HTMLElement | null = document.querySelector('.locomotive_scroll'); 
        const menssajesElements : NodeListOf<HTMLElement> = document.querySelectorAll('.mensajes_home .allContent');

        if (container) {
            let locoScroll = new locomotiveModule.default({
                el: container,
                smooth: true,
                getSpeed: true,
            });

            let position = 0;

            locoScroll.on('scroll', (arg) => {
                if(typeof arg.currentElements['modal'] === 'object'){
                    let componente = arg.currentElements['modal'].el;
                    let progress = arg.currentElements['modal'].progress;

                    // if(progress >= 0.4 && progress <= 0.6){
                    //     componente.classList.add('isView');
                    // }else if(progress > 0.6){
                    //     componente.classList.remove('isView');
                    // }else{
                    //     componente.classList.remove('isView');
                    // }

                    // Mostrar los elementos dependiendo del scroll

                    menssajesElements.forEach( (e, key ) => {

                        if(window.innerWidth > 700){
                            if(key == 0 && progress >= 0.20){
                                e.classList.add('active')
                            }else if(key == 1 && progress >= 0.25){
                                e.classList.add('active')
                            }else if(key == 2 && progress >= 0.30){
                                e.classList.add('active')
                            }else if(key == 3 && progress >= 0.35){
                                e.classList.add('active')
                            }else if(key == 4 && progress >= 0.40){
                                e.classList.add('active')
                            }else if(key == 5 && progress >= 0.45){
                                e.classList.add('active')
                            }else if(key == 6 && progress >= 0.50){
                                e.classList.add('active')
                            }else if(key == 7 && progress >= 0.55){
                                e.classList.add('active')
                            }else if(key >= 8 && progress >= 0.60){
                                e.classList.add('active')
                            }
                        }else{
                            if(key == 0 && progress >= 0.10){
                                e.classList.add('active')
                            }else if(key == 1 && progress >= 0.15){
                                e.classList.add('active')
                            }else if(key == 2 && progress >= 0.20){
                                e.classList.add('active')
                            }else if(key == 3 && progress >= 0.25){
                                e.classList.add('active')
                            }else if(key == 4 && progress >= 0.30){
                                e.classList.add('active')
                            }else if(key == 5 && progress >= 0.35){
                                e.classList.add('active')
                            }else if(key == 6 && progress >= 0.40){
                                e.classList.add('active')
                            }else if(key == 7 && progress >= 0.45){
                                e.classList.add('active')
                            }else if(key >= 8 && progress >= 0.50){
                                e.classList.add('active')
                            }
                        }

                    })
                
                }
            });

        }
    });
}



export default useLocoScroll;
