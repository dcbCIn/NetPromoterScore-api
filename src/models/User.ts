import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class User {

  @PrimaryGeneratedColumn("increment")
  readonly id: number | undefined

  @Column()
  name: string = ''

  @Column()
  email: string = ''

  @CreateDateColumn()
  created_at: Date | undefined

  @UpdateDateColumn()
  updated_at: Date | undefined

  constructor() {
  }
}

export { User }