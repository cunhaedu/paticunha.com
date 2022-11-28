import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { projects } from '../data/projects';

import 'keen-slider/keen-slider.min.css';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const [options, setOptions] = useState({});
  const [sliderRef] = useKeenSlider(options);

  useEffect(() => {
    setTimeout(() => {
      setOptions({
        mode: "snap",
        rtl: false,
        slides: { perView: "auto" },
      });
    }, 10);
  }, []);

  return (
    <div className='w-full h-[calc(100vh-4rem)]'>
      <div className='h-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-5 mx-auto'>
        <section>
          <h1 className='text-4xl md:text-5xl text-center md:text-left font-bold text-primary mt-10 md:mt-5'>
            Projetos
          </h1>

          <p className='text-center mt-3 md:text-left font-medium text-gray-500 dark:text-white'>
            Conheça alguns dos meus projetos
          </p>

          <div ref={sliderRef} className="keen-slider flex gap-10 mt-24 md:mt-10 pr-32">
            {projects.map(project => (
              <div key={project.id} className='keen-slider__slide flex flex-col gap-2 align-middle justify-center min-w-[200px] md:min-w-[400px] h-full'>
                <Image
                  src={project.bannerUrl}
                  alt={project.name}
                  width={400}
                  height={400}
                  className='max-h-[200px] w-[200px] md:max-h-[400px] md:w-[400px] rounded-lg object-cover object-center'
                />

                <div className="flex items-center justify-between">
                  <strong className='font-bold'>{project.name}</strong>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowTopRightOnSquareIcon className='w-6 h-6 hover:text-primary duration-500 transition-colors' />
                  </a>
                </div>
              </div>
            ))}

            <div className='keen-slider__slide min-w-[200px]'></div>
          </div>
        </section>
      </div>
    </div>
  )
}
