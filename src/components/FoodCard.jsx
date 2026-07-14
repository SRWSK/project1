function FoodCard({ food }) {

  return (

    <div className="card">

      <img
        src={`${import.meta.env.BASE_URL}${food.image}`}
        alt={food.name}
      />


      <div className="card-body">

        <h2>
          {food.name}
        </h2>


        <p>
          {food.description}
        </p>


        <p>
          📍 {food.location}
        </p>


        <a
          className="map-btn"
          href={food.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          ดูแผนที่
        </a>


      </div>

    </div>

  );

}


export default FoodCard;