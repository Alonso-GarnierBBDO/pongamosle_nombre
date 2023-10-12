'use client';
import { useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Logo from '@/assets/img/header/logo.svg';

function Header() {

    const [activeMenu, setActiveMenu] = useState(false);
    const [removeMenu, setRemoveMenu] = useState(false);

    gsap.registerPlugin(TextPlugin);

    const openMenu = () => {

        if(activeMenu){

            animationList(false);

            setTimeout(() => {

                setRemoveMenu(true);

                setActiveMenu(false);

                setTimeout(() => {
                    setRemoveMenu(false);
                }, 1000)

            }, 1000);

        }else{
            setActiveMenu(true)   
            setTimeout(() => {
                animationList(true);
            }, 100)
        }
    }

    return (
        <>
            <header>
                <button className={(activeMenu ? 'active' : '') + ' ' + (removeMenu ? 'remove' : '')}  onClick={openMenu}>
                    <hr />
                    <hr />
                    <hr />
                </button>

                <section className={'item' + ' ' + (activeMenu ? 'active' : '') + ' ' + (removeMenu ? 'remove' : '')}>
                    <a href="#" className="logo" title="Inicio">
                        <img src={Logo.src} alt="" />
                    </a>

                    <section className="menu">
                        <ul>
                            <li>
                                <a onClick={openMenu} href="#">Pongámosle nombre</a>
                            </li>
                            <li>
                                <a onClick={openMenu} href="#">Cifras de violencia sexual</a>
                            </li>
                            <li>
                                <a onClick={openMenu} href="#">Tipos de violencia</a>
                            </li>
                            <li>
                                <a onClick={openMenu} href="#">Comparte la campaña</a>
                            </li>
                            <li>
                                <a onClick={openMenu} href="#">Organizaciones participantes</a>
                            </li>
                            <li>
                                <a onClick={openMenu} href="#">Contáctanos</a>
                            </li>
                        </ul>
                    </section>

                </section>
            
            </header>
        </>
    )

}

function animationList(exit: boolean = false){

    const elements : NodeListOf<HTMLElement> = document.querySelectorAll('header ul li');
    let counter : number = 100;

    if(exit){

        counter = 100;

        elements.forEach( e =>{

            counter += 100;

            setTimeout(() => {
                
                e.classList.add('active');

            }, counter)
        });

    }else{

        counter = 0;

        const elementsArray : HTMLElement[] = Array.from(elements);

        elementsArray.slice().reverse().forEach( e => {
            counter += 100;

            setTimeout(() => {
                
                e.classList.remove('active');

            }, counter)
        })

    }

}

export default Header;