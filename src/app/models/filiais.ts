import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Empolyee } from "./Funcionarios";
@Entity()
export class Filiais {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  name: string;
  @OneToMany((type) => Empolyee, (filial) => Filiais)
  funcionarios: Empolyee[];
}
