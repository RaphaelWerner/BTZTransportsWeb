import { Combustivel } from '../models/EnumCombustivel';

export class AbastecimentoModel {
    public Id?: number;
    public VeiculoId: number = 0;
    public MotoristaId: number = 0;
    public Data?: Date ;
    public TipoCombustivel?: Combustivel;
    public QuantidadeAbastecida?: number;
    public ValorTotal?: number; // O uso do '?' indica que o campo é opcional (pode ser null ou undefined)
}