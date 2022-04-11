import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
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

  //   @Column()
  //   profile: string;
}
