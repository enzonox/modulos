const juros = require('./juros')

//Teste Juros Simples
test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 0
    const jurosEsperados = 0
    const jurosCalculados = juros.jurosSimples(C, i, t)
    expect(jurosCalculados).toBe(jurosEsperados)
})

test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 10
    const jurosEsperados = 100
    const jurosCalculados = juros.jurosSimples(C, i, t)
    expect(jurosCalculados).toBe(jurosEsperados)
})

//Teste Juros Simples composto
test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 1
    const montanteEsperado = 110
    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 10)
    const montanteSimples = juros.pure.montanteSimples({ jurosSimples })
    const montante = montanteSimples(C, i, t)
    expect(jurosSimples.mock.calls[0]).toEqual([C, i , t])
    expect(montante).toBe(montanteEsperado)
})

//Teste Montante de Juros Composto
test('montanteJurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const jurosEsperados = 1100
    const jurosCalculados = juros.montanteJurosCompostos(C, i, t)
    expect(jurosCalculados).toBe(jurosEsperados)
})

//Teste Juros Composto
test('jurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 1100)

    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
    const jurosCalculados = jurosCompostos(C, i, t)

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
    expect(jurosCalculados).toBe(100)
})