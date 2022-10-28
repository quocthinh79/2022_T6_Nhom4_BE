import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'FileLog'})
export class FileLog {
     @PrimaryGeneratedColumn({type: 'bigint'})
     id_log: number

     @Column({type: 'text'})
     file_name: string

     @Column({type: 'text'})
     log_date: string

     @Column({type: 'text'})
     action_log: string

     @Column({type: 'text'})
     status: string
}