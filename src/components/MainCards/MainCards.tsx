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
        <Card key={item.getValue("id")}>
          <CardItem>
            <CardLabel>Number</CardLabel>
            <CardValue>{indexOfFirstItem + index + 1}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Name</CardLabel>
            <CardValue>{item.getValue("name")}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Post ID</CardLabel>
            <CardValue>{item.getValue("postId")}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Email</CardLabel>
            <CardValue>{item.getValue("email")}</CardValue>
          </CardItem>
          <CardItem>
            <CardLabel>Comments</CardLabel>
            <CardValue>{item.getValue("body")}</CardValue>
          </CardItem>
        </Card>
      ))}
    </CardContainer>
  );
}
