import styled from "styled-components";
import { PaginationItemType } from "../../types/common";

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 20px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 10px;
  }
`;

export const PaginationItem = styled.li<PaginationItemType>`
  margin: 0 5px;
  a {
    display: block;
    padding: 8px 12px;
    border: 1px solid #009879;
    border-radius: 4px;
    text-decoration: none;
    color: ${({ $active }) => ($active ? "#ffffff" : "#009879")};
    background-color: ${({ $active }) => ($active ? "#009879" : "#ffffff")};
    cursor: pointer;
    &:hover {
      background-color: ${({ $active }) => ($active ? "#009879" : "#f1f1f1")};
    }
  }
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid #009879;
  border-radius: 4px;
  background-color: #ffffff;
  color: #009879;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #009879;
    color: #ffffff;
  }
  &:disabled {
    background-color: #dddddd;
    color: #888888;
    border-color: #dddddd;
    cursor: not-allowed;
  }
`;
