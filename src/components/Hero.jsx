import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { smallHeroVideo , heroVideo } from '../utils'

const Hero = () => {
  const [videoSrc , setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  useGSAP(()=>{


    gsap.to('#hero',{opacity:1 , delay:2})
    gsap.to('#cta',{opacity:1 ,y:-40 , delay:2})
  },[])


  const setVideo = () =>{

 if(window.innerHeight < 760){

  setVideoSrc(smallHeroVideo)
 }else{

  setVideoSrc(heroVideo)
 }


  }

useEffect(()=>{

window.addEventListener('resize',setVideo)

return (()=>{

window.removeEventListener('resize',setVideo)

})



},[])


  return (
    <section className="w-full nav-height bg-black relative">


      <div className='h-5/6 w-full flex-col flex-center'>

        <p id='hero' className='hero-title'>Iphone 15 pro max</p>

        <div className='md:w-10/12 w-9/11'>

          <video className='pointer-events-none' autoPlay playsInline={true} muted key={videoSrc}>

<source  src={videoSrc}/>

          </video>


        </div>


      </div>


      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>

<a className='btn' href='#highlights' >Buy</a>
<p className='font-normal text-xl'>From $199 to $999</p>


      </div>



    </section>
  )
}

export default Hero