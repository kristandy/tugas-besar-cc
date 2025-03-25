// src/components/Layout/Sidebar.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '../../assets/logo.png'; // Sesuaikan path relatif

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider collapsible style={{ background: '#fff' }}>
      <div style={{ margin: 16, textAlign: 'center' }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/therapists">Terapis</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
