import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

const initialState = {
  onOpen: () => undefined,
  onClose: () => undefined,
  onPrevious: () => undefined,
};

export type ModalContext = {
  onOpen: (modal: () => JSX.Element) => void;
  onClose: () => void;
  onPrevious: () => void;
};

export const ModalContext = createContext<ModalContext>(initialState);

interface ModalContextProviderProps {
  children: React.ReactNode;
}

const push = (modal: () => JSX.Element) => (prevModals: JSX.Element[]) => [...prevModals, modal()];
const pop = (modals: JSX.Element[]) => modals.slice(0, modals.length - 1);

export default function ModalProvider({ children }: ModalContextProviderProps) {
  const [modals, setModals] = useState<JSX.Element[]>([]);
  const onOpen = (modal: () => JSX.Element) => setModals(push(modal));
  const onClose = () => setModals([]);
  const onPrevious = () => setModals(pop);

  const latestModal = modals[modals.length - 1];

  return (
    <ModalContext.Provider value={{ onOpen, onClose, onPrevious }}>
      {children}
      {!!modals.length && createPortal(latestModal, document.body)}
    </ModalContext.Provider>
  );
}
