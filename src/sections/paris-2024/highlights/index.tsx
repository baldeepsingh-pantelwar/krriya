import { Img } from "@/components/img";
import { Box, Stack } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    image: "/images/highlights/highlight-1.png",
  },
  {
    image: "/images/highlights/highlight-2.png",
  },
  {
    image: "/images/highlights/highlight-3.png",
  },
  {
    image: "/images/highlights/highlight-4.png",
  },
  {
    image: "/images/highlights/highlight-3.png",
  },
  {
    image: "/images/highlights/highlight-4.png",
  },
];

type Highlight = (typeof highlights)[number];

const DRAG_BUFFER = 25;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 1000,
  damping: 100,
};

export const Highlights = () => {
  const dragX = useMotionValue(0);
  const [imgIndex, setImgIndex] = useState(0);

  const onDragEnd = () => {
    const x = dragX.get();

    const capacity = Math.floor(screen.width / 85) - 1;

    const offset = Math.abs(Math.floor(x / 85));

    if (x <= -DRAG_BUFFER && imgIndex < highlights.length - capacity) {
      setImgIndex((pv) => Math.min(highlights.length - capacity, pv + offset));
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => Math.max(0, pv - offset));
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        component={motion.div}
        sx={{
          display: "flex",
          cursor: "grab",
          alignItems: "center",
          "&:active": { cursor: "grabbing" },
        }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `calc(-${imgIndex * 85}px - ${imgIndex * 16}px)`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {highlights.map((highlight, idx) => (
          <HighlightCard key={idx} highlight={highlight} idx={idx} />
        ))}
      </Box>
    </Box>
  );
};

const HighlightCard = ({
  highlight,
  idx,
}: {
  highlight: Highlight;
  idx: number;
}) => {
  return (
    <Stack
      component={motion.div}
      sx={{
        width: 85,
        height: 85,
        mr: 2,
        ml: idx === 0 ? 2 : 0,
        alignItems: "center",
        justifyContent: "center",
        background:
          idx % 2 === 0
            ? "linear-gradient(180deg, #FF2356 0%, #000000 100%)"
            : "linear-gradient(180deg, #000000 0%, #FF2356 100%)",
        borderRadius: "200px",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          borderRadius: "100%",
          width: 82,
          height: 82,
        }}
      >
        <Img sx={{ width: 75, height: 75 }} src={highlight.image} />
      </Stack>
    </Stack>
  );
};
