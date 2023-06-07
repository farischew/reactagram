import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useUser from "../../hooks/use-user";

export default function ProfileHeader({
  photosCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullname,
    following = [],
  },
  followerCount,
  setFollowerCount,
}) {
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isLoggedInUserFollowingProfile(
        user.username,
        profileUserId
      );
      setIsFollowingProfile(isFollowing);
    };

    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, profileUserId]);

  return (
    <div>
      <p>This is the profile header</p>
    </div>
  );
}

ProfileHeader.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    fullName: PropTypes.string,
    following: PropTypes.array,
  }).isRequired,
};
