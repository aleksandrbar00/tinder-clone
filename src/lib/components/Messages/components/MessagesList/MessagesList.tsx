import { Divider, List, ListItem } from '@chakra-ui/react';

import { MessagePreviewCard } from '~/lib/components/Messages/components/MessagePreviewCard';

export const MessagesList = () => {
  return (
    <List>
      <ListItem>
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard isChecked />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard isChecked />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
        <MessagePreviewCard />
        <Divider />
      </ListItem>
    </List>
  );
};
