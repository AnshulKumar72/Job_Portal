import {
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <footer className="footer">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Najibabad, Bijnor</li>
            <li>Kashyapakkumar@gmail.com</li>
            <li>+91 8279302534</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to="https://x.com/AnshulKuma71981">
                <span><FaSquareXTwitter /></span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/anshul_kashyap_2534/">
                <span><FaSquareInstagram /></span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/AnshulKumar72">
                <span><FaGithub /></span>
                <span>Git Hub</span>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/anshulkumar72/">
                <span><FaLinkedin /></span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Anshul Kumar
      </div>
    </>
  );
};

export default Footer;
