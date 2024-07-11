import { Link } from "@/components/link";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const teams = [
  {
    name: "montreal canadians",
    medals: 32,
    games: 32,
    image: "/images/teams/montreal-canadians.png",
  },
  {
    name: "manchester united",
    medals: 24,
    games: 18,
    image: "/images/teams/manchester-united.png",
  },
  {
    name: "great britain",
    medals: 20,
    games: 34,
    image: "/images/teams/great-britain.png",
  },
  {
    name: "moscow bears",
    medals: 32,
    games: 32,
    image: "/images/teams/moscow-bears.png",
  },
];

type Team = (typeof teams)[number];

const DRAG_BUFFER = 25;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

export const Top10Teams = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < teams.length - 1) {
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
          py: 3,
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
          translateX: `calc(-${imgIndex * 185}px - ${imgIndex * 16}px)`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {teams.map((team, idx) => (
          <TeamCard key={team.name} team={team} idx={idx} />
        ))}
      </Box>
    </Box>
  );
};

const TeamCard = ({ team, idx }: { team: Team; idx: number }) => {
  return (
    <Stack
      component={motion.div}
      sx={{
        justifyContent: "space-around",
        minWidth: 185,
        height: 250,
        mr: 2,
        ml: idx === 0 ? 2 : 0,
        px: 2.5,
        pt: 6,
        pb: 3,
        bgcolor: "grey.700",
        position: "relative",
        textAlign: "center",
        background: (theme) =>
          `radial-gradient(circle at 50% 0%, ${theme.palette.background.default} 16%, ${theme.palette.grey[700]} 17%)`,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          px: 3,
        }}
      >
        {team.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Stack sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Medals
          </Typography>
          <Typography fontWeight={700}>{team.medals}</Typography>
        </Stack>
        <Divider
          orientation="vertical"
          sx={{ height: "25px", borderWidth: "1px" }}
        />
        <Stack sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Games
          </Typography>
          <Typography fontWeight={700}>{team.games}</Typography>
        </Stack>
      </Box>
      <Link href="/home/top-10">Read more</Link>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          transform: "translate(0%, -50%)",
          height: "100%",
          width: "100%",
          background: `url(${team.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
    </Stack>
  );
};
