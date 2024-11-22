import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routers";
import styles from "./footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.footer}>
      {routes
        .filter(({ isNav }) => isNav)
        .map((route, index) => (
          <button
            onClick={() => {
              if (location.pathname === "/kombat" && route.path === "/kombat") {
                return navigate("/");
              }
              return navigate(route.path!);
            }}
            key={index}
            className={styles.footer_button}
          >
            <img
              src={route.icon}
              alt={route.name}
              className={styles.footer_icon}
            />
            <span>{route.name}</span>
          </button>
        ))}
    </div>
  );
};

export default Footer;
