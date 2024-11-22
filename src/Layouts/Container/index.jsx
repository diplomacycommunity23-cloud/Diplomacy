import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

const Index = () => {
    return (
        <Content >
            <Outlet />
        </Content>
    )
}
export default Index;