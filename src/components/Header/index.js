import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "~/assets/img/logo/Logo_Supercar-Universe.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Search from "~/components/Search";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img
                    className={cx("logo")}
                    src={logo}
                    alt="Logo Supercar Universe - Vũ Trụ Siêu Xe"
                />
                <Search />
                <div className={cx("nav_wrap")}>
                    <button>
                        <span> Khám phá</span>
                        <FontAwesomeIcon
                            className={cx("explore")}
                            icon={faCaretRight}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
