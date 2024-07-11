import { Box, Stack, Typography } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const athletes = [
  {
    sport: "basketball",
    name: "michael jordan",
    description:
      "is an American businessman and former professional basketball player...",
    rank: 1,
    medals: 32,
    image: "/images/athletes/michael-jordan.png",
  },
  {
    sport: "boxing",
    name: "muhammad ali",
    description: "was an American professional boxer and activist...",
    rank: 2,
    medals: 24,
    image: "/images/athletes/muhammad-ali.png",
  },
  {
    sport: "hockey",
    name: "wayne gretzky",
    description:
      "is a Canadian former professional ice hockey player and former...",
    rank: 3,
    medals: 18,
    image: "/images/athletes/wayne-gretzky.png",
  },
  {
    sport: "football",
    name: "usian bolt",
    description: "is a Portuguese professional footballer who plays as...",
    rank: 2,
    medals: 16,
    image: "/images/athletes/usian-bolt.png",
  },
];

type Athlete = (typeof athletes)[number];

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

export const Top10Athletes = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < athletes.length - 1) {
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
          translateX: `calc(-${imgIndex * 352}px - ${imgIndex * 16}px)`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {athletes.map((athlete, idx) => (
          <AthleteCard key={athlete.name} athlete={athlete} idx={idx} />
        ))}
      </Box>
    </Box>
  );
};

const AthleteCard = ({ athlete, idx }: { athlete: Athlete; idx: number }) => {
  return (
    <Box
      component={motion.div}
      sx={{
        minWidth: 352,
        height: 244,
        mr: 2,
        ml: idx === 0 ? 2 : 0,
        px: 2.5,
        py: 3,
        bgcolor: "grey.700",
        border: "1px solid",
        borderImage:
          "linear-gradient(114.72deg, #353844 0.9%, rgba(20, 21, 24, 0.3) 36.15%, #141518 89.03%) 1",
        position: "relative",
      }}
      transition={SPRING_OPTIONS}
    >
      <Stack sx={{ gap: 1, justifyContent: "space-around", height: "100%" }}>
        <Stack sx={{ gap: 1 }}>
          <Typography
            variant="caption"
            sx={{ color: "primary.main", textTransform: "uppercase" }}
          >
            {athlete.sport}
          </Typography>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {athlete.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "60%",
              color: "grey.300",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
            }}
          >
            {athlete.description}
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Stack>
            <Typography variant="body2" fontSize={18}>
              #{athlete.rank}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rank
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="body2" fontSize={18}>
              {athlete.medals}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Medals
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "160px",
          background: `url(${athlete.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: "100%",
          right: 0,
          width: "160px",
          background:
            "linear-gradient(90deg, #13161B 13.44%, rgba(19, 22, 27, 0.2) 41.61%, rgba(19, 22, 27, 0) 95.7%)",
        }}
      />
    </Box>
  );
};
