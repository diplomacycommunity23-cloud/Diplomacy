import { Layout, Typography, Row, Col, Image } from 'antd';
import style from './style.module.scss';
import { ImageCarousel } from '../../Components';

const { Content } = Layout;
const { Title, Text } = Typography;

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
          <video style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0 }} autoPlay muted>
            <source src="src\Assets\Videos\Comp 1_5.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <Col span={11}>
              <Row>
                <Title className={style.MainRowTitle} level={2}>Who We Are</Title>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community is a non-governmental organization (NGO) dedicated to fostering international cooperation,
                  dialogue, and cultural exchange. Based in Azerbaijan, the organization collaborates with diplomats, international
                  institutions, and policymakers to address global challenges and promote mutual understanding among nations.
                  We work at the crossroads of diplomacy and international relations, serving as a hub for meaningful conversations
                  and actionable initiatives.
                </Text>
              </Row>
            </Col>
            <Col span={11}>
              <Row >
                <Title className={style.MainRowTitle} level={2}>What is Lorem Ipsum?</Title>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                </Text>
              </Row>
            </Col>
          </Row>
          <Row className={style.MainImageRow}>
            <Image
              preview={false}
              src="src\Assets\Logo\HeaderLogo.png"
            />
          </Row>
          <Row className={style.MainRow}>
            <Col span={11}>
              <Row>
                <Title className={style.MainRowTitle} level={2}>Our Story</Title>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community was established in 2020 at ADA University to contribute to global diplomacy
                  through impactful events, collaborations, and policy discussions. Since its inception, the organization
                  has built strong relationships with ambassadors, politicians, international organizations, and
                  influential leaders, driving projects that prioritize dialogue and constructive solutions to
                  the pressing challenges of our times.
                </Text>
              </Row>
            </Col>
            <Col span={11}>
              <Row>
                <Title className={style.MainRowTitle} level={2}>Our Mission</Title>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  Our mission is to advance international diplomacy by providing a platform for dialogue,
                  collaboration, and cultural understanding. We are committed to bridging gaps between
                  cultures and fostering partnerships that promote peace, prosperity, and sustainable
                  development in a rapidly changing world. The Diplomacy Community stands as a platform
                  where future diplomats and policymakers develop the skills and connections to address
                  the complexities of our globalized world.
                </Text>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={style.RotatingContainer}>
          <Row>
            <Col span={11}>
              <Text className={style.RotatingRowTitle}>COP29</Text>
            </Col>
            <Col span={11}>
              <Text className={style.RotatingRowText}>
                The 2024 United Nations Climate Change Conference or Conference of the Parties of the UNFCCC,
                more commonly known as COP29, is the 29th United Nations Climate Change conference. COP29
                is being held in Baku, Azerbaijan, from 11 to 22 November 2024. Mukhtar Babayev presides
                COP29, while Samir Nuriyev heads the Organising Committee.
              </Text>
            </Col>
          </Row>
        </div>
        <ImageCarousel />
      </Content>
    </Layout>
  );
}

export default App;
