import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Choose Your Plan',
  description:
    'Select the perfect plan for your email marketing needs. All plans include AMP support and interactive email features.',
  plans: [
    {
      id: 'starter',
      title: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '$29',
      features: [
        {
          title: 'Up to 5,000 emails/month',
        },
        {
          title: 'Basic interactive templates',
        },
        {
          title: 'AMP email support',
        },
        {
          title: 'Basic analytics',
        },
        {
          title: 'Email support',
        },
        {
          title: '1 team member',
        },
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'pro',
      title: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$79',
      isRecommended: true,
      features: [
        {
          title: 'Up to 50,000 emails/month',
        },
        {
          title: 'Advanced interactive templates',
        },
        {
          title: 'Priority AMP support',
        },
        {
          title: 'Advanced analytics',
        },
        {
          title: 'Priority support',
        },
        {
          title: '5 team members',
        },
        {
          title: 'A/B testing',
        },
        {
          title: 'API access',
        },
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'For large organizations with custom needs',
      price: 'Custom',
      features: [
        {
          title: 'Unlimited emails',
        },
        {
          title: 'Custom interactive templates',
        },
        {
          title: 'Dedicated AMP support',
        },
        {
          title: 'Custom analytics',
        },
        {
          title: '24/7 dedicated support',
        },
        {
          title: 'Unlimited team members',
        },
        {
          title: 'Advanced A/B testing',
        },
        {
          title: 'Full API access',
        },
        {
          title: 'Custom integrations',
        },
        {
          title: 'SLA guarantee',
        },
      ],
      action: {
        href: '/contact',
      },
    },
  ],
}
