import classNames from "classnames/bind";
import styles from "./SearchCar.module.scss";
import Cars from "../../Data/Cars";
// import { useState } from "react";
const cx = classNames.bind(styles);
function SearchCar({ value }) {
    // const [showCars, setShowCars] = useState([]);

    return (
        <>
            {Cars.map((car) => {
                return car.name
                    .toLocaleLowerCase()
                    .includes(value.toLocaleLowerCase()) ||
                    car.brand
                        .toLocaleLowerCase()
                        .includes(value.toLocaleLowerCase()) ? (
                    <div key={car.ID} className={cx("wrapper")}>
                        <img
                            className={cx("car_avatar")}
                            src={car.avatar}
                            alt={car.name}
                        />
                        <div className={cx("car_info")}>
                            <h4 className={cx("car_name")}>{car.name}</h4>
                            <span className={cx("car_description")}>
                                <span>{car.brand}</span>
                                <span>{car.type}</span>
                            </span>
                        </div>
                        <div className={cx("car_price")}>
                            <span className={cx("car_version")}>
                                {car.version}
                            </span>
                            <span className={cx("car_price-vnd")}>
                                {car.price}
                            </span>
                        </div>
                    </div>
                ) : null;
            })}
        </>
    );
}
export default SearchCar;
