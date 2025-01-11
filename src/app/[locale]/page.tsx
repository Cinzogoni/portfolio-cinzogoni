import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTranslations } from "next-intl";
import { Link } from "src/i18n/routing";
import LanguagesSwitcher from "../components/LanguagesSwitcher/LanguagesSwitcher";
import { Fragment } from "react";

const skills = [
  {
    id: 1,
    img: "/assets/img/html.png",
    name: "html",
  },
  {
    id: 2,
    img: "/assets/img/css.png",
    name: "css",
  },
  {
    id: 3,
    img: "/assets/img/js.png",
    name: "javascript",
  },
  {
    id: 4,
    img: "/assets/img/ts.png",
    name: "typescript",
  },
  {
    id: 5,
    img: "/assets/img/sass.png",
    name: "sass",
  },
  {
    id: 6,
    img: "/assets/img/react.png",
    name: "react",
  },
  {
    id: 7,
    img: "/assets/img/redux-toolkit.png",
    name: "redux toolkit",
  },
];

function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className={cx("container")}>
      <div className={cx("side-bar")}>
        <header className={cx("header")}>
          <div className={cx("img")}>
            <img className={cx("logo")} src="/assets/img/logo.png" alt="logo" />
          </div>
          <Link className={cx("link")} href="/introduce">
            <h4 className={cx("introduce")}>{t("introduce")}</h4>
          </Link>

          <div className={cx("language")}>
            <LanguagesSwitcher />
          </div>
        </header>

        <div className={cx("board")}>
          <div className={cx("avatar")}>
            <div className={cx("img-frame")}>
              <div className={cx("img-box")}>
                <img
                  className={cx("image")}
                  src="/assets/img/avatar.jpg"
                  alt="avatar"
                />
              </div>
            </div>

            <div className={cx("desc")}>
              <h2 className={cx("professional-title")}>Front-End Developer</h2>
              <h3 className={cx("international-name")}>Cinzogoni</h3>
            </div>
          </div>

          <div className={cx("skills")}>
            <div className={cx("skill-name")}>
              <h3 className={cx("name")}>{t("mySkills")}</h3>
            </div>
            {skills.map((skill, index) => {
              return (
                <Fragment>
                  <div className={cx("skill-box")}>
                    <div key={index} className={cx("skill")}>
                      <img
                        className={cx("skill-img")}
                        src={skill.img}
                        alt={skill.name}
                      />
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className={cx("social")}></div>
          <div className={cx("contact")}></div>
        </div>
      </div>

      <main className={cx("content")}></main>
    </div>
  );
}

export default Home;
