import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  cadastro_de_imagem: string;

  @Column('text')
  nome: string;

  @Column('int')
  valor: number;

  @Column('text')
  descricao: string

  @Column('text')
  cidade: string;

  @Column()
  staus: boolean;
}