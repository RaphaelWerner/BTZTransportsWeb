export interface Motorista {
    id: number | null;
    nome: string;
    cpf: string;
    numeroCNH: string;
    categoriaCNH: number;
    dataNascimento: Date | null;
    status: boolean;
  }