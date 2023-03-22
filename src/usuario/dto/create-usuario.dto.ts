import { IsBoolean, IsNumber, IsString } from 'class-validator';
export class CreateUsuarioDto {

      @IsString()
      cadastro_de_imagem: string;
    
      @IsString()
      nome: string;
    
      @IsNumber()
      valor: number;
    
      @IsString()
      descricao: string
    
      @IsString()
      cidade: string;
    
      @IsBoolean()
      staus: boolean;}