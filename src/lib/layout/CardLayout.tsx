import { Card, CardBody, CardHeader, Flex, Heading } from '@chakra-ui/react';
import type { FC, PropsWithChildren } from 'react';

type TCardLayoutProps = {
  showSideBar: boolean;
  title?: string;
};

export const CardLayout: FC<PropsWithChildren<TCardLayoutProps>> = ({
  children,
  showSideBar,
  title,
}) => {
  return (
    <Flex py={12} minHeight="100vh" justifyContent="center">
      {showSideBar && <div>Sidebar</div>}
      <Card borderRadius={20} width="500px" height="600px">
        {title && (
          <CardHeader>
            <Heading size="md">{title}</Heading>
          </CardHeader>
        )}
        <CardBody>{children}</CardBody>
      </Card>
    </Flex>
  );
};
