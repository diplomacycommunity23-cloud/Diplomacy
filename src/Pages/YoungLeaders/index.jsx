import { Layout, Typography, Row, Col } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>Young Leaders</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Young Leaders Platform at the Diplomacy Community is an initiative designed to empower and inspire the next generation of diplomats and international leaders. This
                  platform provides young individuals with unique opportunities to engage directly with experienced diplomats, participate in high-level debates, and develop essential skills for
                  their future careers in diplomacy and international relations.
                </Text>
              </Row>
            </Col>
          </Row>
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Row>
                <Text className={style.MainRowSmallTitle}>Objectives</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                • Foster Engagement with Diplomats
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Develop Leadership and Diplomatic Skills
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Encourage Critical Thinking and Debate
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Create Networking Opportunities
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Promote Cultural Exchange and Understanding
                </Text>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Row>
                <Text className={style.MainRowSmallTitle}>Activities</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                • Diplomat Meetings
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Debate Sessions
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Workshops and Seminars
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Networking Events
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Cultural Exchange Programs
                </Text>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Row>
                <Text className={style.MainRowSmallTitle}>Benefits</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                • Skill Development
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Networking
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Exposure to Diplomacy
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
• Cultural Understanding
                </Text>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
