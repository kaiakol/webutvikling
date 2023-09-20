import { useParams } from "react-router-dom";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import "./Drink.css";

export default function Drink() {
  const { drinkId } = useParams();
  return (
    <div id="drinkCont">
      {drinkId === undefined ? (
        <> Id not valid</>
      ) : (
        <>
          <CarouselItem drinkId={drinkId} key={drinkId} />
        </>
      )}
    </div>
  );
}
