import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const useLocoScroll = () => {

    gsap.registerPlugin(ScrollTrigger);


    import("locomotive-scroll").then((locomotiveModule) => {
        const container : HTMLElement | null = document.querySelector('.locomotive_scroll'); 
        if (container) {
            let locoScroll = new locomotiveModule.default({
                el: container,
                smooth: true,
                getSpeed: true,
            });

            let paddingSizeWidthHeight = 200;
            let padding = 100;
            let top = true;
            let position = 0;

            locoScroll.on('scroll', (arg) => {
                if(typeof arg.currentElements['modal'] === 'object'){
                    let componente = arg.currentElements['modal'].el;
                    let progress = arg.currentElements['modal'].progress;
                    let speed = arg.currentElements['modal'].speed;

                    if(progress >= position){
                        top = true;
                    }else{
                        top = false;
                    }

                    position = progress;

                    if(progress >= 0.4 && progress <= 0.6){
                        componente.classList.add('isView');
                    }else if(progress > 0.6){
                        componente.classList.remove('isView');
                    }else{
                        componente.classList.remove('isView');
                    }
                
                }
            });

        }
    });
}



export default useLocoScroll;
