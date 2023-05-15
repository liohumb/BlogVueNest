import { IsEmail, IsString, MinLength } from '@nestjs/class-validator';

export class UserCreateDto {
  @IsEmail()
  username: string;

  @IsString()
  @MinLength(8)
  password: string;
}
