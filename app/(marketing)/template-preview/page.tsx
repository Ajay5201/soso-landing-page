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
import { useEffect, useState } from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CiMobile3 } from 'react-icons/ci';
import { FaDesktop } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import axiosInstance from 'utils/axiosInstance';

const MotionBox = motion.div;

export default function TemplatePreview() {
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
        <Box flex="1" pt={20}>
          <Heading as="h1" size="lg" mb={3}>
            {template.templateName}
          </Heading>
          <Text mb={4}>
            {/* You can add description to your entity if needed */}
            A ready-to-use email template to boost engagement.
          </Text>

          <HStack spacing={2} mb={4} wrap="wrap">
            {(template.templateAuthors || []).map((author: string) => (
              <Tag key={author} colorScheme="purple">
                {author}
              </Tag>
            ))}
          </HStack>

          <Button colorScheme="purple" mb={2}>
            + Use this Template
          </Button>
          <Button mb={2} ml={5} variant="outline">
            Share
          </Button>

          <Box mt={6}>
            <Text fontWeight="medium" mb={2}>
              Get this template in your inbox
            </Text>
            <HStack>
              <Input
                placeholder="Enter your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                w={250}
              />
              <Button onClick={handleSubmit} colorScheme="purple">
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
