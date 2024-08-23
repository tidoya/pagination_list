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

export const WrapperList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 20px;
`;

export const TopSection = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const MainContent = styled.section`
  flex-grow: 1;
  width: 100%;
  height: 700px;
  overflow: hidden;
`;

export const BottomSection = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 8px 12px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #009879;
    box-shadow: 0 0 5px rgba(0, 152, 121, 0.5);
  }
`;
