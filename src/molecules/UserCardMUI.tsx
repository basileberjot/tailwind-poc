import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";
import React from "react";
import { User } from "../App";

const StyledCard = styled(Card)(() => ({
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "1rem",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  borderRadius: "10px",
}));

const StyledH2 = styled("h2")(() => ({
  fontSize: "1.5rem",
  fontWeight: "500",
  marginBottom: "1rem",
}));

const StyledP = styled("p")(() => ({
  fontSize: "1rem",
  lineHeight: "1.5",
}));

interface Props {
  user: User;
}

function UserCardMUI({ user }: Props) {
  return (
    <StyledCard>
      <CardContent>
        <StyledH2>Name of this user: </StyledH2>
        <StyledP>{user.name}</StyledP>
      </CardContent>
    </StyledCard>
  );
}
export default UserCardMUI;
