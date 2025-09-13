import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Social Society',
  description: 'Privacy policy for Social Society interactive email builder platform',
}

export default function PrivacyPage() {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Privacy Policy
        </Heading>
        <Text>Last updated: {new Date().toLocaleDateString()}</Text>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            1. Introduction
          </Heading>
          <Text mb={4}>
            At Social Society, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our interactive email builder platform.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            2. Information We Collect
          </Heading>
          <Text mb={4}>We collect information that you provide directly to us:</Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Account information (name, email, password)</li>
            <li>Profile information</li>
            <li>Email content and templates</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
            <li>Social media profile information (when you connect through social platforms)</li>
            <li>Feedback and survey responses</li>
            <li>Customer support communications</li>
          </Text>
          <Text mb={4}>We also collect information automatically:</Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Usage data and analytics</li>
            <li>Device information (IP address, browser type, version)</li>
            <li>Location data</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Mobile device information (when accessing through mobile)</li>
            <li>Interaction data with our website and services</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            3. How We Use Your Information
          </Heading>
          <Text mb={4}>We use the collected information for:</Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Providing and improving our services</li>
            <li>Processing your transactions</li>
            <li>Sending you important updates</li>
            <li>Analyzing and optimizing platform performance</li>
            <li>Ensuring AMP compliance</li>
            <li>Preventing fraud and abuse</li>
            <li>Personalizing your experience</li>
            <li>Conducting marketing and promotional activities</li>
            <li>Organizing events and webinars</li>
            <li>Investigating and preventing unauthorized access</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            4. Data Sharing and Disclosure
          </Heading>
          <Text mb={4}>We may share your information with:</Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Service providers and partners</li>
            <li>Email delivery services</li>
            <li>Analytics providers</li>
            <li>Legal authorities when required</li>
            <li>Credit reference agencies (for payment processing)</li>
            <li>Marketing and promotional partners</li>
            <li>Business partners during mergers or acquisitions</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            5. Data Security
          </Heading>
          <Text mb={4}>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
          </Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage and backup systems</li>
            <li>Employee training on data security</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            6. Your Rights
          </Heading>
          <Text mb={4}>You have the right to:</Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
            <li>Opt-out of marketing communications</li>
            <li>Request restriction of processing</li>
            <li>File complaints with data protection authorities</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            7. Cookies and Tracking
          </Heading>
          <Text mb={4}>
            We use cookies and similar tracking technologies to enhance your experience and collect usage data. These help us:
          </Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Understand how our website is being used</li>
            <li>Measure the effectiveness of our marketing campaigns</li>
            <li>Customize the website for you</li>
            <li>Make advertising messages more relevant</li>
          </Text>
          <Text mb={4}>
            You can control cookie preferences through your browser settings. For more information about our cookie policy, please contact us.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            8. International Data Transfers
          </Heading>
          <Text mb={4}>
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data, including:
          </Text>
          <Text as="ul" listStyleType="disc" pl={6} mb={4}>
            <li>Standard contractual clauses for data transfers</li>
            <li>Compliance with international data protection standards</li>
            <li>Regular assessment of data transfer risks</li>
            <li>Transparent reporting of cross-border transfers</li>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            9. Children's Privacy
          </Heading>
          <Text mb={4}>
            Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            10. Changes to This Policy
          </Heading>
          <Text mb={4}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            11. Contact Us
          </Heading>
          <Text mb={4}>
            If you have any questions about this Privacy Policy, please contact us at privacy@socialsociety.in
          </Text>
        </Box>
      </VStack>
    </Container>
  )
} 