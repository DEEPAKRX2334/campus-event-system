import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "student") {
      navigate("/student");
    } else if (role === "teacher") {
      navigate("/admin");   // teacher goes to admin dashboard
    } else {
      alert("Please select user role");
    }
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.logo}>
        Campus<span style={styles.event}>Event</span>
      </h1>

      <h2 style={styles.welcome}>Welcome Back!</h2>
      <p style={styles.subtitle}>Login to your account to continue</p>

      <form style={styles.form} onSubmit={handleLogin}>

        {/* Email */}
        <label style={styles.label}>Username / Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <label style={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Role */}
        <label style={styles.label}>Select User As</label>
        <select
          style={styles.select}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {/* Button */}
        <button type="submit" style={styles.button}>
          Login
        </button>

      </form>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f6f9"
  },

  logo: {
    fontFamily:"Roboto",
    fontSize: "40px",
    fontWeight: "bold"
  },

  event: {
    color: "#208fe4"
  },

  welcome: {
    marginTop: "10px"
  },

  subtitle: {
    color: "#555",
    marginBottom: "20px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
  },

  label: {
    marginBottom: "5px",
    fontWeight: "500"
  },

  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  select: {
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  button: {
    padding: "12px",
    backgroundColor: "#208fe4",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Login;