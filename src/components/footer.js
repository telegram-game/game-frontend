import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import styles from "./footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      {routes
        .filter(({ isNav }) => isNav)
        .map((route, index) => (
          <button
            onClick={() => navigate(route.path)}
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
