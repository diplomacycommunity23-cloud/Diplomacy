import { Layout, Dropdown, Menu, Typography, Image } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import style from "./style.module.scss";
const { Header } = Layout;
const { Text } = Typography;
import DiplomaticLogo from "../../Assets/Logo/DiplomaticLogo.png";
import DiplomacyLogo from "../../Assets/Logo/DiplomacyLogo.png";

const Index = () => {
  const navigate = useNavigate();

  const aboutUsMenu = (
    <Menu>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        Who We Are
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        Our Story
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        Our Mission
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        About Secretary-General
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        DC Award
      </Menu.Item>
    </Menu>
  );

  const activitesMenu = (
    <Menu>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        High Level Meetings
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Diplomat Meetings
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        Debate Sessions
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Workshop and Seminars
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Networking Events
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Cultural Exchange Programs
      </Menu.Item>
    </Menu>
  );

  const diplomacyCommunityMenu = (
    <Menu>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Constitution
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        Internal Interests
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        International Interests
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Structure
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Our Stake Holders
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Young Leaders Platform
      </Menu.Item>
    </Menu>
  );

  const publicationsMenu = (
    <Menu>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Journals
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        Articles
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        Become an Author
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        Share Your Research
      </Menu.Item>
    </Menu>
  );

  const newsroomMenu = (
    <Menu>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Event 1
      </Menu.Item>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        Event 2
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        Event 3
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        Event 4
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={style.Header}>
      <div className={style.Logo}>
        <div>
          <Image width={"100%"} preview={false} src={DiplomacyLogo} />
        </div>
        <div>
          <Image
            width={"100%"}
            style={{ marginLeft: "15px", paddingTop: "20px" }}
            preview={false}
            src={DiplomaticLogo}
          />
        </div>
      </div>
      <div className={style.NavBar}>
        <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            ABOUT US
          </Text>
        </Dropdown>

        <Dropdown overlay={activitesMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            ACTIVITIES
          </Text>
        </Dropdown>

        <Dropdown overlay={diplomacyCommunityMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            DIPLOMACY COMMUNITY
          </Text>
        </Dropdown>

        <Dropdown overlay={publicationsMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            PUBLICATIONS
          </Text>
        </Dropdown>

        <Dropdown overlay={newsroomMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            NEWSROOM
          </Text>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Index;
