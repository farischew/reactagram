import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(userName) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", userName)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getUsersNotFollowed(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  const output = result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    )
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );

  return output;
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  spDocId,
  userId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(spDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
}
