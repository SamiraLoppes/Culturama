import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserParamsDto, CreateUserResponseDto } from './user.dto';

@ApiTags("User")
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/register")
    @ApiOperation({ summary: 'Registrar novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso', type: CreateUserResponseDto })
    public register(@Body() data: CreateUserParamsDto): Promise<CreateUserResponseDto> {
        return this.userService.create(data);
    }
}
