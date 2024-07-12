import { Img } from "@/components/img";
import { Box, Stack, Typography } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const stadiums = [
  {
    name: "beijing national stadium",
    description:
      "The Maracanã Stadium, officially named Estádio Jornalista Mário ...",
    image: "/images/stadiums/beijing-national-stadium.png",
    flag: "/images/flags/cn.png",
  },
  {
    name: "michigan stadium",
    description:
      "The Maracanã Stadium, officially named Estádio Jornalista Mário ...",
    image: "/images/stadiums/michigan-stadium.png",
    flag: "/images/flags/us.png",
  },
  {
    name: "berlin olympiastadion",
    description:
      "The Maracanã Stadium, officially named Estádio Jornalista Mário ...",
    image: "/images/stadiums/berlin-olympiastadion.png",
    flag: "/images/flags/de.png",
  },
];

type Stadium = (typeof stadiums)[number];

const DRAG_BUFFER = 25;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

export const Top10Stadiums = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < stadiums.length - 1) {
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
          translateX: `calc(-${imgIndex * 355}px - ${imgIndex * 16}px)`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {stadiums.map((stadium, idx) => (
          <StadiumCard key={stadium.name} stadium={stadium} idx={idx} />
        ))}
      </Box>
    </Box>
  );
};

const StadiumCard = ({ stadium, idx }: { stadium: Stadium; idx: number }) => {
  return (
    <Box
      component={motion.div}
      sx={{
        minWidth: 355,
        height: 340,
        mr: 2,
        ml: idx === 0 ? 2 : 0,
        bgcolor: "grey.700",
        border: "1px solid",
        borderImage:
          "linear-gradient(114.72deg, #353844 0.9%, rgba(20, 21, 24, 0.3) 36.15%, #141518 89.03%) 1",
        position: "relative",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <Img
          sx={{
            width: "100%",
            height: 340 - 127,
            objectFit: "cover",
          }}
          src={stadium.image}
        />
        <Img
          sx={{
            width: 46,
            height: 46,
            position: "absolute",
            bottom: 127 - 46 / 2,
            right: 24,
          }}
          src={stadium.flag}
        />
        <Stack
          sx={{
            minHeight: "127px",
            justifyContent: "space-around",
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {stadium.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "grey.300",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
            }}
          >
            {stadium.description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
