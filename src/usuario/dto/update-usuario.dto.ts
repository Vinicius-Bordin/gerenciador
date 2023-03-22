import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    cadastro_de_imagem: string;
  
    @IsString()
    nome: string;
  
    @IsNumber()
    valor: number;
  
    @IsString()
    descricao: string;
  
    @IsString()
    cidade: string;
  
    @IsBoolean()
    staus: boolean;}
