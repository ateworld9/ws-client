import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addMessage, fetchUserById } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { IMessage, IUser } from 'types';

import s from './DialogPage.module.css';
import noPhoto from 'assets/header-no-photo.png';
import { Message } from 'components';

const DialogPage = (props: { wsConnection: WebSocket }) => {
  const { wsConnection } = props;
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const user = useAppSelector<IUser>((state) => state.user.user);
  const sessionUser = useAppSelector<IUser>((state) => state.user.sessionUser);
  const messages = useAppSelector<IMessage[]>((state) => state.dialog.messages);

  const [newMessageText, setNewMessageText] = useState<string>('');

  const handleSendMessage = () => {
    const wsSend = (message: string) => {
      if (!wsConnection.readyState) {
        setTimeout(function () {
          wsSend(message);
        }, 1000);
      } else {
        wsConnection.send(message);
      }
    };

    wsConnection.onmessage = (message: any) => {
      const json = JSON.parse(message.data);
      console.log(json);

      switch (json.actionType) {
        case 'chat-message':
          dispatch(addMessage(json.payload));
          break;
        default:
          return; // ws.send(new Error('Wrong query').message);
      }
    };

    wsSend(
      JSON.stringify({
        actionType: 'chat-message',
        payload: {
          message: newMessageText,
          from: sessionUser?._id,
          to: user?._id,
        },
      })
    );
  };

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id, dispatch]);
  return (
    <section id="dialog" className={s.container}>
      <div className={s.userPanel}>
        <h2>{user?.name}</h2>
        <img
          src={user?.photo ?? noPhoto}
          alt={`${user?.name}_avatar`}
          className={s.userAvatar}
        />
      </div>

      <div className={s.messagesWrapper}>
        {messages.map((message, i) => (
          <Message
            key={message.message + i}
            message={message.message}
            user={message.from === user?._id ? user : sessionUser}
          />
        ))}
      </div>
      <div className={s.newMessageWrapper}>
        <input
          type="text"
          value={newMessageText}
          onChange={(event) => {
            setNewMessageText(event.target.value);
          }}
          className={s.newMessageInput}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </section>
  );
};

export { DialogPage };
