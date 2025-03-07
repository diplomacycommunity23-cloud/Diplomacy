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
                <Text className={style.MainRowTitle}>Who We Are</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The primary objective of the Diplomacy Community is to strengthen national interests through international diplomacy and support foreign representations operating within the country. Additionally, its core goals include promoting international cooperation and understanding. To achieve this, the community facilitates dialogue, encourages cultural exchange, and supports diplomatic initiatives aimed at solving global challenges.

                  Furthermore, the Diplomacy Community organizes various events, seminars, and conferences, providing students with ample opportunities to develop their skills in diplomacy.
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
