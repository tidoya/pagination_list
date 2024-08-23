import { createEvent, createStore } from "effector";

const setCurrentPage = createEvent<number>();
const goToPreviousPage = createEvent();
const goToNextPage = createEvent<number>();

const $currentPage = createStore(1)
  .on(setCurrentPage, (_, page) => page)
  .on(goToPreviousPage, (state) => Math.max(1, state - 1))
  .on(goToNextPage, (state, totalPages) => Math.min(totalPages, state + 1));

export { $currentPage, setCurrentPage, goToPreviousPage, goToNextPage };
