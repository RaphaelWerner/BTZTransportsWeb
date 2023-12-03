import { Combustivel } from '../models/EnumCombustivel';
import { Motorista } from './MotoristaModel';
import { Veiculo } from './VeiculoModel';

export interface Abastecimento {
    id?: number;
    veiculoId: number;
    motoristaId: number;
    data: Date | null;
    tipoCombustivel: number;
    quantidadeAbastecida: number;
    valorTotal: number;
}

export interface AbastecimentoResponse {
    id?: number;
    veiculoNome: string;
    motoristaNome: string;
    data: Date | null;
    tipoCombustivel: number;
    quantidadeAbastecida: number;
    valorTotal: number;
}