import React, { useState, useEffect } from "react";
import { Layout, Dropdown, Menu, Typography, Image, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import style from "./style.module.scss";
const { Header } = Layout;
const { Text } = Typography;
import DiplomaticLogo from "../../Assets/Logo/DiplomaticLogo.png";
import DiplomacyLogo from "../../Assets/Logo/DiplomacyLogo.png";
import { MenuDrawer } from "../../Components";
import { Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    {
      header: "ABOUT US",
      submenu: [
        { key: "whoWeAre", label: "Who We Are", path: "/whoweare" },
        { key: "ourStory", label: "Our Story", path: "/ourstory" },
        { key: "ourMission", label: "Our Mission", path: "/ourmission" },
        { key: "secretaryGeneral", label: "About Secretary-General", path: "/secretarygeneral" },
        { key: "dcAward", label: "DC Award", path: "/dcaward" },
      ],
    },
    {
      header: "ACTIVITIES",
      submenu: [
        { key: "secretariatMeetings", label: "Secretariat Meetings", path: "/secretariatmeetings" },
        { key: "officialVisits", label: "Official Visits", path: "/officialvisits" },
        { key: "workshops", label: "Workshops and Seminars", path: "/workshops" },
        { key: "highLevelMeetings", label: "High Level Meetings", disabled: true },
        { key: "networkingEvents", label: "Networking Events", disabled: true },
        { key: "diplomatMeetings", label: "Diplomat Meetings", disabled: true },
      ],
    },
    {
      header: (
        <Text
          style={{ fontWeight: "700" }}
          className={style.NavBarText}
          onClick={(e) => e.preventDefault()}
        >
          DIPLOMACY&nbsp;&nbsp;COMMUNITY
        </Text>
      ),
      submenu: [
        {
          key: "constitution",
          label: "Constitution",
          path: "https://s3.diplomacycommunity.org/constitution.pdf",
          external: true,
        },
        { key: "internalInterests", label: "Internal Interests", path: "/internalinterests" },
        {
          key: "internationalInterests",
          label: "International Interests",
          path: "/internationalinterests",
        },
        { key: "structure", label: "Structure", path: "/structure" },
        { key: "stakeholders", label: "Our Stakeholders", path: "/stakeholders" },
        { key: "youngLeaders", label: "Young Leaders Platform", path: "/youngleaders" },
      ],
    },
    {
      header: "PUBLICATIONS",
      path: "/publications",
      disabled: true,
    },
    {
      header: "PARTNERSHIP",
      submenu: [
        {
          key: "volunteer",
          label: "Become a volunteer",
          path: "https://docs.google.com/forms/d/e/1FAIpQLSdk92V_wSZM9hyA91SnYa-Z7OLhSFsdGrLuM_zw7E8b2qwR2g/viewform?usp=header",
          external: true,
        },
        {
          key: "member",
          label: "Become a member",
          path: "https://forms.gle/Qx2LAoXFopVB5UpGA",
          external: true,
        },
        {
          key: "mediapartner",
          label: "Become a media-partner",
          path: "https://forms.gle/ggBVSCmQDdtF8dbe6",
          external: true,
        },
        {
          key: "partner",
          label: "Become a partner",
          path: "https://forms.gle/WneQMMzPb6BbcBZ28",
          external: true,
        },
        { key: "organizer", label: "Become a young leader", disabled: true },
      ],
    },
  ];

  const menuDrawerItems = [
    {
      header: "ABOUT US",
      submenu: [
        { key: "whoWeAre", label: "Who We Are", path: "/whoweare" },
        { key: "ourStory", label: "Our Story", path: "/ourstory" },
        { key: "ourMission", label: "Our Mission", path: "/ourmission" },
        { key: "secretaryGeneral", label: "About Secretary-General", path: "/secretarygeneral" },
        { key: "dcAward", label: "DC Award", path: "/dcaward" },
      ],
    },
    {
      header: "ACTIVITIES",
      submenu: [
        { key: "secretariatMeetings", label: "Secretariat Meetings", path: "/secretariatmeetings" },
        { key: "officialVisits", label: "Official Visits", path: "/officialvisits" },
        { key: "workshops", label: "Workshops and Seminars", path: "/workshops" },
        { key: "highLevelMeetings", label: "High Level Meetings", disabled: true },
        { key: "networkingEvents", label: "Networking Events", disabled: true },
        { key: "diplomatMeetings", label: "Diplomat Meetings", disabled: true },
      ],
    },
    {
      header: "DIPLOMACY COMMUNITY",
      submenu: [
        {
          key: "constitution",
          label: "Constitution",
          path: "https://s3.diplomacycommunity.org/constitution.pdf",
          external: true,
        },
        { key: "internalInterests", label: "Internal Interests", path: "/internalinterests" },
        {
          key: "internationalInterests",
          label: "International Interests",
          path: "/internationalinterests",
        },
        { key: "structure", label: "Structure", path: "/structure" },
        { key: "stakeholders", label: "Our Stakeholders", path: "/stakeholders" },
        { key: "youngLeaders", label: "Young Leaders Platform", path: "/youngleaders" },
      ],
    },
    {
      header: "PUBLICATIONS",
      path: "/publications",
      disabled: true,
    },
    {
      header: "PARTNERSHIP",
      submenu: [
        {
          key: "volunteer",
          label: "Become a volunteer",
          path: "https://docs.google.com/forms/d/e/1FAIpQLSdk92V_wSZM9hyA91SnYa-Z7OLhSFsdGrLuM_zw7E8b2qwR2g/viewform?usp=header",
          external: true,
        },
        {
          key: "member",
          label: "Become a member",
          path: "https://forms.gle/Qx2LAoXFopVB5UpGA",
          external: true,
        },
        {
          key: "mediapartner",
          label: "Become a media-partner",
          path: "https://forms.gle/ggBVSCmQDdtF8dbe6",
          external: true,
        },
        {
          key: "partner",
          label: "Become a partner",
          path: "https://forms.gle/WneQMMzPb6BbcBZ28",
          external: true,
        },
        { key: "organizer", label: "Become a young leader", disabled: true },
      ],
    },
  ];

  const openDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoWidth = location.pathname === "/" ? "100%" : "100%";
  const marginLeft = logoWidth === "100%" ? "15px" : "-15px";

  return (
    <Header className={style.Header}>
      <div className={style.Logo}>
        <div className={style.DiplomacyLogo}>
          <Link to="/">
            <Image width={logoWidth} preview={false} src={DiplomacyLogo} />
          </Link>
        </div>

        {screenSize?.width > 769 ? (
          <div className={style.DiplomaticLogo}>
            {/* <Link to="/">
              <Image
                width={logoWidth}
                style={{ marginLeft: marginLeft, paddingTop: "20px" }}
                preview={false}
                src={DiplomaticLogo}
              />
            </Link> */}
          </div>
        ) : (
          <Button
            className={style.MenuButton}
            onClick={openDrawer}
            style={{ background: "transparent", border: "none" }}
            icon={
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ width: "36px", height: "2px", background: "white" }}></div>
                <div style={{ width: "36px", height: "2px", background: "white" }}></div>
              </div>
            }
          />
        )}
      </div>
      {screenSize?.width > 769 ? (
        <div className={style.NavBar}>
          {menuItems.map(({ header, submenu, path, disabled }) =>
            submenu ? (
              <Dropdown
                key={header}
                overlay={
                  <Menu>
                    {submenu.map(({ key, label, path, disabled, external }) => (
                      <Menu.Item
                        key={key}
                        onClick={() =>
                          !disabled && (external ? window.open(path, "_blank") : navigate(path))
                        }
                        disabled={disabled}
                        style={disabled ? { color: "gray", cursor: "not-allowed" } : {}}
                      >
                        {label}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomCenter"
              >
                <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
                  {header}
                </Text>
              </Dropdown>
            ) : (
              <Text key={header} className={style.NavBarText}>
                {header}
              </Text>
            )
          )}
        </div>
      ) : (
        <MenuDrawer items={menuDrawerItems} open={drawerVisible} openDrawer={openDrawer} />
      )}
    </Header>
  );
};

export default Index;
