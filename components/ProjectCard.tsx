import Image from "next/image";

interface Props {
  pic: string;
}

export const ProjectCard = ({ pic }: Props) => {
  return (
    <div className="">
      <Image
        alt="me"
        src={`/images/${pic}`}
        width={0}
        height={0}
        sizes="100%"
        className="aspect-square rounded-md w-full h-full"
      />
    </div>
  );
};
