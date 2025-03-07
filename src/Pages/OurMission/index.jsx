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
                <Text className={style.MainRowTitle}>OUR MISSION</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community’s mission is not limited to students but encompasses broader objectives and activities. Its main mission is to serve state interests, strengthen the defense of national interests on the international stage, and establish a strong foundation to achieve these goals.
                  The community collaborates with experienced diplomats currently in active service, leveraging their expertise and knowledge to achieve its primary goals in the field of diplomacy.
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
