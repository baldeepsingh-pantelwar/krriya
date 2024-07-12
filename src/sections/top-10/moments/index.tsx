import { Img } from "@/components/img";
import { Box, Stack, Typography } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const moments = [
  {
    name: "dunk short",
    athlete: "michael jordan",
    image: "/images/moments/michael-jordan.png",
  },
  {
    name: "chest-thumping victory",
    athlete: "usian bolt",
    image: "/images/moments/usian-bolt.png",
  },
];

type Moment = (typeof moments)[number];

const DRAG_BUFFER = 25;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

export const Top10Moments = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < moments.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", py: 3 }}>
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
          translateX: `calc(-${imgIndex * 317}px - ${imgIndex * 32}px)`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {moments.map((moment, idx) => (
          <MomentCard key={moment.name} moment={moment} idx={idx} />
        ))}
      </Box>
    </Box>
  );
};

const MomentCard = ({ moment, idx }: { moment: Moment; idx: number }) => {
  return (
    <Box
      component={motion.div}
      sx={{
        minWidth: 317,
        height: 203,
        mr: 4,
        ml: idx === 0 ? 5 : 0,
        bgcolor: "grey.700",
        backgroundImage: "url(/images/assets/card-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <Img
          sx={{
            width: "102px",
            height: "183px",
            objectFit: "cover",
            position: "absolute",
            transform: "scale(1.2)",
            left: -10,
            top: 0,
          }}
          src={moment.image}
        />
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            p: 4,
            pl: "142px",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "32px",
            }}
          >
            {moment.athlete}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: "32px",
            }}
          >
            {moment.name}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
