import { useModalContext } from '~/context/modal';
import Modal from './Modal';

export default function SecondModal() {
  const { onClose, onPrevious } = useModalContext();

  return (
    <Modal title='Second modal'>
      Second Modal
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab accusantium neque autem
        exercitationem! Optio, praesentium vel saepe et, eligendi dolore ipsum tempora quis culpa
        perferendis reprehenderit quo at magni. Nemo distinctio cum iusto. Voluptatum, fugiat nam!
        Voluptate incidunt deleniti, sapiente eius officia dolorum consequuntur repellat excepturi.
        Recusandae distinctio fuga, ea aliquid numquam sint voluptate quo, sed, eveniet temporibus
        quibusdam? Iste quod, dolor non similique earum, voluptatibus asperiores maxime dolores
        temporibus praesentium harum perspiciatis minima voluptates repellat quam natus quas nulla,
        mollitia fuga enim recusandae alias molestias nisi? Perferendis, nam!
      </p>
      <Modal.Actions>
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onClose}>OK</button>
      </Modal.Actions>
    </Modal>
  );
}
