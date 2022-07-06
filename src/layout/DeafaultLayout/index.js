import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import classNames from "classnames/bind";
import styles from "./DeafaultLayout.module.scss";
const cx = classNames.bind(styles);
function DeafaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}></div>
            <Sidebar />
            <div className={cx("content")}>{children}</div>
        </div>
    );
}

export default DeafaultLayout;
