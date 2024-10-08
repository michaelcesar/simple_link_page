import Image from 'next/image';

interface ImgProps {
  url: string;
  width: number;
  height: number;
}

export default function Img({ url, width, height }: ImgProps) {
  return (
    <Image
      src={url}
      alt="imagem"
      width={width}
      height={height}
      priority={true}
    />
  );
}
