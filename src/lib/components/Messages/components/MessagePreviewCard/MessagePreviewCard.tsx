import { Avatar, Text, Box, Flex, Heading } from '@chakra-ui/react';
import type { FC } from 'react';

type TMessagePreviewCardProps = {
  isChecked: boolean;
};

export const MessagePreviewCard: FC<TMessagePreviewCardProps> = ({
  isChecked,
}) => {
  return (
    <Flex backgroundColor={isChecked && 'blackAlpha.50'} px={4} py={4} gap={2}>
      <Box>
        <Avatar />
      </Box>

      <Box>
        <Heading size="xs">Test Fhuiok</Heading>
        <Text mt={1} noOfLines={1}>
          Hello, mate!
        </Text>
      </Box>
    </Flex>
  );
};
