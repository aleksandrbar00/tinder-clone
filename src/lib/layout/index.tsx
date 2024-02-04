import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { SideMenu } from '~/lib/components/SideMenu/SideMenu';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1200} transition="0.5s ease-out">
      <Meta />
      <Flex flexDirection="column" margin="8" minHeight="90vh">
        <Header />
        <Box
          display="flex"
          position="relative"
          flex={1}
          width="full"
          as="main"
          marginY={22}
        >
          <SideMenu />
          <Box flex={1}>{children}</Box>
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
