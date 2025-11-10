'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full font-inter bg-gray border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-8 md:px-12 sm:px-5 py-12 md:py-12 sm:py-10">
        {/* Desktop Layout */}
        <div className="hidden my-10 md:flex md:justify-between md:gap-24">
          {/* Column 1 - Logo and Description */}
          <div className="flex-shrink-0 max-w-xl ml-4">

            {/* Logo */}
            <Link href="/" className="flex cursor-pointer items-center gap-3 group" aria-label="Stratex Home">

              <div className="w-10 bg-primary/10 rounded-lg h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Image src="/next-ledge.png" alt="Stratex Logo" width={45} height={45} />
              </div>
              <span className="text-[22px] font-hedvig md:text-[22px] sm:text-[20px] font-normal text-heading tracking-tight transition-opacity duration-200 group-hover:opacity-80">
                Nexledge
              </span>
            </Link>

            {/* Description */}
            <p className="text-lg antialiased font-inter mt-6 text-body leading-relaxed mb-8 max-w-72">
              Optimize your business strategy with expert consulting solutions
            </p>

          
          </div>

          {/* Columns 2, 3, 4 - Menu sections */}
          <div className="flex gap-20 mr-20">
            {/* Column 2 - Menu */}
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Menu</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-work" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  How it work
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

            {/* Column 3 - Follow us */}
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Follow us:</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://instagram.com" target="_blank" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

            {/* Column 4 - Contact */}
            <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:insert.supply@gmail.com" className="text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                  Insert.supply@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-[15px] text-gray-500 hover:text-gray-900 transition-colors">
                  +123 456 789
                </a>
              </li>
              <li>
                <span className="text-[16px] text-gray-500">
                  California, USA
                </span>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                 <Image
                  src="/next-ledge.png"
                  alt="Stratex Logo"
                  width={28}
                  height={28}
                />
              </div>
              <span className="text-[26px] font-normal text-heading tracking-tight" style={{ fontFamily: 'serif' }}>
                Nexledge
              </span>
            </Link>

            <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
              Optimize your business strategy with expert consulting solutions
            </p>

            <Link 
              href="https://insertsupply.com" 
              target="_blank"
              className="inline-flex items-center gap-1 text-[15px] text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span>Template by</span>
              <span className="inline-flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                <span className="font-medium">Insert Supply</span>
              </span>
            </Link>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-5">Menu</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-work" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  How it work
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-5">Follow us:</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://instagram.com" target="_blank" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:insert.supply@gmail.com" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Insert.supply@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  +123 456 789
                </a>
              </li>
              <li>
                <span className="text-[16px] text-gray-600">
                  California, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Desktop Only */}
        {/* <div className="hidden md:flex items-center justify-between mt-12 pt-8 border-t border-gray-300">
          <div className="flex items-center gap-2 text-[14px] text-gray-600">
            <span>Copyright@2024</span>

          </div>
        </div> */}
      </div>
    </footer>
  );
}