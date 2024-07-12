import { Img } from "@/components/img";
import { Box, Stack, Typography } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const events = [
  {
    name: "wimbledon",
    description: "the only Grand Slam event still played on grass courts",
    image: "/images/events/wimbledon.png",
    icon: "/images/sports/wimbledon.png",
  },
  {
    name: "fifa world cup",
    description: "the only Grand Slam event still played on grass courts",
    image: "/images/events/fifa.png",
    icon: "/images/sports/football.png",
  },
  {
    name: "super bowl",
    description: "the only Grand Slam event still played on grass courts",
    image: "/images/events/superbowl.png",
    icon: "/images/sports/rugby.png",
  },
];

type Event = (typeof events)[number];

const DRAG_BUFFER = 25;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

export const Top10Events = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < events.length - 1) {
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
          translateX: `calc(-${imgIndex * 390}px - ${imgIndex * 16}px)`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {events.map((event, idx) => (
          <EventCard key={event.name} event={event} idx={idx} />
        ))}
      </Box>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </Box>
  );
};

const EventCard = ({ event, idx }: { event: Event; idx: number }) => {
  return (
    <Box
      component={motion.div}
      sx={{
        minWidth: 390,
        height: 186,
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
    >
      <Stack sx={{ gap: 1, justifyContent: "space-around", height: "100%" }}>
        <Stack sx={{ gap: 1 }}>
          <Img sx={{ width: 22, height: 22 }} src={event.icon} />
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {event.name}
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
            {event.description}
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "160px",
          background: `url(${event.image})`,
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

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: 0.5,
      }}
    >
      {events.map((_, idx) => {
        return (
          <Box
            key={idx}
            onClick={() => setImgIndex(idx)}
            sx={{
              height: idx === imgIndex ? 6 : 5,
              width: idx === imgIndex ? 6 : 5,
              borderRadius: "100%",
              transition: "all 0.3s ease-out",
              bgcolor: idx === imgIndex ? "grey.50" : "grey.300",
            }}
          />
        );
      })}
    </Box>
  );
};
