import { Flex, IconButton } from '@chakra-ui/react';
import type { FC } from 'react';
import { useMemo } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';

type TDeckActionsProps = {
  onLike: () => void;
  onDislike: () => void;
  onFavorite: () => void;
};

export const DeckActions: FC<TDeckActionsProps> = ({
  onDislike,
  onFavorite,
  onLike,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={2}>
      <IconButton
        isRound
        size="lg"
        variant="outline"
        colorScheme="pink"
        aria-label="Like"
        onClick={onLike}
        fontSize="20px"
        icon={<AiOutlineLike />}
      />

      <IconButton
        isRound
        size="lg"
        variant="outline"
        colorScheme="pink"
        aria-label="Favorite"
        onClick={onFavorite}
        fontSize="20px"
        icon={<CiStar />}
      />

      <IconButton
        isRound
        size="lg"
        variant="outline"
        colorScheme="pink"
        aria-label="Dislike"
        onClick={onDislike}
        fontSize="20px"
        icon={<AiOutlineDislike />}
      />
    </Flex>
  );
};
