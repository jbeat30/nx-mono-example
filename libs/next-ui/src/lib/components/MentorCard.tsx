import React from "react";
import MentorCardImage from '@my-monorepo/ui/assets/images/mentor-card-sample.png';
import Image from "next/image";

export function MentorCard() {
  return (
    <div>
      <Image src={MentorCardImage} alt={'멘토 카드 샘플'} layout={'intrinsic'}/>
    </div>
  );
}
