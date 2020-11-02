import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeService } from 'src/employee/employee.service';
import { CreatePatronDto } from 'src/shared/dto/patron.dto';
import { Visit } from 'src/shared/entities/visit.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class VisitService {
    constructor(
        @InjectRepository(Visit) private vr: Repository<Visit>,
        private es: EmployeeService
    ) {}
    async findByPhone(adminId: number, phone: string) {
        const admin = await this.es.findById(adminId)
        return await this.vr.find({ employee: admin, phone: phone })
    }

    async findByName(adminId: number, name: string) {
        const admin = await this.es.findById(adminId);
        return await this.vr.find({ employee: admin, name: name });
    }

    async findById(adminId: number, visitId: number) {
        const admin = await this.es.findById(adminId);
        const visit = await this.vr.findOne(visitId, { where: { employee: admin }});
        if (!visit) { throw new NotFoundException() }

        return visit;
    }

    async findAll(adminId: number, start?: Date, end?: Date) {
        const admin = await this.es.findById(adminId);
        if (!start || !end) {
            return await this.vr.find({ employee: admin })
        }

        return await this.vr.find({ employee: admin, timestamp: Between(start, end) })
    }

    async create(adminId: number, cpd: CreatePatronDto) {
        const visit = this.vr.create()
        visit.name = cpd.name;
        visit.phone = cpd.phone;
        visit.employee = await this.es.findById(adminId);
        visit.timestamp = new Date();

        this.vr.save(visit);
    }
}
