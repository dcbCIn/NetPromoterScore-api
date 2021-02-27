import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("surveys")
class Survey {

  @PrimaryGeneratedColumn("increment")
  readonly id: number | undefined

  @Column()
  title: string = ''

  @Column()
  description: string = ''

  @CreateDateColumn()
  created_at: Date | undefined

  @UpdateDateColumn()
  updated_at: Date | undefined

  constructor() {
  }
}

export { Survey }