import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.294);
  background-color: azure;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 16px 5px #262625ad;
`;

export const Description = styled.div`
  display: flex;
  font-weight: 500;
  line-height: 15px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  gap: 15px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 35%;
  margin: 50px;
  background-color: #0e0c0c26;
`;
export const UserName = styled.p`
  font-size: larger;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  color: rgba(0, 0, 0, 50%);
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;

  flex-basis: calc((100% / 3));
  border: 1px solid rgba(0, 0, 0, 0.294);
  border-bottom: 0;
  padding: 20px;
  color: rgba(0, 0, 0, 50%);
  background-color: rgba(0, 0, 0, 0.091);
`;
export const Quantity = styled.span`
  color: rgb(0, 0, 0);
  font-weight: 700;
`;
export const Label = styled.span``;
