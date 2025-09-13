import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Social Society',
    description: 'Interactive email communication at ease',
  } as NextSeoProps,
  termsUrl: '/terms',
  privacyUrl: '/privacy',
  header: {
    links: [
      {
        label:'Template',
        href:'/template'
      },
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
            {
        label: 'Terms',
        href: '/terms',
      },
      {
        label: 'Privacy',
        href: '/privacy',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
       &copy; {new Date().getFullYear()} Social Society. All rights reserved.
      </>
    ),
    links: [
      {
        href: '/terms',
        label: 'Terms & Conditions',
      },
      {
        href: '/privacy',
        label: 'Privacy Policy',
      },
      {
        href: 'mailto:support@socialsociety.in',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/socialsociety',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/socialsociety',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
