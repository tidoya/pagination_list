import { MainTableProps } from "../../types/common";
import {
  Maintable,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./MainTable.styled";

export function MainTable({ comments, indexOfFirstItem }: MainTableProps) {
  return (
    <Maintable>
      <TableHead>
        <tr>
          <TableHeader>Number</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Post id</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Comments</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {comments.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell>{indexOfFirstItem + index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.postId}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.body}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Maintable>
  );
}
