'use client';
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation';
import ImagePhone from '@/assets/img/header/phone_modal.png';
import ImageScroll from '@/assets/img/header/arrrow_scroll.png';


import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Logo from '@/assets/img/header/logo.svg';
import Image from "next/image";

function Header() {

    const [activeMenu, setActiveMenu] = useState(false);
    const [removeMenu, setRemoveMenu] = useState(false);
    const pathname = usePathname();
    const [url, setUrl] = useState(pathname);
    const params = useParams();

    gsap.registerPlugin(TextPlugin);

    useEffect(() => {
        const hash = window.location.hash;
        setUrl(`${pathname}${hash}`);

    }, [params]);

    const scrollear = () => {
        const element = document.querySelector('.locomotive_scroll');
        element?.scrollTo({
            top: 100,
            left: 0,
            behavior: "smooth",
        })
    }


    // Animacion del menu
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
                        <Image src={Logo.src} alt="" width={200} height={200}/>
                    </a>

                    <section className="menu">
                        <ul>
                            <li>
                                <Link onClick={openMenu} className={ url == '/#home' ? 'active' : '' }  href="/#home">Pongámosle nombre</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} className={ url == '/#cifras' ? 'active' : '' } href="/#cifras">Cifras de violencia sexual</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} className={ url == '/#tipos' ? 'active' : '' } href="/#tipos">Tipos de violencia</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} className={ url == '/#comparte' ? 'active' : '' } href="/#comparte">Comparte la campaña</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} className={ url == '/#organizaciones' ? 'active' : '' } href="/#organizaciones">Organizaciones participantes</Link>
                            </li>
                            <li>
                                <Link onClick={openMenu} className={ url == '/#contacto' ? 'active' : '' } href="/#contacto">Contáctanos</Link>
                            </li>
                        </ul>
                    </section>

                </section>
            
            </header>

            <div className="modal_contact">
                <a href="">
                    <Image src={ImagePhone.src} alt="Telefono imagen" width={100} height={100}/>
                    <p>Haz tus denuncias al 1572</p>
                </a>
                <button className="newScroll">
                    <Image src={ImageScroll.src} alt="Imagen del arrow" width={100} height={100}/>
                </button>
            </div>

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