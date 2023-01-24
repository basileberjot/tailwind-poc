import { User } from "../App";
import UserCardMUI from "../molecules/UserCardMUI";
import UserCardTailwind from "../molecules/UserCardTailwind";

interface Props {
  users: User[];
}
const UsersSection = ({ users }: Props) => {
  return (
    <>
      <div className="pt-20">
        <h4 className="flex justify-center">Styled with MUI</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-5 gap-y-3">
          {users.map((user) => (
            <UserCardMUI user={user} key={user.name} />
          ))}
        </div>
      </div>
      <div className="pt-20">
        <h4 className="flex justify-center">Styled with Tailwind</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-5 gap-y-3">
          {users.map((user) => (
            <UserCardTailwind user={user} key={user.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersSection;
