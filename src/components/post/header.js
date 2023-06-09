import { Link } from "react-router-dom";

export default function Header({ username, avatarSrc }) {
  return (
    <div className="flex border-b border-gray-primary h-4 py-8">
      <div className="flex items-center pl-2">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={avatarSrc}
            alt=""
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}
