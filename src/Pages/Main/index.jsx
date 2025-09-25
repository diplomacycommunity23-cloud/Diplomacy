import { Layout, Typography, Row, Col } from "antd";
import { ImageCarousel } from "../../Components";
import { images1 } from "../../Assets/diplomacyCollection1";
import { images2 } from "../../Assets/diplomacyCollection2";
import { images4 } from "../../Assets/diplomacyCollection4";

const { Content } = Layout;
const { Text } = Typography;

import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        {/* Video kısmı - Header'dan sonra gelecek */}
        <div style={{ height: "70vh", width: "100%", overflow: "hidden", position: "relative" }}>
          <video className={style.DiplomacyVideo} autoPlay loop muted playsInline>
            <source
              src="/DiplomacyVideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className={style.DiplomacyVideoMainContainer}>
            <div className={style.DiplomacyVideoContainer}>
              <Row>
                <Text className={style.DiplomacyVideoTitle}>Diplomacy Community</Text>
              </Row>
              <Row>
                <Text className={style.DiplomacyVideoText}>
                  Diplomacy in Dynamics, Dialogue for Development
                </Text>
              </Row>
            </div>
          </div>
        </div>
        
        {/* Resimler kısmı - Video'dan sonra gelecek */}
        <div className={style.MainContainer}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={8}>
              <ImageCarousel images={images1} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <ImageCarousel images={images2} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <ImageCarousel images={images4} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
