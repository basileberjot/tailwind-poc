import { Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 bg-zeals-blue">
      <div className="h-full">
        {/* MUI overrides Tailwind */}
        <Typography
          variant="h1"
          className="text-white text-1xl font-medium flex items-center justify-center h-full"
        >
          Header
        </Typography>
      </div>
    </header>
  );
};

export default Header;
