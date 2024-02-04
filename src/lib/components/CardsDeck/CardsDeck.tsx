// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FcDislike, FcLike } from 'react-icons/fc';

import { Counter } from '~/lib/components/CardsDeck/components/Counter';
import { DeckActions } from '~/lib/components/CardsDeck/components/DeckActions/DeckActions';
import { data } from '~/lib/components/CardsDeck/data';

import { Card } from './components/Card';

export const CardsDeck = () => {
  const [cards, setCards] = useState<any[]>(data);
  const [pickedDir, setPickedDir] = useState<string>('');
  const [totalMatches, setTotalMatches] = useState(0);
  const [totalMissmatches, setTotalMissmatches] = useState(0);

  const addMatches = () => {
    setTotalMatches((prev) => prev + 1);
  };

  const addMissmatches = () => {
    setTotalMissmatches((prev) => prev + 1);
  };

  const activeIndex = cards.length - 1;

  const removeCard = (id: number, action: 'right' | 'left') => {
    setCards((prev) => prev.filter((card) => card.id !== id));

    if (action === 'left') {
      addMissmatches();
    }

    if (action === 'right') {
      addMatches();
    }
  };

  const onLike = () => {
    if (activeIndex) {
      setPickedDir('right');
      queueMicrotask(() => {
        removeCard(cards[activeIndex].id, 'right');
      });
    }
  };

  const onDislike = () => {
    if (activeIndex) {
      setPickedDir('left');
      queueMicrotask(() => {
        removeCard(cards[activeIndex].id, 'left');
      });
    }
  };

  const onFavorite = () => {
    console.log('favorite');
  };

  return (
    <Box width="100%" height="400px" position="relative">
      <Box position="relative" height="700px">
        <Flex
          gap={2}
          alignItems="center"
          position="absolute"
          left={4}
          top="50%"
        >
          <Counter to={totalMissmatches} />
          <FcDislike fontSize="40px" />
        </Flex>
        <Flex
          gap={2}
          alignItems="center"
          position="absolute"
          right={4}
          top="50%"
        >
          <Counter to={totalMatches} />
          <FcLike fontSize="40px" />
        </Flex>
        <AnimatePresence>
          {cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              pickedDir={pickedDir}
              active={card.id === activeIndex}
              removeCard={removeCard}
            />
          ))}
        </AnimatePresence>
      </Box>
      <DeckActions
        onLike={onLike}
        onFavorite={onFavorite}
        onDislike={onDislike}
      />
    </Box>
  );
};
