import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ModalContextProps {
  children?: ReactNode;
}

interface ModalContextType {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<ModalContextProps> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
    console.log("Modal Opened");
  };

  const closeModal = () => {
    setShowModal(false);
    console.log("Modal Closed");
  };

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
