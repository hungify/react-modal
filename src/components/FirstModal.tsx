import { useState } from 'react';
import Counter from '~/components/Counter';
import { useModalContext } from '~/context/modal';
import Modal from './Modal/Modal';
import SecondModal from './SecondModal';

export default function FirstModal() {
  const { onOpen, onClose } = useModalContext();
  const showSecondModal = () => onOpen(() => <SecondModal />);
  const [count, setCount] = useState(0);

  return (
    <Modal title='First modal'>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi repudiandae veniam ad a
        optio nisi fugit, aspernatur, est debitis quibusdam quo earum, dolorum necessitatibus. Illo
        corporis necessitatibus dignissimos provident? Iste qui minus cum. Id quasi ad voluptates
        saepe, dolor similique magnam quas deleniti perspiciatis, enim eveniet dolorum quidem omnis
        blanditiis explicabo, maiores libero
      </p>
      <br />
      <Modal.Actions>
        <button onClick={onClose}>Close</button>
        <button onClick={showSecondModal}>Next modal</button>
      </Modal.Actions>
    </Modal>
  );
}
