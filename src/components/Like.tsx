import { MouseEvent, useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    onClick();
    setLiked(!liked);
  };

  return (
    <>
      {liked ? (
        <FcLike onClick={toggle} color="red" size="40" />
      ) : (
        <AiOutlineHeart onClick={toggle} color="black" size="40" />
      )}
    </>
  );
}
export default Like;
