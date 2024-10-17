import { useMusicPlayer } from "../Context/MusicPlayerContext";

const TrackCard = ({ preview, image, title, artistName }) => {
  const { playTrack } = useMusicPlayer();

  return (
    <div
      className="flex flex-col dark:text-white gap-2 w-fit rounded-lg md:rounded-xl justify-center max-w-[120px] max-h-[270px] md:max-w-[220px] md:max-h-[370px] hover:cursor-pointer mb-2 p-2 md:mb-3 md:p-3 transition-shadow hover:shadow-lg focus:ring-2 focus:ring-offset-2 ring-pink-500 dark:hover:shadow-xl"
      onClick={() => playTrack(preview, title, artistName)}
      role="button"
      aria-label={`Play track: ${title}`}
      tabIndex={0}
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-30 h-34 md:w-40 md:h-44 mx-auto rounded-lg md:rounded-xl"
        />
        <div className="absolute inset-0 bg-black dark:bg-opacity-30 dark:hover:bg-opacity-50  bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
      </div>

      <div className="flex flex-col p-2 md:p-3">
        <h3 className="font-medium mb-2 md:font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
          {artistName}
        </p>
      </div>
    </div>
  );
};

export default TrackCard;
