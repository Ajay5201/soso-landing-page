import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Social Society',
  description: 'Terms and conditions for using Social Society interactive email builder platform',
}

export default function TermsPage() {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Terms & Conditions
        </Heading>
        <Text>Last updated: {new Date().toLocaleDateString()}</Text>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            1. Acceptance of Terms
          </Heading>
          <Text mb={4}>
            By accessing and using Social Society ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our Platform.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            2. Description of Service
          </Heading>
          <Text mb={4}>
            Social Society provides an interactive email builder platform that enables users to create, design, and send interactive emails using AMP technology. The Platform includes features such as drag-and-drop email builder, templates, analytics, and integration capabilities.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            3. User Accounts
          </Heading>
          <Text mb={4}>
            You must register for an account to use the Platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            4. AMP Compliance
          </Heading>
          <Text mb={4}>
            Users agree to comply with all AMP email guidelines and specifications as published by Google and other email providers. The Platform reserves the right to reject or modify any email content that does not meet these guidelines.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            5. Content Guidelines
          </Heading>
          <Text mb={4}>
            Users must not use the Platform to send:
          </Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Spam or unsolicited commercial emails</li>
            <li>Content that violates any laws or regulations</li>
            <li>Content that infringes on intellectual property rights</li>
            <li>Malicious or harmful content</li>
            <li>Content that violates email provider policies</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            6. Payment Terms
          </Heading>
          <Text mb={4}>
            Subscription fees are billed in advance on a monthly or annual basis. You agree to pay all fees associated with your chosen plan. Fees are non-refundable except as required by law.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            7. Data Protection
          </Heading>
          <Text mb={4}>
            We process personal data in accordance with our Privacy Policy and applicable data protection laws. By using the Platform, you consent to such processing.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            8. Limitation of Liability
          </Heading>
          <Text mb={4}>
            The Platform is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            9. Changes to Terms
          </Heading>
          <Text mb={4}>
            We reserve the right to modify these terms at any time. Continued use of the Platform after changes constitutes acceptance of the new terms.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            10. Contact Information
          </Heading>
          <Text mb={4}>
            For questions about these Terms & Conditions, please contact us at support@socialsociety.in
          </Text>
        </Box>
      </VStack>
    </Container>
  )
} 