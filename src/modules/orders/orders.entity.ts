import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNumber: string;

  @Column()
  owner: number;

  @Column()
  status: string;

  @Column()
  item: string;

  @Column({ type: 'double' })
  quantity: number;

  @Column({ type: 'double' })
  amount: number;

  @Column()
  address: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;
}
