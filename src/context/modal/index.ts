import { useContext } from 'react';
import { ModalContext } from '~/context/modal/ModalContext';

export { default as ModalProvider } from './ModalContext';

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
}
