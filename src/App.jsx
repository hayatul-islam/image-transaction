import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Place from "./Place";
const data = [
  {
    id: 1,
    place: "Place1",
    image:
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    place: "Place2",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    place: "Place3",
    image:
      "https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const App = () => {
  const [selectPlace, setSelectPlace] = useState(data[0]);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isAccordion, setIsAccordion] = useState(false);

  const handleSelectPlace = (place) => {
    setIsAnimation(true);
    setTimeout(() => {
      setSelectPlace(place);
      setIsAnimation(false);
    }, 1500);
  };

  return (
    <div className="relative">
      {isAnimation ? (
        <Place
          place={selectPlace}
          onSelect={handleSelectPlace}
          selectPlace={selectPlace}
          isAnimation={isAnimation}
        />
      ) : (
        data?.map((place) => (
          <Place
            key={place?.id}
            place={place}
            onSelect={handleSelectPlace}
            selectPlace={selectPlace}
          />
        ))
      )}
      <div className="absolute bottom-0 p-2  space-y-2 bg-white bg-opacity-10 rounded">
        <div>
          <button
            onClick={() => setIsAccordion((prev) => !prev)}
            className={`text-white font-medium flex items-center gap-2`}
          >
            <span>Discover</span>
            <span className="pt-1">
              {" "}
              {isAccordion ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </span>
          </button>
        </div>
        {isAccordion && (
          <div className="flex gap-3">
            {data.map((place) => (
              <img
                onClick={() => handleSelectPlace(place)}
                key={place?.id}
                className={`h-[30px] w-[40px] rounded cursor-pointer ${
                  selectPlace.id === place.id && "border-2"
                }`}
                src={place?.image}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
