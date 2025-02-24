'use client';

import { useState, useMemo } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: 'fa-solid fa-house' },
  { name: 'Services', href: '/services/', icon: 'fa-solid fa-code' },
  { name: 'About', href: '/about/', icon: 'fa-solid fa-circle-info' },
  { name: 'Contact', href: '/contact/', icon: 'fa-solid fa-envelope' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = useMemo(() => window.location.pathname, []);

  return (
    <header className="bg-slate-900 text-white shadow-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
          <img src="/assets/images/logo_only.png" alt="Briarwood Software" className='w-12 h-12 lg:w-16 lg:h-16'></img>
            <span className='ml-1 text-md lg:text-xl jura-header tracking-tighter'>Briarwood Software</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 px-3 py-2 rounded-md transition-all duration-300 ${currentPath === item.href
                  ? 'bg-zinc-300 text-gray-800'  // Highlight current page
                  : 'hover:bg-zinc-300 hover:text-gray-800' // Hover effect
                }`}
            >
              <span className="mr-1.5">
                <i className={item.icon}></i>
              </span>
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-slate-800/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-slate-900 text-white p-6 sm:ring-1 sm:ring-gray-800">
          <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
          <img src="/assets/images/logo_only.png" className='w-12 h-12 lg:w-16 lg:h-16'></img>
            <span className='ml-1 text-md lg:text-xl jura-header tracking-tighter'>Briarwood Software</span>
          </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-semibold ${currentPath === item.href ? 'bg-slate-800 text-white' : 'hover:bg-zin-800'
                    }`}
                >
                  <span className="mr-1.5"><i className={item.icon}></i></span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export { Navbar };
