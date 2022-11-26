import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface CourseCard {
  image: StaticImageData;
  label: string;
  description: string;
  level: string;
}

const CourseCard: FC<CourseCard> = ({ image, label, description, level }) => {
  return (
    <div className="flex flex-col cursor-pointer text-white w-[300px] h-[250px] bg-complement rounded-xl p-4 gap-4">
      <section className="flex items-center justify-between text-center">
        <div className="relative w-[70px] h-[70px] rounded-xl bg-black">
          <Image src={image} alt="Image" layout="fill" />
        </div>
        <span className="text-[1.5rem]">{label}</span>
      </section>
      <section>
        <span>{level}</span>
      </section>
      <section className="text-left">
        <span>{description}</span>
      </section>
    </div>
  );
};

export default CourseCard;
