import { Link } from "react-router-dom";
import StyleHome from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={StyleHome.footer}>
      <div className={StyleHome.container}>
        {/* Navigation Links */}
        <div className={StyleHome.navLinks}>
          <Link to="/">About</Link>
          <Link to="/food/dairy">Food</Link>
          <Link to="/exercise">Exercise</Link>
          <Link to="/reports">Apps</Link>
          <Link to="/">Community</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Premium</Link>
        </div>

        {/* Additional Links */}
        <div className={StyleHome.extraLinks}>
          <Link to="https://www.myfitnesspal.com/">Calorie Counter</Link>
          <Link to="https://blog.myfitnesspal.com/">Blog</Link>
          <Link to="https://www.myfitnesspal.com/terms-of-service">Terms</Link>
          <Link to="https://www.myfitnesspal.com/privacy-policy">Privacy</Link>
          <Link to="https://www.myfitnesspal.com/contact-us">Contact</Link>
          <Link to="https://www.myfitnesspal.com/api">API</Link>
          <Link to="https://www.myfitnesspal.com/jobs">Jobs</Link>
        </div>

        {/* Legal & Copyright */}
        <div className={StyleHome.legal}>
          <p>© 2025 DiaBite, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
