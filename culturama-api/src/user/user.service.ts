import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../database/entities/user.entity';
import { CreateUserParamsDto, CreateUserResponseDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    public async create(data: CreateUserParamsDto): Promise<CreateUserResponseDto> {
        const user = this.userRepository.create({
            name: data.name,
            email: data.email,
            passwordHash: data.password
        });
        const userCreated = await this.userRepository.save(user);
        return {
            id: userCreated.id,
            name: userCreated.email
        }
    }
}
