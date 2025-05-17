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
} from '@chakra-ui/react';
import { useState } from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CiMobile3 } from "react-icons/ci";
import { FaDesktop } from "react-icons/fa";


  
const MotionBox = motion.div;
 

export default function TemplatePreview() {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const isMobile = device === 'mobile';
 

 

  const template = {
    title: 'Free Thanksgiving Sale Email Template',
    description:
      'The power of gratitude is amazing, and we want to help you spread positivity with the Thanksgiving email template. This template is packed with warm colors & charming illustrations that can make a lasting impression in just a few clicks.',
    tags: ['event-email', 'holiday-email', 'activecampaign-emails'],
    htmlContent: `
      <!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#ffffff;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;padding:0px 0px 0px 0px;max-width:600px;background-color:#1f0804"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="padding:20px 20px 20px 20px;text-align:center">
                <img
                  alt="Sample product"
                  src="https://res.cloudinary.com/mailmodo/image/upload/v1696342650/editor/p/2c28dec6-c21c-4385-a91f-96e9a90c404f/0a2ae2d78e6af83ef235c5176270278b_drc0mc.png"
                  width="128"
                  height="31"
                  style="width:128px;height:31px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:0px 0px 0px 0px;text-align:center">
                <img
                  alt="Sample product"
                  src="https://res.cloudinary.com/mailmodo/image/upload/v1696331519/editor/p/2c28dec6-c21c-4385-a91f-96e9a90c404f/cb1a10aff1134d4c861d54d858b7e6d9_ahtxgz.png"
                  width="600"
                  height="182"
                  style="width:600px;height:182px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="border-radius:0;padding:48px 36px 20px 36px">
                <div style="position:relative;display:block;width:100%">
                  <h2
                    style="color:#ffffff;background-color:transparent;font-weight:bold;text-align:center;margin:0;font-style:normal;text-decoration:none;font-size:24px;padding:0px 0px 0px 0px;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Celebrate Juneteenth with Us: Honoring Freedom and Equality
                  </h2>
                  <style>
                    .heading-with-links a {
                        color: inherit;
                    }

                    .heading-with-links {
                        max-width: 100%;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        hyphens: auto;
                    }
                  </style>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="color:#ffffff;font-size:16px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;padding:18px 0px 20px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    As we commemorate Juneteenth, we encourage you to take
                    meaningful actions in support of racial justice. Whether
                    it's attending local Juneteenth events, learning about
                    African American history, or supporting organizations
                    dedicated to equality, your involvement makes a difference.
                    Thank you for being part of our community. Together, we can
                    continue the journey toward a more inclusive and equitable
                    society.
                  </div>
                </div>
                <div style="text-align:left;padding:0px 0px 0px 0px">
                  <a
                    href="https://www.usewaypoint.com"
                    style="color:#FFFFFF;font-size:18px;font-weight:bold;background-color:#f59703;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                    target="_blank"
                    rel="noreferrer"
                    ><span
                      ><!--[if mso
                        ]><i
                          style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                          hidden
                          >&nbsp;</i
                        ><!
                      [endif]--></span
                    ><span>Know more</span
                    ><span
                      ><!--[if mso
                        ]><i
                          style="letter-spacing: 20px;mso-font-width:-100%"
                          hidden
                          >&nbsp;</i
                        ><!
                      [endif]--></span
                    ></a
                  >
                </div>
              </div>
              <div style="height:36px"></div>
              <div style="position:relative;display:block;width:100%">
                <h2
                  style="background-color:transparent;font-weight:bold;margin:0;font-style:normal;text-decoration:none;font-size:24px;padding:16px 36px 16px 36px;outline:none"
                  contenteditable="true"
                  class="heading-with-links"
                >
                  Different ways to commemorate Juneteenth
                </h2>
                <style>
                  .heading-with-links a {
                      color: inherit;
                  }

                  .heading-with-links {
                      max-width: 100%;
                      word-break: break-word;
                      overflow-wrap: break-word;
                      hyphens: auto;
                  }
                </style>
              </div>
              <div style="border-radius:0;padding:20px 36px 20px 36px">
                <div style="padding:0px 0px 0px 0px;text-align:center">
                  <img
                    alt="Sample product"
                    src="https://res.cloudinary.com/mailmodo/image/upload/v1696342500/editor/p/2c28dec6-c21c-4385-a91f-96e9a90c404f/665bd0c7bbaeca6618482032b51483d6_mroyai.png"
                    width="111"
                    height="111"
                    style="width:111px;height:111px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                  />
                </div>
                <div style="position:relative;display:block;width:100%">
                  <h3
                    style="background-color:transparent;font-weight:bold;text-align:center;margin:0;font-style:normal;text-decoration:none;font-size:20px;padding:8px 0px 16px 0px;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Learn the full history
                  </h3>
                  <style>
                    .heading-with-links a {
                        color: inherit;
                    }

                    .heading-with-links {
                        max-width: 100%;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        hyphens: auto;
                    }
                  </style>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:16px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;padding:0px 0px 0px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Start by educating yourself by reading books, articles, or
                    documentaries that explain the significance of the day.
                  </div>
                </div>
              </div>
              <div style="border-radius:0;padding:20px 36px 20px 36px">
                <div style="padding:0px 0px 0px 0px;text-align:center">
                  <img
                    alt="Sample product"
                    src="https://res.cloudinary.com/mailmodo/image/upload/v1696342511/editor/p/2c28dec6-c21c-4385-a91f-96e9a90c404f/90b2137cec6f18a863a2030f790a2277_lkmyuc.png"
                    width="111"
                    height="111"
                    style="width:111px;height:111px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                  />
                </div>
                <div style="position:relative;display:block;width:100%">
                  <h3
                    style="background-color:transparent;font-weight:bold;text-align:center;margin:0;font-style:normal;text-decoration:none;font-size:20px;padding:8px 0px 16px 0px;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Support Black-owned businesses
                  </h3>
                  <style>
                    .heading-with-links a {
                        color: inherit;
                    }

                    .heading-with-links {
                        max-width: 100%;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        hyphens: auto;
                    }
                  </style>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:16px;font-weight:normal;font-style:normal;text-decoration:none;padding:0px 0px 0px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Shop at Black-owned stores, dine at Black-owned restaurants,
                    or purchase products from Black entrepreneurs.
                  </div>
                </div>
              </div>
              <div style="border-radius:0;padding:20px 36px 20px 36px">
                <div style="padding:0px 0px 0px 0px;text-align:center">
                  <img
                    alt="Sample product"
                    src="https://res.cloudinary.com/mailmodo/image/upload/v1696342520/editor/p/2c28dec6-c21c-4385-a91f-96e9a90c404f/d09a1699b554e97eee0ff3d32829db99_gmcu2m.png"
                    width="111"
                    height="111"
                    style="width:111px;height:111px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                  />
                </div>
                <div style="position:relative;display:block;width:100%">
                  <h2
                    style="background-color:transparent;font-weight:bold;text-align:center;margin:0;font-style:normal;text-decoration:none;font-size:24px;padding:8px 0px 16px 0px;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Hello friend
                  </h2>
                  <style>
                    .heading-with-links a {
                        color: inherit;
                    }

                    .heading-with-links {
                        max-width: 100%;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        hyphens: auto;
                    }
                  </style>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:16px;font-weight:normal;font-style:normal;text-decoration:none;text-align:left;padding:0px 0px 0px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Show your support for ongoing efforts toward racial justice
                    and equality and spread word for the same.
                  </div>
                </div>
                <div style="padding:16px 16px 16px 16px">
                  <hr
                    style="width:100%;border:none;border-top:1px solid #CCCCCC"
                  />
                </div>
              </div>
              <div
                style="background-color:#eca82a;border-radius:0;padding:24px 36px 0px 36px"
              >
                <div style="border-radius:0;padding:0px 0px 0px 0px">
                  <div style="position:relative;display:block;width:100%">
                    <h1
                      style="background-color:transparent;font-weight:bold;text-align:center;margin:0;font-style:normal;text-decoration:none;font-size:32px;padding:0px 0px 0px 0px;outline:none"
                      contenteditable="true"
                      class="heading-with-links"
                    >
                      Referral Form
                    </h1>
                    <style>
                      .heading-with-links a {
                          color: inherit;
                      }

                      .heading-with-links {
                          max-width: 100%;
                          word-break: break-word;
                          overflow-wrap: break-word;
                          hyphens: auto;
                      }
                    </style>
                  </div>
                  <div style="padding:0px 0px 12px 0px;margin:0">
                    <p
                      style="font-size:14px;font-weight:bold;text-align:left;margin-bottom:4px;margin-top:0;max-width:100%;word-break:break-word;overflow-wrap:break-word;hyphens:auto"
                    >
                      Full Name<span style="color:red"> *</span>
                    </p>
                    <input
                      style="width:100%;padding:10px;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box"
                      type="text"
                      placeholder="Enter your answer"
                      required=""
                    />
                  </div>
                  <div
                    style="display:flex;flex-direction:column;padding:0px 0px 14px 0px"
                  >
                    <label
                      style="color:#ffffff;font-size:14px;font-weight:bold;margin:0;margin-bottom:4px;max-width:100%;word-break:break-word;overflow-wrap:break-word;hyphens:auto"
                      >Enter a question <span style="color:red">*</span></label
                    ><select
                      style="font-size:14px;width:100%;border:1px solid #ccc;border-radius:4px;padding:10px;outline:none;appearance:none;transition:border-color 0.3s ease, box-shadow 0.3s ease"
                    >
                      <option value="" disabled="" selected="">
                        Select an option
                      </option>
                      <option value="Colleage">Colleage</option>
                      <option value="friend">friend</option>
                      <option value="Relative">Relative</option>
                    </select>
                  </div>
                  <div style="text-align:center;padding:12px 12px 12px 12px">
                    <a
                      href=""
                      style="color:#FFFFFF;font-size:16px;font-weight:bold;background-color:#1f0804;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                      target="_blank"
                      rel="noreferrer"
                      ><span
                        ><!--[if mso
                          ]><i
                            style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                            hidden
                            >&nbsp;</i
                          ><!
                        [endif]--></span
                      ><span>Next Step →</span
                      ><span
                        ><!--[if mso
                          ]><i
                            style="letter-spacing: 20px;mso-font-width:-100%"
                            hidden
                            >&nbsp;</i
                          ><!
                        [endif]--></span
                      ></a
                    >
                  </div>
                </div>
              </div>
              <div style="border-radius:0;padding:21px 21px 16px 21px">
                <div style="padding:0px 0px 10px 0px;text-align:center">
                  <img
                    alt="Sample product"
                    src="https://res.cloudinary.com/mailmodo/image/upload/v1696342663/editor/p/2c28dec6-c21c-4385-a91f-96e9a90c404f/0b1f902550a72aba09a4031c15b7c5e0_c6ntmp.png"
                    width="120"
                    height="29"
                    style="width:120px;height:29px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                  />
                </div>
                <div
                  style="background-color:transparent;padding:10px 0px 10px 0px;display:flex;justify-content:center;gap:52px;flex-wrap:wrap"
                >
                  <div>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram"
                        style="width:23px;height:23px;object-fit:cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png"
                        alt="facebook"
                        style="width:23px;height:23px;object-fit:cover"
                    /></a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                        style="width:23px;height:23px;object-fit:cover"
                    /></a>
                  </div>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;text-align:center;padding:25px 0px 16px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    No.11, 80 Feet Road 4th Block, S.T Bed Bangalore, Karnataka
                    – 560034
                  </div>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;text-align:center;padding:0px 0px 0px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    ⓒ 2020 Your Company Name
                  </div>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:11px;font-weight:normal;font-style:normal;text-decoration:none;text-align:center;padding:10px 10px 10px 10px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    This is an auto-generated email. You received this email
                    because you are subscribed to Your Company Name. If you
                    don't want to hear from us, click here.
                  </div>
                </div>
                <div style="position:relative;display:inline-block;width:100%">
                  <div
                    style="font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;text-align:center;padding:0px 0px 0px 0px;margin:0;outline:none"
                    contenteditable="true"
                    class="heading-with-links"
                  >
                    Need assistance? Visit our help center.
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
    `,
  };

  const handleSubmit = () => {
    if (!email.includes('@')) {
      toast({
        title: 'Please enter a valid email',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Template sent to your inbox!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (

    
     <Container maxW="container.xl" py={20}>
    
        <Box display="flex" flexDir={{ base: 'column', md: 'row' }} p={5} gap={10}>

        <Box flex="1" pt={20}>
            <Heading as='h1' size='lg' mb={3}>{template.title}</Heading>
            <Text mb={4}>{template.description}</Text>

            <HStack spacing={2} mb={4} wrap="wrap">
            {template.tags.map((tag) => (
                <Tag key={tag} colorScheme="purple">
                {tag}
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
              <Tab
                _selected={{ bg: '#d6c7fb' }}
                borderRadius="md"
                fontWeight="bold"
              >
                  <Icon as={FaDesktop} boxSize={5} color="purple" />

                
              </Tab>
              <Tab
                _selected={{ bg: '#d6c7fb' }}
                borderRadius="md"
                fontWeight="bold"
              >
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
                    srcDoc={template.htmlContent}
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
