import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./navigation.module.scss";
import { navigation } from "~/src/utils/nav.constants";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/favicon.ico";
import cx from "classnames";
import { icons } from "~/src/utils/icon.constant";
import { socialIcons } from "~/src/common/socialIcons";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const router = useRouter();
  const Logo = <Image src={logo} alt="Logo" width={28} height={20} />;
  const routes = () => (
    <div className={styles.routeContainer}>
      {navigation.map((nav) => {
        return (
          <Link key={nav.key} href={nav.route}>
            <a
              className={cx(
                styles.navRoute,
                router.pathname === nav.route && styles.activeNav
              )}
            >
              {nav.text}
            </a>
          </Link>
        );
      })}
    </div>
  );
  
  return (
    <>
      <div className={cx(styles.navContainer, "shadow bottom")}>
        <div className={styles.desktopNavigation}>
          {Logo}
          {routes()}
        </div>
        <div className={styles.mobileNavigation}>
          {Logo}
          <button
            type="button"
            onClick={toggleNav}
            className={styles.navigationIcon}
          >
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <div className={cx(styles.navSliderContainer, navOpen && styles.open)}>
        <div>
          <div className={styles.closeButtonContainer}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={toggleNav}
            >
              {icons.closeIcon("", "2rem")}
            </button>
          </div>
          {routes()}
          {socialIcons(styles.navSocialUrl)}
        </div>
      </div>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
