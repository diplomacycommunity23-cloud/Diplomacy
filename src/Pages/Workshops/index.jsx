import { Layout, Typography, Row, Col, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import { images4 } from "../../Assets/diplomacyCollection4";
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
              Diplomacy Community Represented at ADA University
                </Text>
                <Text className={style.MainTimeText}>
                  23/10/2024
                </Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  We are proud to have officially presented the Diplomacy Community Stand at ADA University, marking a significant step in our mission to engage with aspiring diplomats, professionals, and students passionate about global affairs.
                </Text>
                <Text className={style.MainRowText}>
                  The day was filled with insightful discussions on international relations, diplomacy, and the role of cross-cultural collaboration in shaping today’s interconnected world. Our stand became a dynamic space where students and future diplomats explored opportunities within the Diplomacy Community, gaining valuable insights into the impact of diplomacy in international cooperation, conflict resolution, and policy-making.
                </Text>
                <Text className={style.MainRowText}>
                  Through meaningful conversations and shared experiences, we reaffirmed our commitment to fostering dialogue, understanding, and collaboration on a global scale. We are grateful to everyone who stopped by, expressed interest, and joined us in our mission to promote diplomacy as a driving force for peace and development.
                </Text>
                <Text className={style.MainRowText}>
                  This is just the beginning! Stay tuned for upcoming events, workshops, and exclusive opportunities to be part of an active and influential diplomatic network. Together, we continue to shape the future of diplomacy.
                </Text>
                <Text className={style.MainRowText}>
                  Diplomacy Starts Here!
                </Text>
                <Text className={style.MainRowText}>
                  #DiplomacyCommunity #OathToConfidentiality #GlobalEngagement
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
              <ImageCarousel images={images4} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
