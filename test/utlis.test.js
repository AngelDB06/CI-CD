import { calcularAreaCirculo, convertirCelsiusAFahrenheit } from '../src/utils.js';

describe('Pruebas Unitarias para Utils', () => {

  // PRUEBAS CORRECTAS: Pasan
  test('debe calcular el área de un círculo correctamente', () => {
    // Área de un círculo con radio 10: π * 100 ≈ 314.159
    expect(calcularAreaCirculo(10)).toBeCloseTo(314.159);
  });

  test('debe convertir 0 Celsius a 32 Fahrenheit', () => {
    expect(convertirCelsiusAFahrenheit(0)).toBe(32);
  });

  // PRUEBA DE FALLO (para demostrar que el CI se detiene si esto falla)
  test('debe lanzar un error si el radio es negativo', () => {
    // Si esta prueba fallara (por ejemplo, si no se lanzara el error), el flujo de CI se detendría.
    expect(() => calcularAreaCirculo(-5)).toThrow("El radio no puede ser negativo.");
  });
});