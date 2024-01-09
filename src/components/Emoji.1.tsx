import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Props } from "./Emoji";

export const Emoji = ({ rating }: Props) => {
  const emojiMap = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    3: { src: bullsEye, alt: "exceptional" },
  };

  if (rating < 3) return null;

  return <Image />;
};
