import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from "class-validator";


export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  //@IsStrongPassword()
  @IsNotEmpty()
  password : string;
}
