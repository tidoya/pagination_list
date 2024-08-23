import { MainProps } from "../../types/common";
import {
  CardContainer,
  Card,
  CardItem,
  CardLabel,
  CardValue,
} from "./MainCards.styled";

export function MainCards({ comments, indexOfFirstItem }: MainProps) {
  return (
    <CardContainer>
      {comments.map((item, index) => (
        <Card key={item.id}>
          <CardItem>
            <CardLabel>Number</CardLabel>
            <CardValue>{indexOfFirstItem + index + 1}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Name</CardLabel>
            <CardValue>{item.name}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Post ID</CardLabel>
            <CardValue>{item.postId}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Email</CardLabel>
            <CardValue>{item.email}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Comments</CardLabel>
            <CardValue>{item.body}</CardValue>
          </CardItem>
        </Card>
      ))}
    </CardContainer>
  );
}
