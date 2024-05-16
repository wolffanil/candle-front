import VideoItem from "./VideoItem";
import { vidoes } from "./vidoe.constants";

function Video() {
  return (
    <section className="mt-[391px] flex flex-col items-start mb-[258px]">
      <h2 className="font-miama text-[48px] text-black">
        Отзывы наших клиентов
      </h2>
      <div className="flex w-full justify-between items-start mt-[104px]">
        {vidoes.map((v, i) => (
          <VideoItem
            key={i}
            name={v.name}
            videoUrl={v.videoUrl}
            className={v?.className}
          />
        ))}
      </div>
    </section>
  );
}

export default Video;
