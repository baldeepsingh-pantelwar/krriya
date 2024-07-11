"use client";

import { AvatarIcon } from "@/icons/avatar.icon";
import { Top10Athletes } from "@/sections/top-10/athletes";
import { secondaryFont } from "@/theme";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

export default function Top10Page() {
  return (
    <Stack>
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
      <Box>
        <Container>
          <Typography
            variant="h5"
            sx={{ fontFamily: secondaryFont.style.fontFamily }}
          >
            Athletes
          </Typography>
        </Container>
        <Top10Athletes />
      </Box>
    </Stack>
  );
}
