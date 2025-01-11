import styles from "../Sidebar/Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Fragment } from "react";
import { Link } from "src/i18n/routing";
import { useTranslations } from "next-intl";
import LanguagesSwitcher from "../LanguagesSwitcher/LanguagesSwitcher";

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

function Sidebar() {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <header className={cx("header")}>
        <div className={cx("logo-img")}>
          <img className={cx("logo")} src="/assets/img/logo.png" alt="logo" />
        </div>
        <Link href="/introduce" className={cx("link")}>
          <h4 className={cx("introduce")}>{t("introduce")}</h4>
        </Link>

        <div className={cx("language")}>
          <LanguagesSwitcher />
        </div>
      </header>

      <div className={cx("board")}>
        <div className={cx("avatar")}>
          <div className={cx("avatar-frame")}>
            <div className={cx("avatar-box")}>
              <img
                className={cx("avatar-img")}
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
          <div className={cx("heading")}>
            <h3 className={cx("title")}>{t("mySkills")}</h3>
          </div>
          {skills.map((skill, index) => {
            return (
              <Fragment>
                <div className={cx("boxes")}>
                  <div key={index} className={cx("box")}>
                    <img
                      className={cx("img")}
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
    </Fragment>
  );
}

export default Sidebar;
