import { Layout, Dropdown, Menu, Typography, Image } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import style from "./style.module.scss";
const { Header } = Layout;
const { Text } = Typography;
import HeaderLogo from "../../Assets/Logo/HeaderLogo.png";

const Index = () => {
  const navigate = useNavigate();

  const aboutUsMenu = (
    <Menu>
      <Menu.Item key="ngic" onClick={() => navigate("/about")}>
        NGIC
      </Menu.Item>
      <Menu.Item key="ngiAward" onClick={() => navigate("/award")}>
        NGI Award
      </Menu.Item>
      <Menu.Item key="board" onClick={() => navigate("/board")}>
        Board of Trustees
      </Menu.Item>
      <Menu.Item key="members" onClick={() => navigate("/members")}>
        Members
      </Menu.Item>
      <Menu.Item key="structure" onClick={() => navigate("/structure")}>
        Structure
      </Menu.Item>
      <Menu.Item key="partners" onClick={() => navigate("/partners")}>
        Partners
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={style.Header}>
      <div className={style.Logo}>
        <Image width={"100%"} preview={false} src={HeaderLogo} />
      </div>
      <div className={style.NavBar}>
        <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            ABOUT US
          </Text>
        </Dropdown>

        <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            ACTIVITIES
          </Text>
        </Dropdown>

        <Text className={style.NavBarText} href="#forum">
          GLOBAL BAKU FORUM
        </Text>

        <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
          <Text className={style.NavBarText} onClick={(e) => e.preventDefault()}>
            PUBLICATIONS
          </Text>
        </Dropdown>

        <Text className={style.NavBarText} href="#newsroom">
          NEWSROOM
        </Text>
      </div>
    </Header>
  );
};

export default Index;
