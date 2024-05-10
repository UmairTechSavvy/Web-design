import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCraosel from './videoCraosel'

const Highlight = () => {

useGSAP(()=>{

gsap.to('#hh' , {opacity:1 , y: -30})
gsap.to('.link' , {opacity:1 , y: 0 , duration:1 , stagger:0.25})

},[])

  return (
 <section id='highlight' className='bg-zinc w-screen overflow-hidden h-full common-padding'>
  <div className='screen-max-width'>

    <div className='mb-12 w-full md:flex items-end justify-between'>

      <h1 id='hh' className='section-heading'>

Get the highlights
</h1>

<div className='flex flex-wrap items-end gap-5'>
<p className='link'>
  
  Watch the film

  <img src={watchImg} className='ml-2' />
</p>
<p className='link'>
  
  Watch the event

  <img src={rightImg} className='ml-2' />
</p>

</div>
    </div>

<VideoCraosel />

  </div>




 </section>
  )
}

export default Highlight