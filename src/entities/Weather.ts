import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'weather'})
export class Weather {
     @PrimaryGeneratedColumn({type: 'bigint'})
     id_staging: number

     @Column({type: 'text'})
     NhietDoHienTai: string

     @Column({type: 'text'})
     TinhThanhPho: string

     @Column({type: 'text'})
     MoTa: string

     @Column({type: 'text'})
     ChatLuongKhongKhi: string

     @Column({type: 'text'})
     DoAmHienTai: string

     @Column({type: 'text'})
     TamNhin: string

     @Column({type: 'text'})
     Gio: string

     @Column({type:'text'})
     NgayMai: string

     @Column({type: 'text'})
     LuongMuaNgayMai: string

     @Column({type: 'text'})
     ThoiTietNgayMai: string

     @Column({type: 'text'})
     NhietDoNgayMai: string

     @Column({type:'text'})
     NgayMot: string

     @Column({type: 'text'})
     LuongMuaNgayMot: string

     @Column({type:'text'})
     ThoiTietNgayMot: string

     @Column({type:'text'})
     NhietDoNgayMot: string

     @Column({type:'text'})
     BaNgayToi: string

     @Column({type:'text'})
     LuongMuaBaNgayToi: string

     @Column({type:'text'})
     ThoiTietBaNgayToi: string

     @Column({type:'text'})
     NhietDoBaNgayToi: string

     @Column({type:'text'})
     BonNgayToi: string

     @Column({type:'text'})
     LuongMuaBonNgayToi: string

     @Column({type:'text'})
     ThoiTietBonNgayToi: string

     @Column({type:'text'})
     NhietDoBonNgayToi: string

     @Column({type:'text'})
     NamNgayToi: string

     @Column({type:'text'})
     LuongMuaNamNgayToi: string

     @Column({type:'text'})
     ThoiTietNamNgayToi: string

     @Column({type:'text'})
     NhietDoNamNgayToi: string

     @Column({type:'text'})
     SauNgayToi: string

     @Column({type:'text'})
     LuongMuaSauNgayToi: string

     @Column({type:'text'})
     ThoiTietSauNgayToi: string

     @Column({type:'text'})
     NhietDoSauNgayToi: string

     @Column({type:'text'})
     BayNgayToi: string

     @Column({type:'text'})
     LuongMuaBayNgayToi: string

     @Column({type:'text'})
     ThoiTietBayNgayToi: string

     @Column({type:'text'})
     NhietDoBayNgayToi: string

     @Column({type:'text'})
     NgayCapNhat: string
}