import { Comment } from "../models/comments/comments";

export type ListProps = {
  comments: Comment[];
};

export type PaginationProps = {
  totalPages: number;
};

export type MainTableProps = {
  comments: Comment[];
  indexOfFirstItem: number;
};

export type PaginationItemType = {
  $active: boolean;
};

export enum MobileSizesEmum {
  width = 1024,
  height = 600,
}
