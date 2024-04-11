function convertClicked() {
    // Get the temperature in Celsius from the input field
    var celsius = document.getElementById("celsius").value;

    // Convert Celsius to Fahrenheit
    var fahrenheit = celsius * 9/5 + 32;

    // Display the result
    document.getElementById("result").innerText = "Temperature in Fahrenheit: " + fahrenheit;
}