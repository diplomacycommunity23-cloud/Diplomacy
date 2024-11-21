import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

const Index = () => {
    return (
        <Content style={{ marginTop: '-64px' }} >
            <Outlet />
        </Content>
    )
}
export default Index;