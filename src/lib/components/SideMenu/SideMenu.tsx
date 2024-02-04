import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { CiLogout, CiSettings } from 'react-icons/ci';

import { data } from '~/lib/components/CardsDeck/data';
import { MatchList } from '~/lib/components/MatchList';
import { MessagesList } from '~/lib/components/Messages/components/MessagesList';

export const SideMenu = () => {
  return (
    <Card
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      py={4}
      width="300px"
      borderRadius={12}
    >
      <Tabs variant="soft-rounded" colorScheme="pink">
        <TabList px={4}>
          <Tab>Пары</Tab>
          <Tab>Сообщения</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MatchList matches={data} />
          </TabPanel>
          <TabPanel px={0}>
            <MessagesList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};
