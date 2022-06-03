import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

  Modal.setAppElement('#root');
  
export function App() {
  /*Serve para criar o Modal e dizer que está aberto*/
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  
  function handleOpenTransactionModalOpen() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModalOpen() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

