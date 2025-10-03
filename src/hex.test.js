const { codificarHex, decodificarHex, isHexValido } = require('./hex');

describe('Testes de Integração (Codificar e Decodificar)', () => {
    test('deve manter texto original após codificar e decodificar', () => {
        const textos = [
            'Hello World',
            'DevOps Pipeline',
            'Teste de Integração',
            '',
            123456789,
        ];

        textos.forEach(texto => {
            const codificado = codificarHex(texto);
            const decodificado = decodificarHex(codificado);
            expect(decodificado).toBe(texto);
        });
    });
});