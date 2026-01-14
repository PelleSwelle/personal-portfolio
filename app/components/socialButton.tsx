import Image from "next/image"

interface socialButtonProps {
  image: string;
  link: string;
}

export default function SocialButton({ image, link }: socialButtonProps) {
  return (
    <a href={link} target="_blank">
      <div className="flex justify-center gap-10 bg-white/20 backdrop-blur-md p-4 place-items-center border-white/20 rounded-3xl border-1 w-fit">
        <Image src={image} alt="{platform} logo" height={50} width={50} />
      </div>
    </a>

  )
}

