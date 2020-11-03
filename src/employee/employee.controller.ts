import { Body, Controller, Delete, Get, Headers, Param, Post, Request, UseGuards } from '@nestjs/common';
import { request } from 'express';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { EmployeeRole } from 'src/shared/constants';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { CreateEmployeeDto } from 'src/shared/dto/employee.dto';
import { EmployeeService } from './employee.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('employee')
export class EmployeeController {
    constructor(private es: EmployeeService) {}

    @Get()
    @Roles(EmployeeRole.ADMIN, EmployeeRole.OVERSEER)
    getEmployees(@Request() req) {
        return this.es.findByEmployer(req.user.id);
    }

    @Post()
    @Roles(EmployeeRole.ADMIN, EmployeeRole.OVERSEER)
    create(@Request() req, @Body() ced: CreateEmployeeDto) {
        if (req.user.role === EmployeeRole.ADMIN) { ced.role = EmployeeRole.EMPLOYEE }
        return this.es.create(req.user.id, ced);
    }

    @Delete(':id')
    @Roles(EmployeeRole.ADMIN, EmployeeRole.OVERSEER)
    destroy(@Request() req, @Param('id') employeeId: number) {
        this.es.destroy(req.user.id, employeeId)
    }
}