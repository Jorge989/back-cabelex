import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Filiais } from "./filiais";
@Entity("funcionarios")
class Empolyee {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: true })
  nome: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  data_nascimento: Date;
  @Column({ nullable: true })
  data_admissao: Date;
  @Column({ nullable: true })
  setor: string;
  @Column({ nullable: true })
  cargo: string;

  @ManyToOne((type) => Filiais, (funcionarios) => Empolyee, { eager: true })
  filial: Filiais;

  @Column({ nullable: true })
  nivel: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at: Date;
}

export { Empolyee };
