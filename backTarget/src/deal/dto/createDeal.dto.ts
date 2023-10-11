import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDealDto {
  @IsString()
  buyer: string;

  @IsString()
  client: string;

  @IsString()
  subsectorClient: string;

  @IsString()
  subsectorBuyer: string;

  @IsDate()
  @IsOptional()
  signedNDAdate: Date | null;

  @IsDate()
  @IsOptional()
  submmitedNBODate: Date | null;

  @IsDate()
  @IsOptional()
  dealCloseDate: Date | null ;

  @IsDate()
  @IsOptional()
  lastContactDate: Date | null;

  @IsNumber()
  EstimatedDealSize: number;

  @IsString()
  PassedReason: string;
}
