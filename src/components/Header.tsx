import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { ActiveLink } from './ActiveLink';

export function Header() {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme();
  const router = useRouter();

  useEffect(() =>{
    setIsComponentMounted(true);
  },[]);

  function handleSwitchTheme(currentTheme: string) {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  function renderThemeButton() {
    if (!isComponentMounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      <button
        type="button"
        className="text-gray-500 hover:text-black dark:hover:text-white rounded-lg p-1 self-center transition-colors duration-500 ease-in-out"
        onClick={() => handleSwitchTheme(currentTheme ?? 'dark')}
      >
        {currentTheme === 'dark'
          ? <SunIcon className="w-6 h-6 font-medium" />
          : <MoonIcon className="w-6 h-6 font-medium" />
        }
      </button>
    )
  };

  return (
    <Popover className="w-full h-16 border-b border-gray-400/30 dark:border-none flex justify-between items-center py-2 px-5">
      {({ open }) => (
        <>
          <div className='md:hidden flex justify-end ml-auto mr-3'>
            {renderThemeButton()}
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-500">
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 font-medium text-center self-center mx-auto"
          >
            <ActiveLink href='/'>
              <span>Início</span>
            </ActiveLink>

            <ActiveLink href='/about'>
              <span>Sobre</span>
            </ActiveLink>

            <ActiveLink href='/projects'>
              <span>Projetos</span>
            </ActiveLink>

            {renderThemeButton()}

          </Popover.Group>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            show={open}
          >
            <Popover.Panel static focus className="fixed z-50 top-0 bottom-0 inset-x-0 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black h-[100vh]">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-end">
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>

                <div className="py-6 px-5 space-y-6 h-full">
                  <div className="flex flex-col gap-10 justify-center items-center align-middle h-[calc(100%-(4.5rem+160px))]">
                      <Popover.Button
                        className='text-3xl text-gray-500 hover:text-black hover:dark:text-white'
                        onClick={() => router.push('/')}
                      >
                          Início
                      </Popover.Button>

                    <Popover.Button
                      className='text-3xl text-gray-500 hover:text-black hover:dark:text-white'
                      onClick={() => router.push('/about')}
                    >
                      Sobre
                    </Popover.Button>

                    <Popover.Button
                      className='text-3xl text-gray-500 hover:text-black hover:dark:text-white'
                      onClick={() => router.push('/projects')}
                    >
                      Projetos
                    </Popover.Button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
