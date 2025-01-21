import styles from "../Sidebar/Sidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

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
    img: "/assets/img/ts.png",
    name: "typescript",
  },
  {
    id: 3,
    img: "/assets/img/sass.png",
    name: "sass",
  },
  {
    id: 4,
    img: "/assets/img/react.png",
    name: "react",
  },
  {
    id: 5,
    img: "/assets/img/redux-toolkit.png",
    name: "redux toolkit",
  },
];

const hyperlinks = [
  {
    id: 1,
    img: "/assets/img/github.png",
    name: "github",
    link: "https://github.com/Cinzogoni",
  },
  {
    id: 2,
    img: "/assets/img/facebook.png",
    name: "facebook",
    link: "https://www.facebook.com/ThaiChiHuy",
  },
  {
    id: 3,
    img: "/assets/img/instagram.png",
    name: "instagram",
    link: "https://www.instagram.com/cinzogoni.thai",
  },

  {
    id: 4,
    img: "/assets/img/youtube.png",
    name: "youtube",
    link: "https://www.youtube.com/c/Th%C3%A1iCh%C3%ADHuy93",
  },
];

function Sidebar() {
  const t = useTranslations("HomePage");
  return (
    <div className={cx("wrapper")}>
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

      <div className={cx("board")}>
        <div className={cx("skills")}>
          <div className={cx("heading")}>
            <h3 className={cx("title")}>{t("mySkills")}</h3>
          </div>
          {skills.map((skill, index) => {
            return (
              <div key={index} className={cx("box")}>
                <img className={cx("img")} src={skill.img} alt={skill.name} />
              </div>
            );
          })}
        </div>

        <div className={cx("hyper-link")}>
          <div className={cx("heading")}>
            <h3 className={cx("title")}>{t("hyperLink")}</h3>
          </div>
          {hyperlinks.map((Hyperlink, index) => {
            return (
              <Link
                // @ts-ignore
                href={Hyperlink.link}
                target="_blank"
                key={index}
              >
                <div className={cx("box")}>
                  <img
                    className={cx("img")}
                    src={Hyperlink.img}
                    alt={Hyperlink.name}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className={cx("contact")}>
          <div className={cx("heading")}>
            <h3 className={cx("title")}>{t("contact")}</h3>
          </div>

          <div className={cx("btn-box")}>
            <button className={cx("btn")}>
              <span className={cx("animate")}></span>
              <span className={cx("animate")}></span>
              <span className={cx("animate")}></span>
              <span className={cx("animate")}></span>
              <h4 className={cx("click")}>{t("contactNow")}</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
