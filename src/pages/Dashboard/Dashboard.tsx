import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import EmptyMessages from "../../components/MessageBox/EmptyMessages";
import Modal from "../../components/UI/Modal/Modal";

const Dashboard = () => {
  return (
    <section>
      <Sidebar />
      {/* <EmptyMessages /> */}
      <Modal />
    </section>
  );
};

export default Dashboard;
