"use client";

import { Stack } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
