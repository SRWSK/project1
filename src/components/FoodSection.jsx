import FoodCard from "./FoodCard";
import foodData from "../data/foodData";

function FoodSection() {
  return (
    <section id="foods" className="food-section">

      <h1 className="title">
        🍽 ร้านอาหารแนะนำในจังหวัดสระบุรี
      </h1>

      <div className="grid">

        {foodData.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}

      </div>

    </section>
  );
}

export default FoodSection;