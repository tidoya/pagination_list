import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardItem = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardLabel = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const CardValue = styled.div`
  font-size: 14px;
  color: #555;
`;
