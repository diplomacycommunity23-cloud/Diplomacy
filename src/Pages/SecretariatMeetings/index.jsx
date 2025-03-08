import { Layout, Typography, Row, Col, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import { images1 } from "../../Assets/diplomacyCollection1";
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
                  Oath to Confidentiality Ceremony – Diplomacy in Action
                </Text>
                <Text className={style.MainTimeText}>
                  01/11/2024
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community marked a significant milestone with the Oath to Confidentiality Ceremony, a solemn event where newly appointed diplomats officially pledged their commitment to the principles of diplomacy, discretion, and professionalism.
                </Text>
                <Text className={style.MainRowText}>
                  Presided over by the Secretary-General of the Diplomacy Community, this ceremony symbolized the high ethical standards and trust that define our organization. Each newly approved diplomat took the oath, affirming their dedication to upholding confidentiality, integrity, and responsibility in their diplomatic engagements.
                </Text>
                <Text className={style.MainRowText}>
                  This momentous occasion reinforces our mission to cultivate a community that values professionalism, global engagement, and cultural diplomacy. By taking this oath, our diplomats embark on a path that prioritizes international cooperation, security, and the responsible exchange of ideas—cornerstones of impactful diplomacy.
                </Text>
                <Text className={style.MainRowText}>
                  As we move forward, the Diplomacy Community remains steadfast in its commitment to fostering meaningful dialogue and building bridges across nations. This ceremony is not just a formality; it is a declaration of our shared dedication to shaping a more connected and secure world.
                </Text>
                <Text className={style.MainRowText}>
                  Diplomacy Starts Here!
                </Text>
                <Text className={style.MainRowText}>
                  #DiplomacyCommunity #OathToConfidentiality
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
              <ImageCarousel images={images1} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
