import { Project } from "../project/project.entity";
import { Skill } from "../skill/skill.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column('simple-json')
    projects: Project[];

    @Column('simple-json')
    skills: Skill[]

    @Column('simple-json')
    needs: Skill[]

    @CreateDateColumn({ nullable: true })
    createdAt?: Date;

    @CreateDateColumn({ nullable: true })
    updatedAt?: Date;
}