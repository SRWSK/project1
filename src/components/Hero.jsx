function Hero(){

return(

<section className="hero">


<div className="hero-left">


<h1>
Saraburi
<br/>
Food Guide
</h1>


<p>
รวมร้านอาหารเด็ด
และร้านดังในจังหวัดสระบุรี
</p>



<a
href="#food"
className="hero-btn"
>
ดูร้านอาหาร
</a>


</div>



<div className="hero-right">


<img
src={`${import.meta.env.BASE_URL}banner.jpg`}
alt="Saraburi Food"
/>


</div>



</section>

)

}


export default Hero;