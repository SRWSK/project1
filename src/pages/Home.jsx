import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodSection from "../components/FoodSection";
import Contact from "../components/Contact";

import "../App.css";

function Home() {
  const navigate = useNavigate();

  // ตรวจสอบว่า Login หรือยัง
  useEffect(() => {
    const isLogin = sessionStorage.getItem("isLogin");

    if (!isLogin) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // ถ้า Refresh ให้ล้าง Login
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("isLogin");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
    };
  }, []);

  return (
    <div className="home">
      <Navbar />

      <main>
        <Hero />
        <FoodSection />
      </main>

      <Contact />
    </div>
  );
}

export default Home;