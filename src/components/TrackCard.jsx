import { useMusicPlayer } from "../Context/MusicPlayerContext";

const TrackCard = ({ preview, image, title, artistName }) => {
  const { playTrack } = useMusicPlayer();
  return (
    <div
      className="flex flex-col gap-2 w-fit rounded-lg md:rounded-xl justify-center max-w-[120px] max-h-[270px] md:max-w-[220px] md:max-h-[370px]  text-left hover:shadow hover:cursor-pointer mb-2 p-2 md:mb-3 md:p-3"
      onClick={() => playTrack(preview,title,artistName)}
      role="button"
      aria-label={`Play track: ${title}`}
    >
      <img src={image} alt={title} className="w-30 h-34 md:w-40 md:h-44 mx-auto rounded-lg md:rounded-xl" />
      <div className="flex flex-col p-2 md:p-3">
        <h3 className="font-medium mb-2 md:font-semibold">{title}</h3>
        <p className="text-sm md:text-muted">{artistName}</p>
      </div>
    </div>
  );
};

export default TrackCard;
