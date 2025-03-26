import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./dashboard.less";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <Layout>
        <Header
          className='dashboard-header'
          theme='light'
        >
          <Navbar />
        </Header>
        <Layout>
          <Sider
            className='dashboard-sider'
            width={240}
            breakpoint='lg'
            theme='light'
            collapsible
          >
            <Sidebar />
          </Sider>
          <Content className='dashboard-content'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
