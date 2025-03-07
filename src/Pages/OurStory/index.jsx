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
                <Text className={style.MainRowTitle}>OUR STORY</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community, established in 2020, is an organization that supports the development of youth in Azerbaijan in the fields of international relations, diplomacy, and political science. This organization provides a platform for young people to enhance their knowledge and skills in global politics and establish connections with various embassies and international organizations.</Text>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
