import Image from 'next/image';

import PerfilImg from '../../public/assets/perfil.jpg';

export default function Home() {
  return (
    <div className='w-full h-[calc(100vh-4rem)]'>
      <div className='h-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col md:flex-row items-center align-middle justify-between p-5 gap-14 mx-auto'>
        <section className='lg:min-h-full w-full md:w-[50vw] flex flex-col items-center md:items-start justify-center gap-5'>
          <h1 className='text-4xl md:text-5xl text-center md:text-left font-bold text-gray-900 dark:text-white'>
            <span className='text-primary'>Design </span>
            e <br/> desenvolvimento de interfaces digitais
          </h1>

          <p className='lg:w-2/3 text-center md:text-left font-medium text-gray-500 dark:text-white'>
            Proporciono as melhores experiências aos usuários através da criação
            de interfaces simples, intuitivas e descomplicadas.
          </p>

          <button className='md:w-1/3 bg-primary px-5 py-3 rounded-lg text-white font-bold hover:brightness-110'>
            Orçamento
          </button>
        </section>

        <aside className='lg:min-h-full w-full md:w-[50vw] lg:w-[30vw] flex items-center justify-center'>
          <Image
            src={PerfilImg}
            alt="Foto de Perfil da Patricia Assunção"
            width={400}
            height={400}
            placeholder="blur"
            className='rounded-md h-96 w-96 object-cover'
          />
        </aside>
      </div>
    </div>
  )
}
