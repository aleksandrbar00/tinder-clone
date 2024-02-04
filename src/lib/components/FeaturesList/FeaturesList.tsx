import { Box, List, ListItem } from '@chakra-ui/react';
import type { FC } from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { SlLocationPin } from 'react-icons/sl';

type TFeatureType = 'born' | 'education' | 'location';

type TFeaturesListProps = {
  features: Array<{
    type: TFeatureType;
    label: string;
  }>;
};

const getFeatureIcon = (type: TFeatureType) => {
  switch (type) {
    case 'born':
      return <BiBuildingHouse />;
    case 'education':
      return <HiOutlineBuildingLibrary />;
    case 'location':
    default:
      return <SlLocationPin />;
  }
};

export const FeaturesList: FC<TFeaturesListProps> = ({ features }) => {
  return (
    <Box>
      <List spacing={2}>
        {features.map((feature) => (
          <ListItem key={feature.type} display="flex" alignItems="center" gap={1}>
            {getFeatureIcon(feature.type)}
            {feature.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
