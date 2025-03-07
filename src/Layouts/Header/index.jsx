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
        { key: "highLevelMeetings", label: "High Level Meetings", path: "/highlevelmeetings" },
        { key: "debateSessions", label: "Debate Sessions", path: "/debatesessions" },
        { key: "workshops", label: "Workshops and Seminars", path: "/workshops" },
        { key: "networkingEvents", label: "Networking Events", disabled: true },
        { key: "diplomatMeetings", label: "Diplomat Meetings", disabled: true },
        { key: "culturalExchange", label: "Cultural Exchange Programs", disabled: true },
      ],
    },
    {
      header: <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
      DIPLOMATIC&nbsp;&nbsp;&nbsp;COMMUNITY
    </Text>,
      submenu: [
        { key: "constitution", label: "Constitution", path: "/constitution" },
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
      path: "/publications"
    },
    {
      header: "NEWSROOM",
      submenu: [
        { key: "event1", label: "Event 1", path: "/event1" },
        { key: "event2", label: "Event 2", path: "/event1" },
        { key: "event3", label: "Event 3", path: "/event1" },
        { key: "event4", label: "Event 4", path: "/event1" },
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

  const logoWidth = location.pathname === "/" ? "100%" : "80%";
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
          {menuItems.map(({ header, submenu, path }) => (
            submenu ? (
              <Dropdown
              key={header}
              overlay={
                <Menu>
                  {submenu.map(({ key, label, path, disabled }) => (
                    <Menu.Item 
                      key={key} 
                      onClick={() => !disabled && navigate(path)} 
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
              <Text key={header} className={style.NavBarText} onClick={() => navigate(path)}>
                {header}
              </Text>
            )
          ))}
        </div>
      ) : (
        <MenuDrawer items={menuItems} open={drawerVisible} openDrawer={openDrawer} />
      )}
    </Header>
  );
};

export default Index;
