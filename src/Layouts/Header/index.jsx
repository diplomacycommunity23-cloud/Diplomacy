import { Layout, Dropdown, Menu } from 'antd';
import style from './style.module.scss';
const { Header } = Layout;
import { DownOutlined } from '@ant-design/icons';

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
            <div className="logo" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>LOGO</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'white' }}>
                <Dropdown overlay={aboutUsMenu} placement="bottomCenter">
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#">
                        ABOUT US <DownOutlined />
                    </a>
                </Dropdown>
                <a href="#activities">ACTIVITIES</a>
                <a href="#forum">GLOBAL BAKU FORUM</a>
                <a href="#publications">PUBLICATIONS</a>
                <a href="#newsroom">NEWSROOM</a>
            </div>
        </Header>
    );
};

export default Index;