import classNames from 'classnames';

import { useAppSelector } from '../../../hooks/redux';
import { getIsMine } from '../../../store/selectors/messages';

import { Message } from '../../../@types';

function MessagesItem({ author, content }: Message) {
  const isMine = useAppSelector(getIsMine(author));

  return (
    <article
      className={classNames('messages-item', {
        'messages-item--mine': isMine,
      })}
    >
      <p className="messages-item__author">{author}</p>
      <p className="messages-item__content">{content}</p>
    </article>
  );
}
export default MessagesItem;
