import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

const User = ({ username, fullName, avatar, firebase }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <div className="flex">
      <Link
        to={`/p/${username}`}
        className="grid grid-cols-4 gap-4 mb-6 items-center"
      >
        <div className="flex items-center justify-between col-span-1">
          <img
            className="rounded-full h-full aspect-square"
            src={avatar}
            alt=""
          />
        </div>
        <div className="col-span-3">
          <p className="font-bold text-sm">{username}</p>
          <p className="text-sm">{fullName}</p>
        </div>
      </Link>
      <div className="col-span-1">
        <button
          type="button"
          title="Sign Out"
          onClick={() => firebase.auth().signOut()}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              firebase.auth().signOut();
            }
          }}
          className="text-xs font-bold text-blue-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );

export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
