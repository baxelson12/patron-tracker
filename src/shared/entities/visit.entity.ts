import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  timestamp: Date;

  @Column()
  name: string;

  @Column()
  phone: string;

  @ManyToOne(
      () => Employee,
      employee => employee.visits
  )
  employee: Employee;
}