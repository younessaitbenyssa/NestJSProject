import { IsNotEmpty, IsString } from "class-validator";


export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categorie : string
}
