import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import EmptyMessages from "../../components/MessageBox/EmptyMessages";
import Modal from "../../components/UI/Modal/Modal";
import MessageContainer from "../../components/MessageBox/MessageContainer";

const Dashboard = () => {
  return (
    <section>
      <Sidebar />
      {/* <EmptyMessages /> */}
      {/* <Modal /> */}
      <MessageContainer />
    </section>
  );
};

export default Dashboard;
