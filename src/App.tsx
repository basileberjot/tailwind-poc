import Header from "./organisms/Header";
import Sidebar from "./organisms/Sidebar";
import UsersPage from "./pages/UsersPage";

export type User = {
  name: string;
};

const mockUsers: User[] = [
  { name: "Jace Mclaughlin" },
  { name: "Briley Rhodes" },
  { name: "Bethany Warner" },
  { name: "Bo Best" },
  { name: "Jordyn Morris" },
];

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <Sidebar />
          <UsersPage users={mockUsers} />
        </div>
      </div>
    </>
  );
}

export default App;
