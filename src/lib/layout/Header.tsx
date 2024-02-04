import {Avatar, Box, Flex} from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Flex gap={2} alignItems="center" marginLeft="auto">
        <ThemeToggle />
        <Avatar />
      </Flex>
    </Flex>
  );
};

export default Header;
