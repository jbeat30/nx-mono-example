import React from "react";
import MentorCardImage from '../../assets/images/mentor-card-sample.png';
export function MentorCard() {
  const imageSrc: string = typeof MentorCardImage === 'object' && 'src' in MentorCardImage
    ? (MentorCardImage as { src: string }).src
    : MentorCardImage;
  return (
    <div>
      <img src={imageSrc} alt="멘토 카드 샘플"/>
    </div>
  );
}
