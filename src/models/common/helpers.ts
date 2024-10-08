import { MobileSizesEmum } from "../../types/common";
import { ThrottleFunction } from "./types";

export function getPaginatrionPageNumbers(
  currentPage: number,
  totalPages: number
) {
  const maxPageNumbers = 5;
  const pages = [];

  if (totalPages <= maxPageNumbers) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage === 1) {
      endPage = 3;
    } else if (currentPage === totalPages) {
      startPage = totalPages - 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }
  }

  return pages;
}
export function isMobile(width: number, height: number) {
  return width < MobileSizesEmum.width && height >= MobileSizesEmum.height;
}

export function throttle<T extends ThrottleFunction>(
  func: T,
  timeout: number
): (...args: Parameters<T>) => void {
  let timer: number | null = null;

  return function perform(...args: Parameters<T>) {
    if (timer) return;

    timer = window.setTimeout(() => {
      func(...args);
      clearTimeout(timer!);
      timer = null;
    }, timeout);
  };
}
