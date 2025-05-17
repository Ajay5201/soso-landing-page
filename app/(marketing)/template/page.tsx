'use client';

import {
  Box,
  Container,
  Heading,
  Input,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Select,
  Image,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

const categories = [
  'All',
  'Welcome',
  'Engagement',
  'Onboarding',
  'Feedback',
  'Promotional',
  'Lead Nurture',
  'Survey',
  'Holiday',
   'SaaS',
 ]

 
const templates = [
  {
    title: 'Black Friday',
    image: 'https://nonprodmailapp.s3.amazonaws.com/7be0d88a-926d-434d-adf4-7313e0a00f61_7be0d88a-926d-434d-adf4-7313e0a00f61.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T131814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAYM7POGCBUAH34F3C%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ddc03850de4b0ee23d7943811b05276f2170a981ac6b6074f40eb74d834ca8f',
  },
  {
    title: 'Black Friday',
    image: 'https://nonprodmailapp.s3.amazonaws.com/753970c6-2b72-4674-b566-7d449b19f1a1_753970c6-2b72-4674-b566-7d449b19f1a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T165912Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAYM7POGCBUAH34F3C%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=609abfed977b896fc546a2fd81e6d55eeafd33c27bea1dd973b20170d899c14f',
  },
  {
    title: 'Black Friday',
    image: 'https://nonprodmailapp.s3.amazonaws.com/2c043c98-bfd0-457c-9b31-e07dccd6dd81_2c043c98-bfd0-457c-9b31-e07dccd6dd81.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T181200Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAYM7POGCBUAH34F3C%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=374d558b7bb775f85265a7521f05ee7408dd545bb219b6e23576ddf28ed8eeba',
  },
  {
    title: 'Black Friday',
    image: 'https://nonprodmailapp.s3.amazonaws.com/7be0d88a-926d-434d-adf4-7313e0a00f61_7be0d88a-926d-434d-adf4-7313e0a00f61.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T131814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAYM7POGCBUAH34F3C%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ddc03850de4b0ee23d7943811b05276f2170a981ac6b6074f40eb74d834ca8f',
  },
  {
    title: 'Black Friday',
    image: 'https://nonprodmailapp.s3.amazonaws.com/7be0d88a-926d-434d-adf4-7313e0a00f61_7be0d88a-926d-434d-adf4-7313e0a00f61.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T131814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAYM7POGCBUAH34F3C%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ddc03850de4b0ee23d7943811b05276f2170a981ac6b6074f40eb74d834ca8f',
  },
  {
    title: 'Black Friday',
    image: 'https://nonprodmailapp.s3.amazonaws.com/7be0d88a-926d-434d-adf4-7313e0a00f61_7be0d88a-926d-434d-adf4-7313e0a00f61.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T131814Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIAYM7POGCBUAH34F3C%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ddc03850de4b0ee23d7943811b05276f2170a981ac6b6074f40eb74d834ca8f',
  },
]

export default function TemplatePage() {
    const router = useRouter();

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={6} align="start">
        <Heading as='h1'   >
          Free Email Templates for All Use Cases
        </Heading>
        <Text>
          Drive 3X conversions with interactive, beautiful, HTML and AMP email templates for all use cases
        </Text>

         <Wrap>
          {categories.map((cat) => (
            <WrapItem key={cat}>
              <Tag size="lg" variant="subtle" colorScheme="purple" cursor="pointer">
                {cat}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

         <SimpleGrid   w="full">
          <Input placeholder="Search for Templates" />
        </SimpleGrid>

         <SimpleGrid columns={[1, 2, 3, 5]} spacing={6} w="full" pt={6}>
            {templates.map((template) => (
            <Box key={template.title} role="group" position="relative">
                <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ boxShadow: 'md' }}
                position="relative"
                height="300px"  
                bg="white"
                >
                <Image
                    src={template.image}
                    alt={template.title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />

                {/* Hover Overlay */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="full"
                    h="full"
                    bg="rgba(0, 0, 0, 0.6)"
                    color="white"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    opacity="0"
                    transition="opacity 0.3s"
                    _groupHover={{ opacity: 1 }}
                    pointerEvents="none"
                    zIndex="1"
                >
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                    {template.title}
                    </Text>
                    <Button onClick={() => router.push('/template-preview')}  size="sm" colorScheme="purple" pointerEvents="auto">
                    Preview
                    </Button>
                </Box>
                </Box>
            </Box>
            ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
