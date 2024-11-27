import React, { useState, useEffect } from "react";
import { Layout, Dropdown, Menu, Typography, Image, Drawer, Button, Collapse } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import style from "./style.module.scss";
const { Header } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;
import DiplomaticLogo from "../../Assets/Logo/DiplomaticLogo.png";
import DiplomacyLogo from "../../Assets/Logo/DiplomacyLogo.png";

const Index = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerVisible(!drawerVisible);
  };

  const menuItems = [
    {
      header: "ABOUT US",
      submenu: [
        { key: "whoWeAre", label: "Who We Are", path: "/about" },
        { key: "ourStory", label: "Our Story", path: "/about" },
        { key: "ourMission", label: "Our Mission", path: "/about" },
        { key: "secretaryGeneral", label: "About Secretary-General", path: "/about" },
        { key: "dcAward", label: "DC Award", path: "/about" },
      ],
    },
    {
      header: "ACTIVITIES",
      submenu: [
        { key: "highLevelMeetings", label: "High Level Meetings", path: "/about" },
        { key: "diplomatMeetings", label: "Diplomat Meetings", path: "/board" },
        { key: "debateSessions", label: "Debate Sessions", path: "/award" },
        { key: "workshops", label: "Workshops and Seminars", path: "/board" },
        { key: "networkingEvents", label: "Networking Events", path: "/board" },
        { key: "culturalExchange", label: "Cultural Exchange Programs", path: "/board" },
      ],
    },
    {
      header: "DIPLOMACY COMMUNITY",
      submenu: [
        { key: "constitution", label: "Constitution", path: "/board" },
        { key: "internalInterests", label: "Internal Interests", path: "/about" },
        { key: "internationalInterests", label: "International Interests", path: "/award" },
        { key: "structure", label: "Structure", path: "/board" },
        { key: "stakeholders", label: "Our Stakeholders", path: "/board" },
        { key: "youngLeaders", label: "Young Leaders Platform", path: "/board" },
      ],
    },
    {
      header: "PUBLICATIONS",
      submenu: [
        { key: "journals", label: "Journals", path: "/board" },
        { key: "articles", label: "Articles", path: "/about" },
        { key: "becomeAuthor", label: "Become an Author", path: "/award" },
        { key: "shareResearch", label: "Share Your Research", path: "/award" },
      ],
    },
    {
      header: "NEWSROOM",
      submenu: [
        { key: "event1", label: "Event 1", path: "/board" },
        { key: "event2", label: "Event 2", path: "/about" },
        { key: "event3", label: "Event 3", path: "/award" },
        { key: "event4", label: "Event 4", path: "/award" },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Header className={style.Header}>
      <div className={style.Logo}>
        <div className={style.DiplomacyLogo}>
          <Image width={"100%"} preview={false} src={DiplomacyLogo} />
        </div>
        {screenSize?.width > 769 ? (
          <div className={style.DiplomaticLogo}>
            <Image
              width={"100%"}
              style={{ marginLeft: "15px", paddingTop: "20px" }}
              preview={false}
              src={DiplomaticLogo}
            />
          </div>
        ) : (
          <Button
            className={style.MenuButton}
            onClick={handleDrawerToggle}
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
          {menuItems.map(({ header, submenu }) => (
            <Dropdown
              key={header}
              overlay={
                <Menu>
                  {submenu.map(({ key, label, path }) => (
                    <Menu.Item key={key} onClick={() => navigate(path)}>
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
          ))}
        </div>
      ) : (
        <Drawer
          title="Menu"
          placement="bottom"
          closable={true}
          onClose={handleDrawerToggle}
          visible={drawerVisible}
          height="90%"
        >
          <Collapse>
            {menuItems.map(({ header, submenu }) => (
              <Panel header={header} key={header}>
                <Menu>
                  {submenu.map(({ key, label, path }) => (
                    <Menu.Item key={key} onClick={() => navigate(path)}>
                      {label}
                    </Menu.Item>
                  ))}
                </Menu>
              </Panel>
            ))}
          </Collapse>
        </Drawer>
      )}
    </Header>
  );
};

export default Index;
