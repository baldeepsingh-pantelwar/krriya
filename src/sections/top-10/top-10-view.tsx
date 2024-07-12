"use client";

import { AvatarIcon } from "@/icons/avatar.icon";
import { Top10Athletes } from "@/sections/top-10/athletes";
import { Top10Teams } from "@/sections/top-10/teams";
import { secondaryFont } from "@/theme";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

export const Top10View = () => {
  return (
    <Stack sx={{ pb: "150px" }}>
      <Container>
        <Box sx={{ display: "flex", py: 3, justifyContent: "space-between" }}>
          <Stack gap={1}>
            <Typography
              sx={{
                fontFamily: secondaryFont.style.fontFamily,
              }}
              variant="h1"
            >
              TOP
              <Typography
                component="span"
                sx={{
                  font: "inherit",
                  ml: 1.5,
                  background:
                    "linear-gradient(180deg, #F54641 0%, #950804 77.5%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "2px white",
                }}
              >
                10
              </Typography>
            </Typography>
            <Typography variant="body2" color="grey.200">
              Moments and Figures That Defined the Olympics
            </Typography>
          </Stack>
          <IconButton sx={{ height: "fit-content" }}>
            <AvatarIcon />
          </IconButton>
        </Box>
      </Container>
      <Container>
        <Typography
          variant="h5"
          sx={{ fontFamily: secondaryFont.style.fontFamily }}
        >
          Athletes
        </Typography>
      </Container>
      <Top10Athletes />
      <Container>
        <Typography
          variant="h5"
          sx={{ fontFamily: secondaryFont.style.fontFamily }}
        >
          Teams
        </Typography>
      </Container>
      <Top10Teams />
    </Stack>
  );
};
