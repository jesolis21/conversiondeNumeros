// Función para convertir grados Celsius a grados Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Función para convertir grados Celsius a Kelvin
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Función principal para solicitar la temperatura en grados Celsius y realizar las conversiones
  function convertirTemperatura() {
    let temperaturaCelsius;
  
    // Solicitar al usuario la temperatura en grados Celsius hasta que se proporcione un número válido
    do {
      const input = prompt('Introduce la temperatura en grados Celsius:');
      temperaturaCelsius = parseFloat(input);
  
      if (isNaN(temperaturaCelsius)) {
        alert('Por favor, introduce una temperatura válida.');
      }
    } while (isNaN(temperaturaCelsius));
  
    // Realizar las conversiones
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
    const temperaturaKelvin = celsiusToKelvin(temperaturaCelsius);
  
    // Mostrar los resultados en la consola y en el DOM
    console.log(`Temperatura en grados Fahrenheit: ${temperaturaFahrenheit} °F`);
    console.log(`Temperatura en Kelvin: ${temperaturaKelvin} K`);
  
    alert(`Temperatura en grados Fahrenheit: ${temperaturaFahrenheit} °F\nTemperatura en Kelvin: ${temperaturaKelvin} K`);
  }
  
  // Llamar a la función principal
  convertirTemperatura();
  