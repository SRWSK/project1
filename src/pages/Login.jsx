import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (username === "admin" && password === "123456") {
      // บันทึกสถานะ Login
      sessionStorage.setItem("isLogin", "true");

      setError("");

      navigate("/home", { replace: true });
    } else {
      setError("รหัสผ่านหรือชื่อผู้ใช้ไม่ถูกต้อง");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <div className="login">
      <div className="box">
        <h1>Saraburi Food Guide</h1>

        <p className="subtitle">
          ค้นหาร้านอาหารอร่อยในจังหวัดสระบุรี
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={login}>
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
}

export default Login;