import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from 'src/shared/dto/employee.dto';
import { Employee } from 'src/shared/entities/employee.entity';
import { EmployeeNotFound, ImproperPermissions } from 'src/shared/exceptions/Employee';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private readonly er: Repository<Employee>
    ) {}

    async findById(id: number) {
        const employee = await this.er.findOne(id);
        if (!employee) { throw EmployeeNotFound }
        return employee;
    }

    // Query for username
    async findByName(username: string) {
        const employee = await this.er.findOne({
            where: {username: username}
        })
        if (!employee) { throw EmployeeNotFound }

        return employee;
    }

    async findByEmployer(employerId: number) {
        return await this.er.find({
            where: { employerId: employerId }
        })
    }

    async create(employerId: number, employeeDto: CreateEmployeeDto) {
        const employee = this.er.create(employeeDto);
        employee.employer = await this.findById(employerId);

        return this.er.save(employee);
    }

    async destroy(adminId: number, employeeId: number) {
        const employee = await this.findById(employeeId)
        // Should not destroy employees that don't belong to you!
        if (employee.employerId !== adminId) { throw ImproperPermissions }
        this.er.delete(employee);
    }
}
