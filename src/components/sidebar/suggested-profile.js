import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getUserAvatar,
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from "../../services/firebase";

export default function SuggestedProfile({
  spDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function FollowUserHandler() {
    setFollowed(true);

    // Update Current User's Profile
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);

    // Update new follower's profile
    await updateFollowedUserFollowers(spDocId, userId, false);
  }

  const [avatar, setAvatar] = useState();
  useEffect(() => {
    const getAvatar = async () => {
      const avatarSrc = await getUserAvatar(username);
      setAvatar(avatarSrc);
    };

    getAvatar();
  }, [username]);

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img className="rounded-full w-8 flex mr-3" src={avatar} alt="" />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div>
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={FollowUserHandler}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  spDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
