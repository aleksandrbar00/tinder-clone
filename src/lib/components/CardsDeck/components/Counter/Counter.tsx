import { Box } from '@chakra-ui/react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

type TCounterProps = {
  to: number;
};

export const Counter: FC<TCounterProps> = ({ to }) => {
  const count = useMotionValue(to);
  const rounded = useTransform(count, Math.round);
  const prevVal = useRef<number | null>(null);

  useEffect(() => {
    const controls = animate(count, to, { duration: 0.4 });

    prevVal.current = to;

    return controls.stop;
  }, [count, to]);

  return (
    <Box fontWeight="bold" fontSize="52px">
      <motion.div>{rounded}</motion.div>
    </Box>
  );
};
