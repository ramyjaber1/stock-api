import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  serialNumber: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  //   @Column()
  //   category: string;

  //   @Column()
  //   seller: string;

  // @Column({ default: 'uploads/user.png' })
  // image: string;

  // @OneToOne(() => Authentication, { cascade: true })
  // @JoinColumn()
  // profile: Authentication;

  // @OneToMany(() => Ticket, (ticket) => ticket.client)
  // tickets: Ticket[];
}
