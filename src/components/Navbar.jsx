import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>CampusEvent</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/student" style={styles.link}>Student</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#111",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
  }
};

export default Navbar;