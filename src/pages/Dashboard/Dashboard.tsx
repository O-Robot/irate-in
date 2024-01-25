import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import EmptyMessages from "../../components/MessageBox/EmptyMessages";
import Modal from "../../components/UI/Modal/Modal";
import MessageContainer from "../../components/MessageBox/MessageContainer";
import { ModalProvider, useModal } from "../../context/ModalContext";

const Dashboard = () => {
  return (
    <section>
      <Sidebar />
      {/* <EmptyMessages /> */}
      {/* {children} */}
      <Modal children />
      <MessageContainer />
    </section>
  );
};

export default Dashboard;
