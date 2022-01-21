import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: String;

  @IsNotEmpty()
  @IsString()
  password: String;

}