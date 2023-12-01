export interface Veiculo {
    id: number | null;
    nome: string;
    placa: string;
    tipoCombustivel: number;
    fabricante: string;
    anoFabricacao: number;
    capacidadeTanque: number;
    observacoes: string | null;
  }