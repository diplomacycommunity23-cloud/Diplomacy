import { Layout, Typography, Row, Col, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import SecretaryGeneral from "../../Assets/Logo/SecretaryGeneral.jpg";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>

          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={2} className={style.MainImageRow}>
              <Image
                src={SecretaryGeneral}
                style={{ borderRadius: "50%" }}
                preview={{
                  maskClassName: style.hidePreviewText,
                  mask: false
                }}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={21}>
              <Row>
                <Text className={style.MainRowText}>
                  Huseyn Abdullayev, a founding Secretary-General of the Diplomacy Community,
                  established the Diplomacy Community in 2020.
                  The Secretary-General of the Diplomacy Community serves as the primary leader and representative of the
                  organization and is responsible for ensuring the effective execution of its mission and vision.
                  This role embodies the values of diplomacy, leadership, and collaboration, serving as a
                  bridge between the organization’s members and external stakeholders, such as embassies,
                  international organizations, and government bodies.
                </Text>
                <Text className={style.MainRowText}>
                  As the Secretary-General, Huseyn Abdullayev oversees the strategic direction of the community,
                  guiding initiatives that foster international cooperation, cultural exchange, and global understanding.
                  He acts as a driving force behind the planning and execution of events, seminars,
                  and projects that align with the community’s goals of promoting diplomacy and supporting
                  the professional development of Diplomacy Community’s members.
                </Text>
                <Text className={style.MainRowText}>
                  Additionally, the Secretary-General ensures that the activities of the Diplomacy Community
                  adhere to its constitution and guiding principles, including fostering friendship,
                  cooperation, and peacebuilding. By working closely with both the leadership
                  team and external partners, the Secretary-General contributes to the growth
                  of the community and the effective representation of Azerbaijan’s national interests on the global stage.
                  This role is pivotal in empowering members, enhancing their understanding of international relations,
                  and creating meaningful opportunities for engagement with the broader world. Through visionary
                  leadership and unwavering commitment, the Secretary-General ensures the Diplomacy Community remains
                  a prominent and impactful organization.
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
