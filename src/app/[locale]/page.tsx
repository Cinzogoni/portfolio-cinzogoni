import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTranslations } from "next-intl";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className={cx("container")}>
      <div className={cx("side-bar")}>
        <Sidebar />
      </div>

      <main className={cx("content")}></main>
    </div>
  );
}

export default Home;
