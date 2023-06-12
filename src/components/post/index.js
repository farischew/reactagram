import PropTypes from "prop-types";
import Header from "./header";
import Image from "./image";
import Actions from "./actions";
import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Comments from "./comments";
import { getUserAvatar } from "../../services/firebase";

export default function Post({ content }) {
  const [avatar, setAvatar] = useState();

  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();

  useEffect(() => {
    const getAvatar = async () => {
      const avatarSrc = await getUserAvatar(content.username);
      setAvatar(avatarSrc);
    };

    if (content.username) {
      getAvatar();
    }
  }, [content.username]);

  console.log(avatar);

  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-8">
      <Header username={content.username} avatarSrc={avatar} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer username={content.username} caption={content.caption} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
