import { MainProps } from "../../types/common";
import {
  Maintable,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./MainTable.styled";

export function MainTable({ comments, indexOfFirstItem }: MainProps) {
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
          <TableRow key={item.getValue("id")}>
            <TableCell>{indexOfFirstItem + index + 1}</TableCell>
            <TableCell>{item.getValue("name")}</TableCell>
            <TableCell>{item.getValue("postId")}</TableCell>
            <TableCell>{item.getValue("email")}</TableCell>
            <TableCell>{item.getValue("body")}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Maintable>
  );
}
