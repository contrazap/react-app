import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

function LikeButton() {
  const [likeStatus, setLikeStatus] = useState(false);

  const handleClick = () => {
    setLikeStatus(true);
  };

  return (
    <div onClick={handleClick}>
      {likeStatus ? <FcLike /> : <FcLikePlaceholder />}
    </div>
  );
}

export default LikeButton;
