

import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{
@PrimaryGeneratedColumn() //auto generate id + 1 
id : number;
   
@Column()
name : string;

@Column()
email : string;

@Column()
password : string;
}