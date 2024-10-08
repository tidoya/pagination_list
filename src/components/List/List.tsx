import { useState, useMemo } from "react";
import { useUnit } from "effector-react";

import { ListProps } from "../../types/common";
import {
  WrapperList,
  SearchInput,
  MainContent,
  TopSection,
  BottomSection,
} from "./List.styled";
import { Pagination } from "../Pagination/Pagination";
import { $currentPage } from "../../stores/list";
import { MainTable } from "../MainTable/MainTable";
import { $isDesktop } from "../../stores/common";
import { MainCards } from "../MainCards/MainCards";

export function List({ comments }: ListProps) {
  const currentPage = useUnit($currentPage),
    isDesktop = useUnit($isDesktop),
    itemsPerPage = 5,
    [filterText, setFilterText] = useState("");

  const filteredComments = useMemo(() => {
    if (!filterText) return comments;
    return comments.filter(
      (comment) =>
        comment.name.toLowerCase().includes(filterText.toLowerCase()) ||
        comment.email.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [comments, filterText]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentComments = filteredComments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredComments.length / itemsPerPage);

  return (
    <WrapperList>
      <TopSection>
        <SearchInput
          type="text"
          placeholder="Search by name or email"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </TopSection>

      <MainContent $isDesktop={isDesktop}>
        {isDesktop ? (
          <MainTable
            comments={currentComments}
            indexOfFirstItem={indexOfFirstItem}
          />
        ) : (
          <MainCards
            comments={currentComments}
            indexOfFirstItem={indexOfFirstItem}
          />
        )}
      </MainContent>
      <BottomSection>
        <Pagination totalPages={totalPages} />
      </BottomSection>
    </WrapperList>
  );
}
