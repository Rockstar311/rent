import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PropertyImage } from './property-image.entity';

@Entity('Property')
export class Property {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public price: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @OneToMany(() => PropertyImage, image => image.property, { cascade: true })
  public images: PropertyImage[];
}
