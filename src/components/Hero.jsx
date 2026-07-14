function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">
        <h1>Saraburi Food </h1>

        <p>
          ค้นพบร้านอาหารยอดนิยมในจังหวัดสระบุรี
          ทั้งอาหารไทย อาหารเกาหลี และสเต็กแสนอร่อย
        </p>

        <a href="#foods" className="hero-btn">
          🍽 เริ่มค้นหาร้านอาหาร
        </a>
      </div>

      <div className="hero-right">
        <img src="/banner.jpg" alt="Banner" />
      </div>

    </section>
  );
}

export default Hero;