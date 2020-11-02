import { Controller, Get, Param, Post, UseGuards, Request, Body, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { EmployeeService } from 'src/employee/employee.service';
import { EmployeeRole } from 'src/shared/constants';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { CreatePatronDto } from 'src/shared/dto/patron.dto';
import { Visit } from 'src/shared/entities/visit.entity';
import { Repository } from 'typeorm';
import { VisitService } from './visit.service';

@UseGuards(JwtGuard, RolesGuard)
@Controller('visit')
export class VisitController {
    constructor(
        private readonly vs: VisitService
    ) {}

    @Get(':id')
    @Roles(EmployeeRole.ADMIN)
    getOne(@Request() req, @Param('id') id: number) {
        return this.vs.findById(req.user.id, id)
    }

    @Get()
    @Roles(EmployeeRole.OVERSEER, EmployeeRole.ADMIN)
    getAll(@Request() req, @Query() query) {
        const { start, end } = query;
        return this.vs.findAll(req.user.id);
    }

    @Post()
    @Roles(EmployeeRole.ADMIN, EmployeeRole.EMPLOYEE)
    create(@Request() req, @Body() cpd: CreatePatronDto) {
        return this.vs.create(req.user.id, cpd);
    }
}
