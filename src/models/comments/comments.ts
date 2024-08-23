import { BaseModel } from "../common/base";

export class Comment extends BaseModel {
  postId: number;
  name: string;
  email: string;
  body: string;

  constructor(com: Comment) {
    super(com);
    this.name = com.name;
    this.postId = com.postId;
    this.email = com.email;
    this.body = com.body;
  }
}
