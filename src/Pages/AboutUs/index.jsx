import { Layout, Typography, Row, Col } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Content>
        <div className="site-layout-content" style={{ background: '#fff', padding: 24 }}>
          <Row gutter={16}>
            <Col span={24}>
              <Title level={2}>Who We Are</Title>
              <p>
                The Diplomacy Community is a non-governmental organization (NGO) dedicated to fostering international cooperation, dialogue, and cultural exchange. Based in Azerbaijan, the organization collaborates with diplomats, international institutions, and policymakers to address global challenges and promote mutual understanding among nations. We work at the crossroads of diplomacy and international relations, serving as a hub for meaningful conversations and actionable initiatives.
              </p>
              <Title level={2}>Our Story</Title>
              <p>
                The Diplomacy Community was established in 2020 at ADA University to contribute to global diplomacy through impactful events, collaborations, and policy discussions. Since its inception, the organization has built strong relationships with ambassadors, politicians, international organizations, and influential leaders, driving projects that prioritize dialogue and constructive solutions to the pressing challenges of our times.
              </p>

              <Title level={2}>Our Mission</Title>
              <p>
                Our mission is to advance international diplomacy by providing a platform for dialogue, collaboration, and cultural understanding. We are committed to bridging gaps between cultures and fostering partnerships that promote peace, prosperity, and sustainable development in a rapidly changing world.
                The Diplomacy Community stands as a platform where future diplomats and policymakers develop the skills and connections to address the complexities of our globalized world.
              </p>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
