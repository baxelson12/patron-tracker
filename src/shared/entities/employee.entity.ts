import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { EmployeeRole } from "../constants";
import { Visit } from "./visit.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column({
        type: "enum",
        enum: EmployeeRole,
        default: EmployeeRole.EMPLOYEE
    })
    role: EmployeeRole;


    @Column({ nullable: true })
    employerId: number;

    @ManyToOne(
        () => Employee,
        employee => employee.id
    )
    @JoinColumn({ name: "employerId" })
    employer?: Employee;

    @OneToMany(
        () => Visit,
        visit => visit.employee
    )
    visits: Visit[];

    @BeforeInsert()
    async hashPass() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}