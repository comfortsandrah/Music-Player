import { useMusicPlayer } from "../Context/MusicPlayerContext";

const TrackCard = ({ preview, image, title, artistName }) => {
  const { playTrack } = useMusicPlayer();
  return (
    <div
      className="flex flex-col gap-2 rounded-xl justify-center max-w-[180px] max-h-[330px] md:max-w-[220px] md:max-h-[370px] mt-1 text-left hover:shadow hover:cursor-pointer mb-3 p-3 bg-pink-900"
      onClick={() => playTrack(preview,title,artistName)}
      role="button"
      aria-label={`Play track: ${title}`}
    >
      <img src={image} alt={title} className="w-30 h-34 md:w-40 md:h-44 mx-auto rounded-xl" />
      <div className="flex flex-col p-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted">{artistName}</p>
      </div>
    </div>
  );
};

export default TrackCard;
