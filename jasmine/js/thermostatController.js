
$( document ).ready(function() {

  var thermostat = new Thermostat();

    $('#reset').click(function () {
      thermostat.resetTemperature();
      checkTemperature();
    });

    $('#up').click(function () {
      thermostat.temperatureUp();
      checkTemperature();
    });

    $('#down').click(function () {
      thermostat.temperatureDown();
      checkTemperature();
    });

    $('#powerSavingOn').click(function () {
      thermostat.powerSavingOn();
      checkTemperature();
    });

    $('#powerSavingOff').click(function () {
      thermostat.powerSavingOff();
    });

    $('#energyMode').click(function () {
      thermostat.currentEnergyUsage();
    });

    function checkTemperature() {
      thermostat._energy();
      $("#temperature").text(thermostat._currentTemperature() + "°C");
      $("#temperature").attr("class", thermostat.currentEnergyUsage());
    };

});
