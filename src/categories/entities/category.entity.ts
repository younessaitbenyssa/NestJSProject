import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Category {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    categorie : string 
}
