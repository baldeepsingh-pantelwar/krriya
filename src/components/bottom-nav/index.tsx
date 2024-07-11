"use client";

import { OlympicRingsIcon } from "@/icons/olympic-rings.icon";
import { Paris2024OlympicIcon } from "@/icons/paris-2024-olympic.icon";
import { Paris2024TextIcon } from "@/icons/paris-2024-text.icon";
import { StoriesIcon } from "@/icons/stories.icon";
import { Top10Icon } from "@/icons/top-10.icon";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

export const BottomNav = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        display: "flex",
        height: "85px",
      }}
    >
      <TabIcon icon={<Top10Icon />} label="Top 10" href="/home/top-10" />
      <CenterIcon href="/home/paris-2024" />
      <TabIcon icon={<StoriesIcon />} label="Stories" href="/home/stories" />
    </Box>
  );
};

const TabIcon = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: JSX.Element;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const selected = pathname === href;

  return (
    <Box
      onClick={() => router.push(href)}
      sx={{
        flex: 1,
        bgcolor: "grey.800",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          width: 90,
          height: "100%",
          borderTop: "4px solid",
          transition: "all 0.3s ease-out",
          borderColor: selected ? "primary.light" : "transparent",
          background: selected
            ? (theme) =>
                `linear-gradient(180deg, ${theme.palette.primary.light}33 0%, rgba(241, 41, 87, 0) 100%)`
            : "transparent",
          color: selected ? "primary.light" : "text.secondary",
        }}
      >
        {icon}
        <Typography
          variant="subtitle2"
          sx={{
            textTransform: "uppercase",
            color: selected ? "text.primary" : "text.secondary",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

const CenterIcon = ({ href }: { href: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef(0);
  const selected = pathname === href;

  return (
    <Box
      onClick={() => {
        ref.current++;
        router.push(href);
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 110,
          height: "85px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          pb: 1.5,
          overflow: "hidden",
          color: selected ? "text.primary" : "text.secondary",
          background: (theme) =>
            `radial-gradient(circle at 50% 0%, ${theme.palette.background.default} 23%, ${theme.palette.grey[800]} 24%)`,
          "&:after": {
            content: "''",
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "100%",
            width: 110,
            height: 110,
            background: selected
              ? (theme) =>
                  `radial-gradient(circle at 50% 45%, ${theme.palette.background.default} 62%, ${theme.palette.primary.light} 70%)`
              : (theme) => theme.palette.background.default,
          },
          "&:before": {
            content: "''",
            position: "absolute",
            display: selected ? "block" : "none",
            top: "50%",
            opacity: 0.2,
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: (theme) =>
              `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 100%)`,
            width: 140,
            height: 140,
          },
        }}
      >
        <Paris2024TextIcon />
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "6px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack
          component={motion.div}
          key={ref.current}
          animate={{
            scale: [1, 1.05, 1],
          }}
          sx={{
            height: "82px",
            width: "82px",
            bgcolor: "primary.light",
            boxShadow: 1,
            borderRadius: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "background.default",
          }}
        >
          <Paris2024OlympicIcon sx={{ transform: "scale(0.8)" }} />
          <OlympicRingsIcon sx={{ transform: "scale(0.8)" }} />
        </Stack>
      </Box>
    </Box>
  );
};
