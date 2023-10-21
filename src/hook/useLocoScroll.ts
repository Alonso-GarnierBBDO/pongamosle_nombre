import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const useLocoScroll = () => {

    gsap.registerPlugin(ScrollTrigger);

    const element : NodeListOf<HTMLElement> | null = document.querySelectorAll('.scale_big');
    
    if(element){
        element.forEach( ( item) => {

            if(window.innerWidth > 700){
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        markers: false,
                        start: "top top",
                        end: "+=350",
                        scrub: true,
                      },
                      ease: "none",
                      scale: 1,
                });
            }



            // gsap.to(item, {
            //         scrollTrigger: {
            //             trigger: item,
            //             markers: true,
            //             start: '85%',
            //             end: 'bottom',
            //             scrub: true,
    
            //           },
            //           ease: "none",
            //           scale: 0.8,
            //     });

        });
    }

    window.onscroll = () => {
        const elementScroll : NodeListOf<HTMLElement> = document.querySelectorAll('.scroll');

        if(elementScroll){
            elementScroll.forEach( e => {
                const rectElement = e.getBoundingClientRect();

                if(rectElement.bottom <= (rectElement.height / 1.6)){
                    e.classList.add('remove');
                }else{
                    e.classList.remove('remove');
                }
            });
        }

        if(window.innerWidth <= 700){
            element.forEach( ( item) => {

                const rectScroll = item.getBoundingClientRect();

                if(rectScroll){
                    item.style.transition = '.6s ease';
                    if(rectScroll.top <= (rectScroll.height + rectScroll.height)){
                        item.style.transform = 'scale(1)';
                    }else{
                        item.style.transform = 'scale(0.8)';
                    }

                }

            })
        }

    }



    // import("locomotive-scroll").then((locomotiveModule) => {
    //     const container : HTMLElement | null = document.querySelector('.locomotive_scroll'); 
    //     const menssajes : HTMLElement | null = document.querySelector('.mensajes_home');
    //     const menssajesElements : NodeListOf<HTMLElement> = document.querySelectorAll('.mensajes_home .allContent');
    //     const newScroll : HTMLButtonElement | null = document.querySelector('.newScroll');


    //     if (container && newScroll && menssajes ) {
    //         let locoScroll = new locomotiveModule.default({
    //             el: container,
    //             smooth: true,
    //             getSpeed: true,
    //         });


    //         newScroll.onclick = () => {
    //             locoScroll.scrollTo('#menssage_home');  
    //         }


    //         locoScroll.on('scroll', (arg) => {

    //             if(typeof arg.currentElements['inicio'] === 'object'){
    //                 let progress = arg.currentElements['inicio'].progress;

    //                 if(progress >= 0.8){
    //                     newScroll.classList.add('remove');
    //                 }else{
    //                     newScroll.classList.remove('remove');
    //                 }


    //             }

    //             if(typeof arg.currentElements['modal'] === 'object'){

    //                 let progress = arg.currentElements['modal'].progress;


    //                 if(progress >= 0.20 && progress <= 0.80){
    //                     menssajes.classList.add('active');
    //                 }

                    // menssajesElements.forEach( (e, key ) => {

                    //         if(key == 0 && progress >= 0.10){
                    //             e.classList.add('active')
                    //         }else if(key == 1 && progress >= 0.15){
                    //             e.classList.add('active')
                    //         }else if(key == 2 && progress >= 0.25){
                    //             e.classList.add('active')
                    //         }else if(key == 3 && progress >= 0.30){
                    //             e.classList.add('active')
                    //         }else if(key == 4 && progress >= 0.35){
                    //             e.classList.add('active')
                    //         }else if(key == 5 && progress >= 0.40){
                    //             e.classList.add('active')
                    //         }else if(key == 6 && progress >= 0.45){
                    //             e.classList.add('active')
                    //         }else if(key == 7 && progress >= 0.50){
                    //             e.classList.add('active')
                    //         }else if(key >= 8 && progress >= 0.55){
                    //             e.classList.add('active')
                    //         }

                    // })
                
                // }

    //             if(typeof arg.currentElements['motivaciones'] === 'object'){
    //                 let progress = arg.currentElements['motivaciones'].progress;
    //                 const motivacionesElement : NodeListOf<HTMLElement> = document.querySelectorAll('.motivaciones .item');

    //                 motivacionesElement.forEach( (e, key ) => {

    //                     if(window.innerWidth > 700){
    //                         if(key == 0 && progress >= 0.20){
    //                             e.classList.add('active')
    //                         }else if(key == 1 && progress >= 0.25){
    //                             e.classList.add('active')
    //                         }else if(key == 2 && progress >= 0.30){
    //                             e.classList.add('active')
    //                         }else if(key == 3 && progress >= 0.35){
    //                             e.classList.add('active')
    //                         }else if(key == 4 && progress >= 0.40){
    //                             e.classList.add('active')
    //                         }else if(key == 5 && progress >= 0.45){
    //                             e.classList.add('active')
    //                         }else if(key == 6 && progress >= 0.50){
    //                             e.classList.add('active')
    //                         }else if(key == 7 && progress >= 0.55){
    //                             e.classList.add('active')
    //                         }else if(key >= 8 && progress >= 0.60){
    //                             e.classList.add('active')
    //                         }
    //                     }else{
    //                         if(key == 0 && progress >= 0.10){
    //                             e.classList.add('active')
    //                         }else if(key == 1 && progress >= 0.15){
    //                             e.classList.add('active')
    //                         }else if(key == 2 && progress >= 0.20){
    //                             e.classList.add('active')
    //                         }else if(key == 3 && progress >= 0.25){
    //                             e.classList.add('active')
    //                         }else if(key == 4 && progress >= 0.30){
    //                             e.classList.add('active')
    //                         }else if(key == 5 && progress >= 0.35){
    //                             e.classList.add('active')
    //                         }else if(key == 6 && progress >= 0.40){
    //                             e.classList.add('active')
    //                         }else if(key == 7 && progress >= 0.45){
    //                             e.classList.add('active')
    //                         }else if(key >= 8 && progress >= 0.50){
    //                             e.classList.add('active')
    //                         }
    //                     }

    //                 })
    //             }

    //             if(typeof arg.currentElements['motivaciones_two'] === 'object'){
    //                 let progress = arg.currentElements['motivaciones_two'].progress;
    //                 const motivacionesTwoElement : NodeListOf<HTMLElement> = document.querySelectorAll('.motivaciones_two .item');

    //                 motivacionesTwoElement.forEach( (e, key ) => {

    //                     if(window.innerWidth > 700){
    //                         if(key == 0 && progress >= 0.20){
    //                             e.classList.add('active')
    //                         }else if(key == 1 && progress >= 0.25){
    //                             e.classList.add('active')
    //                         }else if(key == 2 && progress >= 0.30){
    //                             e.classList.add('active')
    //                         }else if(key == 3 && progress >= 0.35){
    //                             e.classList.add('active')
    //                         }else if(key == 4 && progress >= 0.40){
    //                             e.classList.add('active')
    //                         }else if(key == 5 && progress >= 0.45){
    //                             e.classList.add('active')
    //                         }else if(key == 6 && progress >= 0.50){
    //                             e.classList.add('active')
    //                         }else if(key == 7 && progress >= 0.55){
    //                             e.classList.add('active')
    //                         }else if(key >= 8 && progress >= 0.60){
    //                             e.classList.add('active')
    //                         }
    //                     }else{
    //                         if(key == 0 && progress >= 0.10){
    //                             e.classList.add('active')
    //                         }else if(key == 1 && progress >= 0.15){
    //                             e.classList.add('active')
    //                         }else if(key == 2 && progress >= 0.20){
    //                             e.classList.add('active')
    //                         }else if(key == 3 && progress >= 0.25){
    //                             e.classList.add('active')
    //                         }else if(key == 4 && progress >= 0.30){
    //                             e.classList.add('active')
    //                         }else if(key == 5 && progress >= 0.35){
    //                             e.classList.add('active')
    //                         }else if(key == 6 && progress >= 0.40){
    //                             e.classList.add('active')
    //                         }else if(key == 7 && progress >= 0.45){
    //                             e.classList.add('active')
    //                         }else if(key >= 8 && progress >= 0.50){
    //                             e.classList.add('active')
    //                         }
    //                     }

    //                 })
    //             }
    //         });
    //     }
    // });
}



export default useLocoScroll;
