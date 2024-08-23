import { useUnit } from "effector-react";

import { PaginationProps } from "../../types/common";
import {
  PaginationContainer,
  PaginationItem,
  PaginationButton,
} from "./Pagination.styled";
import { getPaginatrionPageNumbers } from "../../models/common/helpers";
import {
  $currentPage,
  goToNextPage,
  goToPreviousPage,
  setCurrentPage,
} from "../../stores/list";

export function Pagination({ totalPages }: PaginationProps) {
  const currentPage = useUnit($currentPage);

  const prePage = () => {
    goToPreviousPage();
  };

  const nextPage = () => {
    goToNextPage(totalPages);
  };

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationContainer>
      <PaginationButton onClick={prePage} disabled={currentPage === 1}>
        Previous
      </PaginationButton>
      <ul>
        {getPaginatrionPageNumbers(currentPage, totalPages).map((number) => (
          <PaginationItem key={number} $active={currentPage === number}>
            <a href="#" onClick={() => changePage(number)}>
              {number}
            </a>
          </PaginationItem>
        ))}
      </ul>
      <PaginationButton
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
}
