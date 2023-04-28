import styled from '@emotion/styled';

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
  tr:nth-child(odd) {
    background: #dcdcdcd9;
    box-shadow: 0px 0px 16px 5px #262625ad;
  }
  tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.294);
  }
  tr:hover td {
    background: #e8edff;
  }
`;
