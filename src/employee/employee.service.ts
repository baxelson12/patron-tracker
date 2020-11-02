import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from 'src/shared/dto/employee.dto';
import { Employee } from 'src/shared/entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private readonly er: Repository<Employee>
    ) {}

    async findById(id: number) {
        const employee = await this.er.findOne(id);
        if (!employee) { throw new NotFoundException() }
        return employee;
    }

    async findByName(username: string) {
        const employee = await this.er.findOne({
            where: {username: username}
        })
        if (!employee) { throw new NotFoundException(`Can't find employee`) }

        return employee;
    }

    async create(employerId: number, employeeDto: CreateEmployeeDto) {
        const employee = this.er.create(employeeDto);
        employee.employer = await this.findById(employerId);

        return this.er.save(employee);
    }

    destroy(id: number) {}
}
