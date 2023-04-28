import styled from '@emotion/styled';
import { isOdd, isShadow } from 'components/utils/isOdd';

export const Table = styled.table`
  overflow: hidden;
  box-shadow: 0px 0px 16px 5px #262625ad;
  background-color: azure;
  padding: 5px;

  th {
    border-bottom: 4px solid rgba(0, 0, 0, 0.294);
    padding: 10px;
    background-color: #506168;
    color: #fff;
    box-shadow: -2px 0px 9px 6px #262625ad;
  }
  td {
    padding: 10px;
  }

  tr:hover td {
    background: #e8edff;
  }
`;
export const Tr = styled.tr`
  background: ${isOdd};
  box-shadow: ${isShadow};
`;
