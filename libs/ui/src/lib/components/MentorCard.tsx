import React from "react";
import MentorCardImage from '../../assets/images/mentor-card-sample.png';
export function MentorCard() {
  return (
    <div>
      <img src={MentorCardImage as string} alt="멘토 카드 샘플"/>
    </div>
  );
}