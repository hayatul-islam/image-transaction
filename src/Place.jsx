export default function Place({ place, onSelect, selectPlace, isAnimation }) {
  let position = "top-[40%] left-12";
  if (place.id === 2) {
    position = "top-[40%] right-12";
  } else if (place.id === 3) {
    position = "top-[55%] left-[45%]";
  }

  return (
    <div
      className={`${
        place?.id === selectPlace.id
          ? `h-[100vh] w-[100vw] ${isAnimation && "zoom-in !overflow-hidden"}  `
          : `${position} absolute group`
      }`}
    >
      <div className="hidden group-hover:block absolute top-[-40px] left-0 text-center text-white font-medium uppercase">
        <p className="text-[10px]">Go To</p>
        <p>{place.place}</p>
      </div>
      <img
        onClick={() => onSelect(place)}
        className={` ${
          place?.id === selectPlace.id
            ? "h-full w-full"
            : " border-2 border-white w-[50px] h-[50px] rounded-full cursor-pointer "
        } `}
        src={place.image}
        alt=""
      />
    </div>
  );
}
