import {
  Box,
  Heading,
  Card as ChakraCard,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import type { PanInfo } from 'framer-motion';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { memo, useCallback, useMemo, useState } from 'react';
import { LiaInfoSolid } from 'react-icons/lia';

import { FeaturesList } from '~/lib/components/FeaturesList';
import { ProfileCard } from '~/lib/components/ProfileCard';
import type { TUserCardData } from '~/types';

export const Card = memo(
  ({
    data,
    active,
    removeCard,
    pickedDir,
  }: {
    image: string;
    active: boolean;
    pickedDir: string;
    data: TUserCardData;
    removeCard: (id: number, dir: string) => void;
  }) => {
    const [exitX, setExitX] = useState<null | number>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const [direction, setDirection] = useState<'left' | 'right' | null>(null);
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-25, 25]);
    const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

    const textLabel = `${data.name}, ${data.age}`;
    const color = isDetailsOpen ? '#000000' : '#ffffff';

    const boxShadow = useMemo(() => {
      if (direction === 'right') {
        return '0px 4px 27px 8px rgba(4, 238, 124, 0.2)';
      }

      if (direction === 'left') {
        return '0px 4px 27px 8px rgba(238, 4, 4, 0.2)';
      }

      return '';
    }, [direction]);

    const exitXMemo = useMemo(() => {
      if (exitX !== null) {
        return exitX;
      }

      return pickedDir === 'right' ? 200 : -200;
    }, [exitX, pickedDir]);

    const dragEnd = useCallback(
      (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 100) {
          setExitX(200);
          removeCard(data.id, 'right');
        } else if (info.offset.x < -100) {
          setExitX(-200);
          removeCard(data.id, 'left');
        }

        setDirection(null);
      },
      [data.id, removeCard]
    );

    const drag = useCallback(
      (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 0) {
          setDirection('right');
        } else if (info.offset.x < 0) {
          setDirection('left');
        }
      },
      [setDirection]
    );

    const toggleOpen = () => {
      setIsDetailsOpen((prevState) => !prevState);
    };

    const closeProfileCard = () => {
      setIsDetailsOpen(false);
    };

    return active ? (
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragEnd={dragEnd}
        onDrag={drag}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{
          scale: 1.05,
          opacity: 1,
        }}
        style={{
          x,
          rotate,
          opacity,
          width: '400px',
          height: '600px',
          left: 'calc(100% / 2 - 400px / 2)',
          top: '60px',
          position: 'absolute',
          zIndex: 20,
        }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
        whileDrag={{ cursor: 'grabbing' }}
        exit={{
          x: exitXMemo,
          opacity: 0,
        }}
      >
        <ChakraCard
          style={{
            boxShadow,
          }}
          overflow="hidden"
          borderRadius={16}
          height="100%"
          position="relative"
        >
          <Box
            height="100%"
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            top={0}
            backgroundPosition="top center"
            backgroundImage={data.image}
            backgroundSize="cover"
          />
          {isDetailsOpen ? (
            <motion.div
              style={{
                height: '100%',
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
              }}
              initial={{
                top: 1000,
              }}
              animate={{
                top: 0,
              }}
              exit={{
                scale: 0.8,
              }}
            >
              <ProfileCard onClose={closeProfileCard} data={data} />
            </motion.div>
          ) : (
            <Box
              zIndex={20}
              marginTop="auto"
              color={color}
              px={4}
              py={4}
              position="relative"
            >
              <Box>
                <Flex color={color} alignItems="center" gap={2}>
                  <Heading size="lg">{textLabel}</Heading>
                  <IconButton
                    isRound
                    size="xs"
                    colorScheme="pink"
                    aria-label="Like"
                    fontSize="20px"
                    onClick={toggleOpen}
                    icon={<LiaInfoSolid size="16" />}
                  />
                </Flex>

                <Heading color={color} size="sm" mt={2}>
                  {data.desc}
                </Heading>

                {data.features && <FeaturesList features={data.features}/>}
              </Box>
            </Box>
          )}
        </ChakraCard>
      </motion.div>
    ) : null;
  }
);
