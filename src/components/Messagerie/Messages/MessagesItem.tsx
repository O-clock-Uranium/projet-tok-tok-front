import { useAppSelector } from '../../../hooks/redux';
import { getIsMine } from '../../../store/selectors/messages';

import { Message } from '../../../@types';

function MessagesItem({ sender, content }: Message) {
  const isMine = useAppSelector(getIsMine(Number(sender)));

  return (
    <article
      className={isMine ? 'messages-item messages-item--mine' : 'messages-item'}
    >
      <p className="messages-item__content">{content}</p>
    </article>
  );
}
export default MessagesItem;
