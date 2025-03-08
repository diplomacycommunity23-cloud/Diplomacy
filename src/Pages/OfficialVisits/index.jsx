import { Layout, Typography, Row, Col, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import { images2 } from "../../Assets/diplomacyCollection2";
import { ImageCarousel } from "../../Components";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={21}>
              <Row>
                <Text className={style.MainTitleText}>
                  Diplomacy Community Visited the Alley of Martyrs
                </Text>
                <Text className={style.MainTimeText}>
                  20/01/2025
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  On 20th January 2025, members of the Diplomacy Community visited the Alley of Martyrs
                  to pay tribute to the heroes who sacrificed their lives on January 20, 1990.
                  This solemn occasion served as a powerful reminder of their unwavering courage
                  and the immense price paid for our nation’s sovereignty and independence.
                </Text>
                <Text className={style.MainRowText}>
                  As we stood before the eternal flame, we reflected on the strength and
                  resilience of those who defended the dignity of our people.
                  Their sacrifice is not just a chapter in history but a legacy
                  that continues to inspire generations. The Diplomacy Community
                  remains committed to honoring their memory by upholding the values of unity, patriotism, and progress.
                </Text>
                <Text className={style.MainRowText}>
                  We will never forget.
                </Text>
                <Text className={style.MainRowText}>
                  #NeverForget #20January #DiplomacyCommunity
                </Text>
                <Text className={style.MainItalicFont}>
                  Diplomacy in
                </Text>
                <Text className={style.MainItalicFont}>
                  Dynamics,
                </Text>
                <Text className={style.MainItalicFont}>
                  Dialogue for
                </Text>
                <Text className={style.MainItalicFont}>
                  Development.
                </Text>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={20} lg={16}>
              <ImageCarousel images={images2} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
