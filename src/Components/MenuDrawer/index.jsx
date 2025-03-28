import React, { useState } from "react";
import { Menu, Drawer, Collapse, Typography, Image } from "antd";
import DiplomacyLogo from "../../Assets/Logo/DiplomacyLogo.png";
import LogoBlack from "../../Assets/Logo/LogoBlack.png";
import { CloseOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;
const { Text } = Typography;

import "./styles.scss";
import style from "./style.module.scss";

const ImageCarousel = ({ open, openDrawer, items }) => {
  const navigate = useNavigate();
  const [activePanels, setActivePanels] = useState([]);

  const handlePanelChange = (keys) => {
    setActivePanels(keys);
  };

  const handleDrawerClose = () => {
    openDrawer(); 
    setActivePanels([]);
  };

  return (
    <Drawer
      placement="bottom"
      closable={true}
      onClose={handleDrawerClose}
      open={open}
      height="100%"
    >
      <div className={style.DrawerHeader}>
        <div className={style.DiplomacyLogo}>
          <Image
            style={{borderRadius: "3vmin" }}
            width={"20%"}
            preview={false}
            src={LogoBlack}
          />
        </div>
        <div onClick={handleDrawerClose} className={style.DrawerCloseIcon}>
          <CloseOutlined style={{ color: "#0d1429" }} />
        </div>
      </div>
      <Collapse
        className={style.DrawerCollapse}
        activeKey={activePanels}
        onChange={handlePanelChange}
      >
        {items.map(({ header, submenu = [] }) => (
          <Panel
          header={
            <Text className={style.MenuText}>
                {header.charAt(0).toUpperCase() + header.slice(1).toUpperCase()}
              </Text>
            }
            expandIcon={({ isActive }) =>
              isActive ? (
                <DownOutlined style={{ color: "#ffffff" }} />
              ) : (
                <RightOutlined style={{ color: "#ffffff" }} />
              )
            }
            key={header}
            >
            {submenu.length > 0 && (
              <Menu>
                {submenu.map(({ key, label, path, disabled }) => (
                  <Menu.Item
                    key={key}
                    onClick={() => {
                      if (path.startsWith('http')) {
                        window.open(path, '_blank');
                      } else {
                        navigate(path);
                      }
                      handleDrawerClose(); 
                    }}
                  >
                    <Text style={disabled ? { color: "gray", cursor: "not-allowed" } : {}} className={style.SubMenuText}>{label}</Text>
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </Panel>
        ))}
      </Collapse>
    </Drawer>
  );
};

export default ImageCarousel;
