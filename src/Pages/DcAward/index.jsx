import { Layout, Typography, Row, Col } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429"}}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={23} lg={23}>
              <Row>
                <Text className={style.MainRowTitle}>Diplomacy Community Awards</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                The Diplomacy Community (DC) Awards represent an esteemed tradition dedicated to honoring diplomats, political leaders, distinguished guests, and influential partners who consistently support and enrich our organization’s mission. These awards have been established as a meaningful gesture to acknowledge and celebrate individuals whose involvement and active participation profoundly impact our diplomatic engagements, events, and initiatives. Through these awards, the Diplomacy Community aims not only to express gratitude but also to promote sustained excellence, deepen relationships, and inspire ongoing collaboration within the global diplomatic community.
Since its establishment, the Diplomacy Community has actively worked to foster dialogue, strengthen international relationships, and provide platforms for meaningful diplomatic engagement. Integral to this success are the distinguished individuals who contribute their expertise, time, and leadership to the organization’s initiatives. The DC Awards symbolize our deep respect and recognition of those extraordinary contributions that have significantly advanced our shared vision of diplomacy, cooperation, and global understanding.
In awarding these two levels of recognition—the prestigious Gold Award and the respected Silver Award—the Diplomacy Community demonstrates its commitment to celebrating diplomatic excellence at all levels of international leadership and cooperation. The awards reinforce our organization’s core belief that successful diplomacy depends on the collective efforts of leaders and partners committed to mutual understanding, cooperation, and sustained dialogue.
Ultimately, these awards aim to inspire continued diplomatic engagement and motivate present and future leaders to pursue excellence in international relations, driving positive global change. The Diplomacy Community is proud to acknowledge and honor those whose efforts consistently enhance our shared goals, deepen international friendships, and promote meaningful collaboration on the world stage.
                </Text>
              </Row>
            </Col>
          </Row>
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>🥇 Gold Award</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                The Gold Award is the Diplomacy Community’s most prestigious recognition, exclusively reserved for top-level political leaders and senior diplomats, including heads of state, prime ministers, government ministers, ambassadors, and similarly influential figures. This award recognizes recipients whose exceptional leadership, diplomatic acumen, and significant support have made lasting and impactful contributions to our organization and the broader diplomatic community.

Recipients of the Gold Award have demonstrated remarkable dedication in their diplomatic roles, actively engaging in and supporting events and initiatives hosted by the Diplomacy Community. Their presence, vision, and advocacy significantly shape diplomatic discourse and global relations. By awarding them the Gold Award, the Diplomacy Community highlights these leaders’ substantial influence and accomplishments, emphasizing the vital role high-level political figures play in cultivating international peace, understanding, and collaboration.
                </Text>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>🥈 Silver Award</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                The Silver Award is conferred upon distinguished diplomats, respected special guests, notable experts, partners, and contributors whose consistent engagement and dedicated support have significantly enriched the Diplomacy Community. While recipients of this award might not occupy the highest political ranks, their contributions are nonetheless vital and indispensable to the success and growth of our diplomatic efforts.
                Recipients of the Silver Award consistently engage in productive collaboration, provide valuable insights, and lend essential support to Diplomacy Community programs and events. These individuals are recognized for their active involvement in promoting international dialogue, facilitating cross-cultural understanding, and offering expertise critical to achieving diplomatic success. Through the Silver Award, the Diplomacy Community expresses sincere gratitude to these remarkable individuals who play pivotal roles in advancing diplomatic relations and fostering partnerships across borders.
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
