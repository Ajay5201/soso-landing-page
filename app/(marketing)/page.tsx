'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBarChart2,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLink,
  FiLock,
  FiSearch,
  FiShield,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserCheck,
  FiUserPlus,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import { FaFlask } from 'react-icons/fa'

// Remove this export and use the correct metadata approach
// export const meta: Metadata = {
//   title: 'Saas UI Landingspage',
//   description: 'Free SaaS landingspage starter kit',
// }

// Note: Since this is a client component ('use client'), 
// you should move metadata to a separate layout.tsx file
// or remove 'use client' and use the proper metadata export

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
               Create Dynamic AMP
                <Br /> Interactive Emails
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Social Society is the leading <Em>AMP Email Builder</Em>
                <Br /> that helps you create engaging interactive emails with forms, <Br />{' '}
                polls, carousels, and dynamic content—all without coding.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Start Building
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View AMP Examples
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'AMP Compliant',
            icon: FiSmile,
            description: "Built on Google's AMP for Email framework for maximum compatibility.",
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Dynamic Content',
            icon: FiSliders,
            description:
              'Create personalized, interactive emails that adapt to user behavior and preferences.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Interactive Elements',
            icon: FiGrid,
            description:
              'Add forms, polls, carousels, and other interactive elements directly in emails.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'High Engagement',
            icon: FiThumbsUp,
            description:
              'Achieve up to 300% higher engagement rates with interactive AMP emails.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Powerful AMP Features">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Create stunning interactive emails with <Em>AMP-compliant components</Em>.
            Including dynamic forms, polls, carousels, and more. All built on Google's AMP for Email framework for maximum compatibility.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Start Building
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                Interactive AMP Emails
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Built for Engagement">
        <Text color="muted" fontSize="lg">
          Our AMP email builder is designed to maximize engagement. Create interactive experiences that keep users engaged without leaving their inbox.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Marketing Director"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        "Social Society's AMP email builder transformed our email marketing.
         We saw a 300% increase in engagement with interactive elements like forms and polls. 
         The drag-and-drop interface made it incredibly easy to create dynamic emails."
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Complete AMP Email Solution"
      >
        <Text color="muted" fontSize="lg">
          Everything you need to create, send, and track interactive AMP emails.
        </Text>
        <Wrap mt="8">
          {[
            'AMP forms',
            'Dynamic content',
            'Email polls',
            'Carousel',
            'Product galleries',
            'Interactive buttons',
            'Real-time updates',
            'Analytics tracking',
            'A/B testing',
            'Personalization',
            'Automation',
            'Template library',
            'Mobile responsive',
            'AMP validation',
            'Performance tracking',
            'Engagement metrics',
            'Integration tools',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Next-Generation
          <Br /> AMP Email Platform
        </Heading>
      }
      description={
        <>
          Create engaging interactive emails with our comprehensive AMP builder.
          <Br />
          Features designed to maximize engagement and drive results.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'AMP Email Forms',
          icon: FiTrendingUp,
          description:
            'Create interactive forms directly in emails. Collect feedback, registrations, and more without users leaving their inbox.',
          variant: 'inline',
        },
        {
          title: 'Dynamic Content',
          icon: FiBox,
          description:
            'Show personalized content based on user behavior, location, or preferences. Create truly engaging email experiences.',
          variant: 'inline',
        },
        {
          title: 'Interactive Polls',
          icon: FiZap,
          description:
            'Engage your audience with interactive polls and surveys. Get real-time feedback and insights from your subscribers.',
          variant: 'inline',
        },
        {
          title: 'Product Carousels',
          icon: FiUserCheck,
          description:
            'Showcase products with interactive carousels. Let users browse and interact with your products directly in the email.',
          variant: 'inline',
        },
        {
          title: 'Real-Time Analytics',
          icon: FiBarChart2,
          description:
            "Track email performance, user interactions, and conversion rates. Optimize your campaigns with detailed insights.",
          variant: 'inline',
        },
        {
          title: 'AMP Compliance',
          icon: FiCode,
          description:
            "Built on Google's AMP for Email framework. Ensure your emails work across all major email clients and platforms.",
          variant: 'inline',
        },
        {
          title: 'A/B Testing',
          icon: FaFlask,
          description:
            'est different interactive elements and content to optimize engagement. Make data-driven decisions for better results.',
          variant: 'inline',
        },
        {
          title: 'Marketing Automation',
          icon: FiLink,
          description:
            'Automate your email campaigns with dynamic content and personalized experiences. Scale your marketing efforts efficiently.',
          variant: 'inline',
        },
        {
          title: 'Enterprise Security',
          icon: FiShield,
          description: (
            <>
              Bank-grade security with GDPR compliance. Protect your data and ensure privacy with enterprise-level security measures.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home 