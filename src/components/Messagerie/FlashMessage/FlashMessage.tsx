import { Flash } from '../../../@types';
import './FlashMessage.scss';

function FlashMessage({ type, duration, children }: Flash) {
  return (
    <div
      className={`flash flash--${type}`}
      style={{ animationDuration: `${duration ?? 3000}ms` }}
    >
      {children}
    </div>
  );
}

export default FlashMessage;
