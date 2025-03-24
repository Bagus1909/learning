import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./dashboard.less";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <Layout>
        <Header
          className='dashboard-header'
          theme='light'
        >
          Header
        </Header>
        <Layout>
          <Sider
            className='dashboard-sider'
            width={240}
            breakpoint='lg'
            theme='light'
            collapsible
          >
            Sider
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
