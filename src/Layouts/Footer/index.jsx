


import style from './style.module.scss';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Layout, Typography, Input, Button } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;
const { Footer } = Layout;

const Index = () => {
  return (
    <Footer className={style.Footer}>
      <div style={{ flex: 1 }}>
        <Title level={4} style={{ color: 'white' }}>Contact Us</Title>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" style={{ margin: '10px 0' }} />
        <TextArea rows={3} placeholder="Your Message" />
        <Button type="primary" style={{ marginTop: '10px' }}>Send</Button>
      </div>
      <div style={{ flex: 1 }}>
        <Title level={4} style={{ color: 'white' }}>Contact Info</Title>
        <p>123 Street Name</p>
        <p>City, Country</p>
        <p>+123 456 7890</p>
      </div>
      <div style={{ flex: 1 }}>
        <Title level={4} style={{ color: 'white' }}>About Us</Title>
        <p>Information about the company, mission, vision, etc.</p>
      </div>
      <div style={{ flex: 1 }}>
        <Title level={4} style={{ color: 'white' }}>Follow Us</Title>
        <div style={{ display: 'flex', gap: '10px' }}>
          <FacebookOutlined style={{ fontSize: '24px' }} />
          <TwitterOutlined style={{ fontSize: '24px' }} />
          <InstagramOutlined style={{ fontSize: '24px' }} />
          <LinkedinOutlined style={{ fontSize: '24px' }} />
        </div>
      </div>
    </Footer>
  );
};

export default Index;