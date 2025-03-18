import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'varchar', unique: true })
    public email: string;

    @Column({ type: 'varchar', name: 'password_hash' })
    public passwordHash: string;
}
