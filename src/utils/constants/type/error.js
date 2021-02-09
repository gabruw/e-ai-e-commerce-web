const ERROR_TYPE = {
    400: {
        code: 400,
        title: 'Erro inesperado',
        text: 'Um erro inesperado aconteceu, pedimos desculpas pelo ocorrido.'
    },
    401: {
        code: 401,
        title: 'Não autorizado',
        text: 'Você não possue crendenciais para acessar este conteúdo.'
    },
    404: {
        code: 404,
        title: 'Não encontrado',
        text: 'A página requisitada não foi encontrada em nossos servidores.'
    }
};

export default ERROR_TYPE;
