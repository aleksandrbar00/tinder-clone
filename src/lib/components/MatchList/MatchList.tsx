import { Avatar, Flex, Heading } from '@chakra-ui/react';
import type { FC } from 'react';

import type { TUserCardData } from '~/types';

type TMatchListProps = {
  matches: Array<TUserCardData>;
};

export const MatchList: FC<TMatchListProps> = ({ matches }) => {
  return (
    <Flex py={4} gap={3} justifyContent="space-between" flexWrap="wrap">
      {matches.map((match) => (
        <Flex
          flex={0.3}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar src={match.image} size="lg" />
          <Heading textAlign="center" mt={2} noOfLines={2} size="xs">
            {match.name}
          </Heading>
        </Flex>
      ))}
    </Flex>
  );
};
