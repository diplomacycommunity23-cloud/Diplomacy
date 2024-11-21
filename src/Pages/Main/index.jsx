import { Layout, Typography, Row, Col } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout" style={{ minHeight: '300vh' }}>
      <Content style={{ marginTop: '-64px' }}>
        <div style={{ height: '80vh', width: '100%', overflow: 'hidden' }}>
          <video style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0 }} autoPlay loop muted>
            <source src="/Diplomacy1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: '220vh', marginTop: '80vh' }}>
          <Row gutter={16}>
            <Col span={24}>
              <Title level={2}>Welcome to Our Website</Title>
              <p>This is a simple example to showcase the layout you&apos;ve mentioned with a video and a custom transparent navbar overlapping the video.</p>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
