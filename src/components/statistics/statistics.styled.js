import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: azure;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.294);
  box-shadow: 0px 0px 16px 5px #262625ad;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsData = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  border: 1px solid rgba(0, 0, 0, 0.294);
  padding: 10px;
  color: rgba(0, 0, 0, 50%);
  background-color: ${color => color.color};
`;

export const Percentage = styled.span`
  color: rgb(0, 0, 0);
  font-weight: 700;
`;

export const Label = styled.span`
  color: rgba(0, 0, 0, 60%);
  font-weight: 500;
`;
