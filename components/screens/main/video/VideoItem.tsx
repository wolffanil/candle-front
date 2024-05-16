"use client";

import cn from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";

function VideoItem({
  className,
  videoUrl,
  name,
}: {
  className?: string;
  videoUrl: string;
  name: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    if (!isPlay) {
      videoRef.current?.play();
      setIsPlay(true);
    } else {
      videoRef.current?.pause();
      setIsPlay(false);
    }
  };

  return (
    <div
      className={cn(
        "relative flex flex-col w-[330px] min-h-[400px] z-20",
        className
      )}
    >
      <div className="w-[330px] h-[400px] rounded-tl-[120px] rounded-tr-[120px] overflow-hidden relative z-20">
        <video
          ref={videoRef}
          className="rounded-tl-[120px] rounded-tr-[120px] !min-w-[330px] !min-h-[400px] object-cover"
          src={videoUrl}
        />

        <button
          className="absolute left-[13px] top-[320px] z-30"
          onClick={handlePlay}
        >
          <Image src="/icons/player.png" alt="play" width={63} height={60} />
        </button>
      </div>

      <p className="font-cruinn mt-[18px] text-black text-[24px] text-start">
        {name}
      </p>

      <Image
        src="/img/video-bg.png"
        alt="line"
        width={294}
        height={400}
        className="absolute -top-[29px] -right-[55px]
        z-10"
      />
    </div>
  );
}

export default VideoItem;
