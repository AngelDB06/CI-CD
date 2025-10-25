/**
 * @fileoverview Funciones de utilidad para operaciones matemáticas básicas.
 * @author Ángel Domínguez Barranco
 * @version 1.0.0
 */

/**
 * Calcula el área de un círculo.
 * @param {number} radio - El radio del círculo.
 * @returns {number} El área calculada (π * radio^2).
 */
export function calcularAreaCirculo(radio) {
  if (radio < 0) {
    throw new Error("El radio no puede ser negativo.");
  }
  return Math.PI * radio * radio;
}

/**
 * Convierte una temperatura de Celsius a Fahrenheit.
 * @param {number} celsius - La temperatura en grados Celsius.
 * @returns {number} La temperatura convertida a grados Fahrenheit.
 * @example
 * // Retorna 68
 * convertirCelsiusAFahrenheit(20);
 */
export function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}