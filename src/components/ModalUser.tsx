import { useModalContext } from '~/context/modal';
import FirstModal from './FirstModal';

export default function ModalUser() {
  const { onOpen } = useModalContext();

  const handleOpenFirstModal = () => onOpen(() => <FirstModal />);

  return (
    <>
      <button onClick={handleOpenFirstModal}>Open Modal</button>
    </>
  );
}
