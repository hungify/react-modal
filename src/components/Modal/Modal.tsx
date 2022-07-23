import { useModalContext } from '~/context/modal';
import styles from './Modal.module.css';
interface ModalProps {
  title: string;
  children?: React.ReactNode;
}
export default function Modal({ title, children }: ModalProps) {
  const { onClose } = useModalContext();

  return (
    <div className={styles['container']}>
      <button className={styles['backdrop']} onClick={onClose} />
      <div className={styles['modal']}>
        <div className={styles['modal-header']}>
          <h2 className={styles['title']}>{title}</h2>
          <button onClick={onClose} className={styles['modal-close']}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
            </svg>
          </button>
        </div>
        <div className={styles['modal-body']}>{children}</div>
      </div>
    </div>
  );
}

interface ModalActionsProps {
  children: React.ReactNode;
}

function ModalActions({ children }: ModalActionsProps) {
  return <div className={styles['modal-actions']}>{children}</div>;
}

Modal.Actions = ModalActions;
