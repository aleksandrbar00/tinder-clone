import {
  Avatar,
  Card,
  CardBody,
  CloseButton,
  Text,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/react';
import type { FC } from 'react';

import { FeaturesList } from '~/lib/components/FeaturesList';
import type { TUserCardData } from '~/types';

type TProps = {
  data: TUserCardData;
  onClose: () => void;
};

export const ProfileCard: FC<TProps> = ({ data, onClose }) => {
  const name = `${data.name}, ${data.age}`;

  return (
    <Card minHeight="100%">
      <CardBody position="relative">
        <CloseButton
          borderRadius="50%"
          right={4}
          top={4}
          onClick={onClose}
          position="absolute"
        />
        <Flex mt={8} justifyContent="center">
          <Avatar size="2xl" src={data.image} />
        </Flex>

        <Heading textAlign="center" size="lg" mt={6}>
          {name}
        </Heading>

        {data.features && <>
            <Divider mt={4} mb={4}/>
            <FeaturesList features={data.features}/>
        </>}

        <Divider mt={4} mb={4} />

        <Text mt={4}>{data.desc}</Text>
      </CardBody>
    </Card>
  );
};
