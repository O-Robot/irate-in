import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import EmptyMessages from "../../components/MessageBox/EmptyMessages";

const Dashboard = () => {
  return (
    <section>
      <Sidebar />
      <EmptyMessages />
    </section>
  );
};

export default Dashboard;
