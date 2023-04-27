import styled from '@emotion/styled';

export const FriendInfo = styled.li`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.294);
  box-shadow: 0px 0px 16px 5px #262625ad;
  padding: 15px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${prop => (prop.isOnline ? 'green' : 'red')};
`;
