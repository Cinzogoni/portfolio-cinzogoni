import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { getTranslations } from "next-intl/server";

import GridSystem from "../components/GridSystem/GridSystem";

function Home() {
  const t = getTranslations("HomePage");
  return (
    <main className={cx("container")}>
      <GridSystem gridClass={cx("grid")} wideClass={cx("wide")}></GridSystem>
    </main>
  );
}

export default Home;
