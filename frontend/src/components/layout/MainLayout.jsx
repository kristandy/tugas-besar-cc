// src/components/Layout/MainLayout.jsx
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Bagian kanan: Header + Content */}
      <Layout>
        <Header style={{
          background: '#fff',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Anda bisa menambahkan menu/profile di kanan header di sini */}
        </Header>
        
        <Content style={{ margin: '16px' }}>
          {/* Komponen konten utama yang di‐pass dari props */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
