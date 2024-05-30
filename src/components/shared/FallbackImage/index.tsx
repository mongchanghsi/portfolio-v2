import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";

interface IProps {
  src?: string | StaticImageData | null;
  alt: string;
  fallbackSrc?: string | StaticImageData;
}

const FallbackImage: FC<IProps> = ({ src, alt, fallbackSrc = "" }) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImgSrc(!!src ? src : fallbackSrc);
  }, [src]);

  if (typeof imgSrc === "string" && imgSrc.includes("svg")) {
    return (
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            imgSrc
          )}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
        }}
      ></div>
    );
  }

  return (
    <Image
      style={{ transition: "0.3s" }}
      src={imgSrc}
      alt={alt}
      onError={(error) => {
        setImgSrc(fallbackSrc);
      }}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDnauBwADVAFqopFnogAAAABJRU5ErkJggg=="
      placeholder="blur"
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc);
        }
      }}
      fill
    />
  );
};

export default FallbackImage;
