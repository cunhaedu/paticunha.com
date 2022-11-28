import Image from 'next/image';

import PerfilImg from '../../public/assets/perfil.jpg';

export default function About() {
  return (
    <div className='min-w-full h-[calc(100vh-4rem)]'>
      <div className='min-h-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col-reverse md:flex-row items-center align-middle justify-between p-5 md:p-0 gap-5 mx-auto'>
        <aside className='lg:min-h-full w-full md:w-[50vw] lg:w-[30vw]'>
          <Image
            src={PerfilImg}
            alt="Foto de Perfil da Patricia Assunção"
            width={600}
            height={600}
            placeholder="blur"
            className='rounded-md h-[50vh] w-full md:h-full object-cover'
          />
        </aside>

        <section className='lg:min-h-full w-full md:w-[50vw] md:px-5 flex flex-col items-center md:items-start justify-center gap-5'>
          <h1 className='text-4xl md:text-5xl text-center md:text-left font-bold text-gray-900 dark:text-white'>
            Focada no <br/> Desenvolvimento de {' '}
            <span className='text-primary'>interfaces </span>
            digitais
          </h1>

          <p className='text-center md:text-left font-medium text-gray-500 dark:text-white'>
            Patricia Assunção é uma UI/UX Designer focada no desenvolvimento de
            interfaces digitais para sites e aplicativos.
          </p>

          <p className='text-center md:text-left font-medium text-gray-500 dark:text-white'>
            Muito além de funcionalidades, ela procura sempre trazer no seu
            trabalho as melhores experiências aos usuários através da criação de
            interfaces simples, intuitivas e descomplicadas.
          </p>

          <p className='text-center md:text-left font-medium text-gray-500 dark:text-white'>
            Além disso, como pessoa a Patricia não deixa nada a desejar, sendo
            uma pessoa atenciosa e que colabora positivamente com o ambiente ao
            seu redor.
          </p>
        </section>
      </div>
    </div>
  )
}
