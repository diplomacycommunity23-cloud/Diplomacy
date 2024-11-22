import { ConfigProvider } from 'antd';
import Routes from './Routes';

const themeAntd = {
   token: {
      fontFamily: 'Rubik, sans-serif',
      fontWeight: "600"
   },
};

const Index = () => (
   <ConfigProvider theme={themeAntd}>
      <Routes />
   </ConfigProvider>
)

export default Index;