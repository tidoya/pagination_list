import { createEffect, createStore } from "effector";
import { Comment } from "../models/comments/comments";
import { toggleLoad } from "./common";

export const fetchDataFx = createEffect(async () => {
  toggleLoad(true);
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  toggleLoad(false);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return response.json();
});

export const $comments = createStore<Comment[]>([]).on(
  fetchDataFx.doneData,
  (_, comments) => comments.map((com: Comment) => new Comment(com))
);

export const $error = createStore<Error | null>(null).on(
  fetchDataFx.failData,
  (_, error) => error
);

fetchDataFx();
