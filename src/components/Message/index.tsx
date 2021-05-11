import noPhoto from 'assets/header-no-photo.png';
import styled from 'styled-components';
import { IUser } from 'types';

interface IMessageComponent {
  message: string;
  user: IUser;
}

const MessageWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const MessageText = styled.p`
  margin-top: auto;
  padding-left: 8px;
`;

const Message = (props: IMessageComponent) => {
  const { message, user } = props;
  return (
    <MessageWrapper>
      <Avatar src={user?.photo ?? noPhoto} alt={`${user?.name}_avatar`} />
      <MessageText>{message}</MessageText>
    </MessageWrapper>
  );
};

export { Message };
