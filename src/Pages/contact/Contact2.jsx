import React from 'react'
import topmessages from "../../assets/images/topmessages.svg"
import email from "../../assets/images/email.svg"
import facebok from "../../assets/images/facebok.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import linkedin from "../../assets/images/linkedin.svg"
import x from "../../assets/images/x.svg"
import insta from "../../assets/images/insta.svg"
import discordc from "../../assets/images/discordc.svg"



function Contact2() {

    const icons = [
        { src: email, link: 'mailto:example@example.com', alt: 'Email' },
        { src: facebok, link: 'https://www.facebook.com', alt: 'Facebook' },
        { src: x, link: 'https://www.x.com', alt: 'X' },
        { src: linkedin, link: 'https://www.linkedin.com/in/alienflow/?originalSubdomain=es', alt: 'LinkedIn' },
        { src: whatsapp, link: 'https://api.whatsapp.com/send?phone=34645520831&text=Hola,%20buenas%20quiero%20mejorar%20mi%20calidad%20de%20vida%20%20y%20exito%20profesionalmente', alt: 'WhatsApp' },
        { src: insta, link: 'https://www.instagram.com/alien69flow/', alt: 'Instagram' },
        { src: discordc, link: 'https://www.discord.com', alt: 'Discord' },
    ];

  return (
    <div className='lg:h-screen xl:p-20 xl:h-auto'>

<div className='flex  text-center p-2 text-2xl lg:text-4xl  atomicage text-[#19AF00] items-center justify-center '> Let's stay connected, you can find us here
</div>
  <p className="text-center p-2  lg:text-[25px] exo text-[#ECDD91] p max-w-[700px] mx-auto">Contact now to explore and learn more about how we can help your quality of life improve and your professional successes flourish; so that they provide you with greater and better profits.</p>
  
<div className=" exo   mt-10">
    <img src={topmessages} alt="" className="mx-auto w-20" />
    <p className="text-center  text-[#6EC1E4]">E-MAIL</p>
    
    <p className=" text-center text-[#08FF00]">69@AlienFlow.Space</p>
    
    </div>
<div className="flex items-center justify-center flex-wrap p-2 gap-2">
<div className="flex gap-2">
            {icons.map((icon, index) => (
                <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <img src={icon.src} alt={icon.alt} className="transition-all ease-linear duration-200 hover:scale-125" />
                </a>
            ))}
        </div>
</div>


    </div>
  )
}

export default Contact2