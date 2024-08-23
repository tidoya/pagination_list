import styled from "styled-components";

export const Maintable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  font-size: 16px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #009879;
  color: #ffffff;
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-child(even) {
    background-color: #f3f3f3;
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  color: #333333;
  &:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
`;
