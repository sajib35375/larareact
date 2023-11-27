import React, { useEffect, useState } from 'react';
import './../../assets/css/style.css';
import logoOne from './../../assets/images/logo1.png';
import logoTwo from './../../assets/images/logo2.png';

const TopMenu = () => {

    const [titleName,setTitleName] = useState('title')
    const [logo,setLogo] = useState(logoTwo)
    const [background,setBackground] = useState('backgroundColor')
    const [color,setColor] = useState('');

    const onScroll = () => {
        if (window.scrollY<100) {
            setTitleName('title')
            setLogo(logoTwo)
            setBackground('backgroundColor')
            setColor('')
        }else{
            setTitleName('titleScroll')
            setLogo(logoOne)
            setBackground('backgroundColorScroll')
            setColor('menu')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll)
    },[])

  return (
    <>
    
    <div id="topMenu">
       <ul id={background}>
            <li className={titleName}><a href="#"><img src={logo} alt="" /></a></li>
            <li ><a className={color} href="#">HOME</a></li>
            <li ><a className={color} href="#">ABOUT</a></li>
            <li ><a className={color} href="#">SERVICES</a></li>
            <li ><a className={color} href="#">COURSES</a></li>
            <li ><a className={color} href="#">PORTFOLIO</a></li>
            <li ><a className={color} href="#">CONTACT US</a></li>
        </ul>
       </div>
    </>
  )
}

export default TopMenu