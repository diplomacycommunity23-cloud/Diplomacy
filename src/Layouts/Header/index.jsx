import { Layout, Dropdown, Menu, Typography, Image } from 'antd';
import style from './style.module.scss';
const { Header } = Layout;
const { Text } = Typography;

const Index = () => {
    const aboutUsMenu = (
        <Menu>
            <Menu.Item key="ngic">NGIC</Menu.Item>
            <Menu.Item key="ngiAward">NGI Award</Menu.Item>
            <Menu.Item key="board">Board of Trustees</Menu.Item>
            <Menu.Item key="members">Members</Menu.Item>
            <Menu.Item key="structure">Structure</Menu.Item>
            <Menu.Item key="partners">Partners</Menu.Item>
        </Menu>
    );

    return (
        <Header className={style.Header}>
            <div className={style.Logo}>
                <Image
                    width={150}
                    preview={false}
                    src="/HeaderLogo.png"
                />
            </div>
            <div className={style.NavBar} >
                <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
                    <Text className={style.NavBarText} onClick={e => e.preventDefault()} href="#">
                        ABOUT US
                    </Text>
                </Dropdown>

                <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
                    <Text className={style.NavBarText} onClick={e => e.preventDefault()} href="#">
                        ACTIVITIES
                    </Text>
                </Dropdown>

                <Text className={style.NavBarText} href="#forum">
                    GLOBAL BAKU FORUM
                </Text>

                <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
                    <Text className={style.NavBarText} onClick={e => e.preventDefault()} href="#">
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