import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>CampusEvent</h2>
      <div>
        <Link to="/student" style={styles.link}>Student</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
        <Link to="/login" style={styles.link}>Logout</Link>
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
    backgroundColor: "#208fe4"
  },
  logo: {
    color: "white",
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