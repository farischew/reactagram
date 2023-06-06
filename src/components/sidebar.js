import useUser from "../hooks/use-user";

export default function Sidebar() {
  const {
    user: { fullName, userId, username },
  } = useUser();

  return <div>sidebar</div>;
}
