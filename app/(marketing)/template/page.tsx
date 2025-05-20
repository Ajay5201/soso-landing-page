'use client';

import { useState, useEffect, Suspense } from 'react';
import axiosInstance from 'utils/axiosInstance';
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
  Image,
  Button,
  Spinner,
  Center,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
 
const categories = [
  'All',
  'Business',
  'Welcome',
  'Onboarding',
  'Feedback',
  'Promotional',
  'Survey',
  'SaaS',
];

 function TemplatePreviewContent() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  

   useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);  

    return () => clearTimeout(handler);
  }, [searchText]);

  const fetchTemplates = async (category: string, search: string) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/prebuilt-template/getAllTemplate', {
        params: {
          category: category === 'All' ? '' : category,
          searchTerm: search || '',
          page: 0,
          size: 10,
        },
        
      });
       if(!response.data.resultData){
           toast({
          title: 'Failed to load template',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        }
      else{
      setTemplates(response.data.resultData?.content || []);
      }
    } catch (err) {
      console.error('Failed to fetch templates:', err);
        toast({
          title: 'Failed to load template',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates(selectedCategory, debouncedSearchText);
  }, [selectedCategory, debouncedSearchText]);

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={6} align="start">
        <Heading as="h1" textAlign="center" alignSelf="center">
          Free Email Templates for All Use Cases
        </Heading>
        <Text textAlign="center" alignSelf="center">
          Drive 3X conversions with interactive, beautiful, HTML and AMP email templates for all use cases
        </Text>

        {/* Category Filter */}
           <Wrap w="full" justify="center" spacing={4}>
          {categories.map((cat) => (
            <WrapItem key={cat}>
              <Tag
                size="lg"
                variant={selectedCategory === cat ? 'solid' : 'subtle'}
                colorScheme="purple"
                cursor="pointer"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
  

        {/* Search Input */}
        <Box w="100%"  alignSelf="center">
          <Input
            placeholder="Search for Templates"
            size="lg"
            fontSize="lg"
            py={6}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>

        {/* Templates Grid */}
        {loading ? (
          <Center w="full" py={10}>
            <Spinner size="xl" color="purple.500" />
          </Center>
        ) : templates.length === 0 ? (
          <Center w="full" py={20} flexDirection="column">
            <Text fontSize="lg" color="gray.600">
              No result found. Try with other keywords
            </Text>
          </Center>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 5]} spacing={6} w="full" pt={1}>
            {templates.map((template, idx) => (
              <Box key={idx} role="group" position="relative">
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  _hover={{ boxShadow: 'md' }}
                  position="relative"
                  height="400px"
                  bg="white"
                >
                  <Image
                    src={template.templateImg}
                    alt={template.templateName}
                    htmlWidth="100%"
                    htmlHeight="100%"
                    objectFit="contain"
                    display="block"
                  />

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
                      {template.templateName}
                    </Text>
                    <Button
                      onClick={() =>
                        router.push(`/template-preview?templateId=${template.templateId}`)
                      }
                      size="sm"
                      colorScheme="purple"
                      pointerEvents="auto"
                    >
                      Preview
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
}

function LoadingFallback() {
  return (
    <Center py={20}>
      <Spinner size="xl" color="purple.500" />
      <Text ml={4}>Loading template preview...</Text>
    </Center>
  );
}


export default function TemplatePreview() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TemplatePreviewContent />
    </Suspense>
  );
}

