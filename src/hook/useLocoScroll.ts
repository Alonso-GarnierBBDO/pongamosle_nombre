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

}



export default useLocoScroll;
