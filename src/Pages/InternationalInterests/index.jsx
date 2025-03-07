import { Layout, Typography, Row } from "antd";
const { Content } = Layout;
const { Text, Title } = Typography;
import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <div className={style.ContentWrapper}>
              <Title className={style.MainTitle}>International Interest</Title>
              <Text className={style.QuoteText}>
                "We foster international cooperation and understanding by facilitating dialogue, promoting cultural exchange,
                and supporting diplomatic initiatives to address global challenges."
              </Text>
            </div>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
