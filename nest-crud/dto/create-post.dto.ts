export class CreatePostDto {
  Id: number;
  Title: string;
  Body: JSON;
  user_uuid: number;
  Created_at: Date;
  Updated_at: Date;
}
