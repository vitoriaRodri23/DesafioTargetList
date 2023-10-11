import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  class Deal {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public buyer: string;
  
    @Column()
    public client: string;
  
    @Column()
    public subsectorBuyer: string;
  
    @Column()
    public subsectorClient: string;
  
    @Column({ nullable: true })
    public signedNDAdate: Date | null;

    @Column({ nullable: true })
    public submmitedNBODate: Date| null;
  
    @Column({ nullable: true })
    public dealCloseDate: Date | null;
  
    @Column({ nullable: true })
    public lastContactDate: Date| null;
  
    @Column({ nullable: true })
    public estimatedDealSize: number ;
  
    @Column()
    public passedReason: string;
  }
  export default Deal;
  