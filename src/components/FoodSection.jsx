import foodData from "../data/foodData";
import FoodCard from "./FoodCard";


function FoodSection(){

return (

<section>


<h1 className="title">
ร้านอาหารแนะนำสระบุรี
</h1>



<div className="grid">


{
foodData.map((food)=>(
    
<FoodCard
key={food.id}
food={food}
/>

))
}


</div>


</section>

)

}


export default FoodSection;