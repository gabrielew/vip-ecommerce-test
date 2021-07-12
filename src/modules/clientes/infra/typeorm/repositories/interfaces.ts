export interface IntegrationModelOne {
  nome_completo: string;
  email: string;
  cpf: string;
  endereco: {
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cidade: string;
    uf: string;
    cep: string;
  };
  pedido: {
    valor_total: number;
    data_pedido: Date;
    data_agendamento_entrega: Date;
    quantidade_itens: number;
    itens: {
      produto_id: number;
      descricao: string;
      valor_produto: number;
      quantidade_pedida: number;
      observacoes: string;
    }[];
  };
}
