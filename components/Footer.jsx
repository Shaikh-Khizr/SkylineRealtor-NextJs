import Link from 'next/link';
import { Flex, Box, Text } from '@chakra-ui/react';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        <Text>{new Date().getFullYear()} Skyline Realtor, Inc.</Text>
        <Flex alignItems="center" justifyContent="center">
            <Text paddingRight="1">Created By</Text>
            <Link href="https://khizr-portfolio.netlify.app/" passHref>
                <a target="_blank">
                    <Text fontSize="lg" color="blue.500">Khizr AA Shaikh</Text>
                </a>
            </Link>
        </Flex>
        <Flex marginTop="1" alignItems="center" justifyContent="center">
                <Link href="https://twitter.com/ShaikhKhizr/" passHref>
                    <a target="_blank">
                        <Text padding="1" fontSize="lg" color="blue.500"><BsTwitter /></Text>
                    </a>
                </Link>
                <Link href="https://www.facebook.com/khizr.shaikh.14/" passHref>
                    <a target="_blank">
                        <Text padding="1" fontSize="lg" color="blue.500"><BsFacebook /></Text>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/shaikh_khizr/" passHref>
                    <a target="_blank">
                        <Text padding="1" fontSize="lg" color="blue.500"><BsInstagram /></Text>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/khizraashaikh/" passHref>
                    <a target="_blank">
                        <Text padding="1" fontSize="lg" color="blue.500"><BsLinkedin /></Text>
                    </a>
                </Link>
                <Link href="https://github.com/Shaikh-Khizr/" passHref>
                    <a target="_blank">
                        <Text padding="1" fontSize="lg" color="blue.500"><BsGithub /></Text>
                    </a>
                </Link>
            </Flex>
    </Box>
);

export default Footer;