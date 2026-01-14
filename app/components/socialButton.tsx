import Image from "next/image"

interface socialButtonProps {
  image: string;
  platform: string;
}

export default function SocialButton({ image, platform }: socialButtonProps) {
  return (
    <div className="flex justify-center gap-10 bg-white/20 backdrop-blur-md p-6 place-items-center border-white/20 rounded-3xl border-1 w-fit">
      <Image src={image} alt="{platform} logo" height={100} width={100} />
      <h2 className="text-xl">Find me on {platform}</h2>
    </div>

  )
}

