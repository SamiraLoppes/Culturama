import { ApiProperty } from "@nestjs/swagger";

export class CreateUserParamsDto {
    @ApiProperty({ example: 'Fulano de Tal' })
    name: string;
    @ApiProperty({ example: 'fulano@mail.com' })
    email: string;
    @ApiProperty({ example: '123456' })
    password: string;
}

export class CreateUserResponseDto {
    @ApiProperty({ example: "1231239asd9ad-123123", description: 'ID do usuário' })
    id: string;
    @ApiProperty({ example: 'Fulano de Tal', description: 'Nome do usuário' })
    name: string;
}
