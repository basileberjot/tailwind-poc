import React from "react";
import { User } from "../App";

interface Props {
  user: User;
}

function UserCardTailwind({ user }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <h2 className="text-lg font-medium">Name of this user: </h2>
      <p className="text-sm leading-normal mt-2">{user.name}</p>
    </div>
  );
}

export default UserCardTailwind;
