function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.image} />

      <div className="card-body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <h4>📍 {food.location}</h4>

        <a
          href={food.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="map-btn"
        >
          🗺 ดูแผนที่
        </a>
      </div>
    </div>
  );
}

export default FoodCard;