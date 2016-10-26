describe("Thermostat", function () {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe("Has a default temperature", function () {

    it("has a default temperature of 20 degrees", function () {
      expect(thermostat._currentTemperature()).toBe(20);
    });

  });

  describe("Increase Temperature", function () {

    it("can increase the temperature", function () {
      thermostat.temperatureUp();
      expect(thermostat._currentTemperature()).toBe(21);
    });

    it("raises an error if temperature is increases above maximum in power saving mode", function () {
      thermostat._temperature = 25;
      expect(function () {
        thermostat.temperatureUp()}).toThrow("Maximum temperature reached");
      expect(thermostat._currentTemperature()).not.toBe(26);
    });

    it("raises an error if temperature is increases above maximum in normal mode", function () {
      thermostat._temperature = 32;
      thermostat.powerSavingOff();
      expect(function () {
        thermostat.temperatureUp()}).toThrow("Maximum temperature reached");
      expect(thermostat._currentTemperature()).not.toBe(33);
    });

  });

  describe("Decrease temperature", function () {

    it("can decrease the temerpature", function () {
      thermostat.temperatureDown();
      expect(thermostat._currentTemperature()).toBe(19);
    });

  });

  describe("Minimum temperature", function () {

    it("raises an error when temperature goes below minimum temperature", function () {
      thermostat._temperature = 10;
      expect(function () {
        thermostat.temperatureDown()}).toThrow("Minimum temperature reached");
      expect(thermostat._currentTemperature()).not.toBe(9);
    });

  });

});
