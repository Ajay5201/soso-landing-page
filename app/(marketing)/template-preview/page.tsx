'use client';

import {
  Box,
  Button,
  Input,
  Text,
  Heading,
  VStack,
  HStack,
  Tag,
  useToast,
  Container,
  Icon,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { Suspense, useEffect, useState } from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CiMobile3, CiShare2 } from 'react-icons/ci';
import { FaDesktop, FaPlus, FaShareAlt } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import axiosInstance from 'utils/axiosInstance';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';


const MotionBox = motion.div;

 function PrebuiltTemplateContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('templateId');

  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const isMobile = device === 'mobile';
  const toast = useToast();

  // Fetch template on mount
  useEffect(() => {
    if (!templateId) return;

    const fetchTemplate = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/prebuilt-template/getTemplateById`,
          {
            params: {
              id: templateId,
            },
          }
        );
        if(!response.data.resultData){
           toast({
          title: 'Failed to load template',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        }
        else{
            setTemplate(response.data.resultData);
        }
      } catch (err) {
        console.error('Failed to fetch template', err);
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

    fetchTemplate();
  }, [templateId, toast]);

const handleSubmit = async () => {
  if (!email.includes('@')) {
    toast({
      title: 'Please enter a valid email',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    return;
  }

  try {
    const response = await axiosInstance.get('/prebuilt-template/sendTestMail', {
      params: {
        templateId,
        email,
      },
    });
    
    toast({
      title: 'Template sent to your inbox!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  } catch (err) {
    console.error('Failed to send test email:', err);
    toast({
      title: 'Failed to send test email',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  }
};


  if (loading || !template) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="purple.500" />
      </Center>
    );
  }

  return (
    <Container maxW="container.xl" py={20}>
      <Box display="flex" flexDir={{ base: 'column', md: 'row' }} p={5} gap={10}>
        
        <Box flex="1" >
          <Breadcrumb fontSize="md" mb={20}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/template">Template</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{template.templateName}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading as="h1" fontSize="36px" mb={3}>
            {template.templateName}
          </Heading>
          <Text fontSize="16px" mb={4}>
            {/* You can add description to your entity if needed */}
            {template.templateDescription}
          </Text>

          <HStack spacing={2} mb={4} wrap="wrap">
            {(template.templateAuthors || []).map((author: string) => (
              <Tag key={author} colorScheme="purple">
                {author}
              </Tag>
            ))}
          </HStack>

          <Button
            height="60px"
            fontSize="lg"
            px={8}
            colorScheme="purple"
            mb={2}
            leftIcon={<FaPlus />}
          >
            Use this Template
          </Button>
          <Button height="60px"  fontSize="lg" px={8}  mb={2} ml={5} variant="outline">
            <CiShare2  size={30} />
          </Button>

          <Box mt={6}>
            <Text fontSize="16px" fontWeight="medium" mb={2}>
              Get this template in your inbox
            </Text>
            <HStack>
              <Input
                placeholder="Enter your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                w={400}
                mr={2}
              />
              <Button size="md" onClick={handleSubmit} colorScheme="purple">
                Submit
              </Button>
            </HStack>
          </Box>
        </Box>

        <Box flex="1">
          <Tabs
            mb={2}
            onChange={(index) => setDevice(index === 0 ? 'desktop' : 'mobile')}
            display="flex"
            justifyContent="center"
          >
            <TabList
              display="inline-flex"
              p={1}
              bg="#f2ebfd"
              border="1px solid #ccc"
              rounded="md"
              boxShadow="sm"
            >
              <Tab _selected={{ bg: '#d6c7fb' }} borderRadius="md" fontWeight="bold">
                <Icon as={FaDesktop} boxSize={5} color="purple" />
              </Tab>
              <Tab _selected={{ bg: '#d6c7fb' }} borderRadius="md" fontWeight="bold">
                <Icon as={CiMobile3} boxSize={5} color="purple" />
              </Tab>
            </TabList>
          </Tabs>

          <MotionBox
            key={device}
            style={{
              border: '1px solid #ccc',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '600px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginInline: 'auto',
            }}
            initial={{
              scale: 1,
              opacity: 1,
              width: isMobile ? '100%' : '400px',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              width: isMobile ? '400px' : '100%',
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <Box
              as="iframe"
              srcDoc={template.templateHtml}
              width="100%"
              height="100%"
              border="none"
              title="Email Preview"
            />
          </MotionBox>
        </Box>
      </Box>
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

export default function PrebuiltTemplate() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PrebuiltTemplateContent />
    </Suspense>
  );
}
