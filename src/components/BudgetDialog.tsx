import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'
import { EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { RiWhatsappFill as WhatsappIcon } from 'react-icons/ri';
import { Fragment } from 'react';

interface IDialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function BudgetDialog({
  isOpen,
  closeModal
}: IDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HeadlessDialog as="div" className="relative z-10 font-sans" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-lg transition-all">
                <HeadlessDialog.Overlay className="flex justify-end">
                  <XMarkIcon
                    className='w-6 h-6 text-gray-900 dark:text-white hover:text-black cursor-pointer'
                    onClick={closeModal}
                  />
                </HeadlessDialog.Overlay>

                <div className='flex flex-col items-center justify-center gap-4'>
                  <HeadlessDialog.Title
                    className='text-gray-900 text-lg font-bold dark:text-white'
                    as="h2"
                  >
                    Solicitar orçamento
                  </HeadlessDialog.Title>

                  <div className="mt-2 text-sm text-gray-500 dark:text-white text-center font-medium">
                    <p>
                      Que tal criarmos um projeto juntos?
                    </p>
                    <p>
                      Entre em contato comigo para consultar disponibilidade.
                    </p>
                  </div>

                  <div className="my-5 flex align-middle gap-6">
                    <a
                      className='w-36 h-12 flex items-center rounded-md justify-center py-2 px-3 bg-whatsapp gap-3 hover:brightness-110'
                      href='https://api.whatsapp.com/send?phone=+5511977262065'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappIcon size={24} fill="#FFF" />
                      <span className='text-white'>Whatsapp</span>
                    </a>
                    <a
                      className='w-36 h-12 flex items-center rounded-md justify-center py-2 px-3 bg-email gap-3 hover:brightness-110'
                      href='mailto:paticunha2001@gmail.com'
                    >
                      <EnvelopeIcon className='w-6 h-6 text-white' />
                      <span className='text-white'>Email</span>
                    </a>
                  </div>
                </div>
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  )
}
