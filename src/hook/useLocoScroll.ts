import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const useLocoScroll = () => {

    gsap.registerPlugin(ScrollTrigger);


    import("locomotive-scroll").then((locomotiveModule) => {
        const container : HTMLElement | null = document.querySelector('.locomotive_scroll'); 
        const menssajesElements : NodeListOf<HTMLElement> = document.querySelectorAll('.mensajes_home .allContent');
        const newScroll : HTMLButtonElement | null = document.querySelector('.newScroll');


        if (container && newScroll ) {
            let locoScroll = new locomotiveModule.default({
                el: container,
                smooth: true,
                getSpeed: true,
            });


            newScroll.onclick = () => {
                locoScroll.scrollTo('#menssage_home');  
            }


            locoScroll.on('scroll', (arg) => {

                if(typeof arg.currentElements['inicio'] === 'object'){
                    let progress = arg.currentElements['inicio'].progress;

                    if(progress >= 0.8){
                        newScroll.classList.add('remove');
                    }else{
                        newScroll.classList.remove('remove');
                    }


                }

                if(typeof arg.currentElements['modal'] === 'object'){

                    let progress = arg.currentElements['modal'].progress;
                    menssajesElements.forEach( (e, key ) => {

                            if(key == 0 && progress >= 0.10){
                                e.classList.add('active')
                            }else if(key == 1 && progress >= 0.15){
                                e.classList.add('active')
                            }else if(key == 2 && progress >= 0.25){
                                e.classList.add('active')
                            }else if(key == 3 && progress >= 0.30){
                                e.classList.add('active')
                            }else if(key == 4 && progress >= 0.35){
                                e.classList.add('active')
                            }else if(key == 5 && progress >= 0.40){
                                e.classList.add('active')
                            }else if(key == 6 && progress >= 0.45){
                                e.classList.add('active')
                            }else if(key == 7 && progress >= 0.50){
                                e.classList.add('active')
                            }else if(key >= 8 && progress >= 0.55){
                                e.classList.add('active')
                            }

                    })
                
                }

                if(typeof arg.currentElements['motivaciones'] === 'object'){
                    let progress = arg.currentElements['motivaciones'].progress;
                    const motivacionesElement : NodeListOf<HTMLElement> = document.querySelectorAll('.motivaciones .item');

                    motivacionesElement.forEach( (e, key ) => {

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

                if(typeof arg.currentElements['motivaciones_two'] === 'object'){
                    let progress = arg.currentElements['motivaciones_two'].progress;
                    const motivacionesTwoElement : NodeListOf<HTMLElement> = document.querySelectorAll('.motivaciones_two .item');

                    motivacionesTwoElement.forEach( (e, key ) => {

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
