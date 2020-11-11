import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { EmployeeRole } from '../shared/constants';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateEmployeeDto } from '../shared/dto/employee.dto';
import { EmployeeService } from './employee.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('employee')
export class EmployeeController {
    constructor(private es: EmployeeService) {}

    // Get all employees for given admin
    @Get()
    @Roles(EmployeeRole.ADMIN, EmployeeRole.OVERSEER)
    getEmployees(@Request() req) {
        return this.es.findByEmployer(req.user.id);
    }

    // Create a new employee/admin
    @Post()
    @Roles(EmployeeRole.ADMIN, EmployeeRole.OVERSEER)
    create(@Request() req, @Body() ced: CreateEmployeeDto) {
        if (req.user.role === EmployeeRole.ADMIN) { ced.role = EmployeeRole.EMPLOYEE }
        return this.es.create(req.user.id, ced);
    }

    // Remove an employee/admin
    @Delete(':id')
    @Roles(EmployeeRole.ADMIN, EmployeeRole.OVERSEER)
    destroy(@Request() req, @Param('id') employeeId: number) {
        this.es.destroy(req.user.id, employeeId)
    }
}