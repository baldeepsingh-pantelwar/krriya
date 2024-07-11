import { OlympicRingsIcon } from "@/icons/olympic-rings.icon";
import { Paris2024TextIcon } from "@/icons/paris-2024-text.icon";
import { Stack } from "@mui/material";

export default function Paris2024Page() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.secondary",
          gap: 2,
          py: 5,
          background: "url(/images/assets/bg-lights.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          mixBlendMode: "luminosity",
        }}
      >
        <OlympicRingsIcon />
        <Paris2024TextIcon />
      </Stack>
    </>
  );
}
