import { useGSAP } from '@gsap/react'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import image1 from '../../Components/Images_2/image_1.jpg';
import image2 from '../../Components/Images_2/image_2.jpg';
import image3 from '../../Components/Images_2/image_3.jpg';
import image4 from '../../Components/Images_2/image_4.jpg';
import image5 from '../../Components/Images_2/image_5.jpg';
import image6 from '../../Components/Images_2/image_6.jpg';
import image7 from '../../Components/Images_2/image_7.png';
import image8 from '../../Components/Images_2/image_8.jpg'

const Projects = () => {

  const allImages = [image1, image2, image3, image4, image5, image6, image7, image8]
  const projects = []
  for (let i = 0; i < allImages.length; i += 2) {
    projects.push({ image1: allImages[i], image2: allImages[i + 1] })
  }


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '20px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -190%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[5vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return (
            <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Projects