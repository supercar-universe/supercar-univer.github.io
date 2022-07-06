import { Wrapper as PopperWrapper } from "../Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";

import SearchCar from "../SearchCar/index.js";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };
    return (
        <span>
            <HeadlessTippy
                visible={showResult && searchValue.length > 0}
                interactive
                render={(attrs) => (
                    <div
                        className={cx("search_result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search_title")}>Siêu xe</h4>
                            <SearchCar value={searchValue} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search_wrap")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Bạn muốn xem chiếc siêu xe nào ?"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    <button className={cx("clear")}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            onClick={handleClear}
                        />
                    </button>
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />

                    <button className={cx("search_btn")}>
                        <FontAwesomeIcon
                            className={cx("search_btn-icon")}
                            icon={faMagnifyingGlass}
                        />
                    </button>
                </div>
            </HeadlessTippy>
        </span>
    );
}

export default Search;
