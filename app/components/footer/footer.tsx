import { Link } from '@remix-run/react'
import { AudiophileLogo, Facebook, Twitter, Instagram } from '~/icons'
import { Text } from '~/components'

const Footer = () => {
  return (
    <footer
      className="bg-brown px-6 pb-9 pt-0 sm:px-10 sm:pb-12"
    >
      <div className="flex flex-col gap-12 sm:gap-8 max-w-6xl mx-auto before:block before:top-0 before:w-24 before:h-1 before:bg-orange before:mx-auto before:mb-1 before:sm:mx-0 before:sm:mb-7 before:lg:mb-10">
        <div className="flex flex-col gap-12 sm:gap-8 lg:flex-row lg:justify-between lg:items-center">
          <Link to="/" className="flex justify-center sm:justify-start">
            <AudiophileLogo />
          </Link>

          <nav className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8 lg:gap-9">
            <Link to="/" className="font-sans text-white text-xs uppercase font-bold tracking-widest hover:text-orange transition">
              Home
            </Link>
            {/* TODO: Fetch product_categories from API and show those here instead of hardcoding */}
            <Link to="/headphones" className="font-sans text-white text-xs uppercase font-bold tracking-widest hover:text-orange transition">
              Headphones
            </Link>
            <Link to="/speakers" className="font-sans text-white text-xs uppercase font-bold tracking-widest hover:text-orange transition">
              Speakers
            </Link>
            <Link to="/earphones" className="font-sans text-white text-xs uppercase font-bold tracking-widest hover:text-orange transition">
              Earphones
            </Link>
          </nav>
        </div>

        <Text variant="body" className="text-white text-center opacity-50 sm:text-left sm:mb-12 lg:max-w-lg lg:mb-5">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </Text>

        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between items-center">
          <Text variant="body" className="text-white text-center opacity-50 !font-bold sm:text-left">
            Copyright 2022. All Rights Reserved
          </Text>

          <div className="flex gap-4 justify-center items-center">
            <a className="hover:[& > path]:fill-orange" href="https://www.facebook.com">
              <Facebook />
            </a>
            <a href="https://www.twitter.com">
              <Twitter />
            </a>
            <a href="https://www.instagram.com">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
