// Generated by CoffeeScript 1.6.2
(function() {
  var Bop, CelestialBody, Dres, Duna, Eeloo, Eve, G, Gilly, HALF_PI, Ike, Jool, Kerbin, Kerbol, Laythe, Minmus, Moho, Mun, Pol, TWO_PI, Tylo, Vall;

  G = 6.674e-11;

  TWO_PI = 2 * Math.PI;

  HALF_PI = 0.5 * Math.PI;

  (typeof exports !== "undefined" && exports !== null ? exports : this).CelestialBody = CelestialBody = (function() {
    function CelestialBody(mass, radius, siderealRotation, orbit, atmPressure, atmScaleHeight) {
      this.mass = mass;
      this.radius = radius;
      this.siderealRotation = siderealRotation;
      this.orbit = orbit;
      this.atmPressure = atmPressure != null ? atmPressure : 0;
      this.atmScaleHeight = atmScaleHeight != null ? atmScaleHeight : 0;
      this.gravitationalParameter = G * this.mass;
      if (this.orbit != null) {
        this.sphereOfInfluence = this.orbit.semiMajorAxis * Math.pow(this.mass / this.orbit.referenceBody.mass, 0.4);
      }
      this.atmRadius = -Math.log(1e-6) * this.atmScaleHeight + this.radius;
    }

    CelestialBody.prototype.circularOrbitVelocity = function(altitude) {
      return Math.sqrt(this.gravitationalParameter / (altitude + this.radius));
    };

    CelestialBody.prototype.siderealTimeAt = function(longitude, time) {
      var result;

      result = ((time / this.siderealRotation) * TWO_PI + HALF_PI + longitude) % TWO_PI;
      if (result < 0) {
        return result + TWO_PI;
      } else {
        return result;
      }
    };

    CelestialBody.prototype.name = function() {
      var k, v;

      for (k in CelestialBody) {
        v = CelestialBody[k];
        if (v === this) {
          return k;
        }
      }
    };

    CelestialBody.prototype.children = function() {
      var k, result, v, _ref;

      result = {};
      for (k in CelestialBody) {
        v = CelestialBody[k];
        if ((v != null ? (_ref = v.orbit) != null ? _ref.referenceBody : void 0 : void 0) === this) {
          result[k] = v;
        }
      }
      return result;
    };

    return CelestialBody;

  })();

  CelestialBody.fromJSON = function(json) {
    var orbit;

    if (json.orbit != null) {
      orbit = Orbit.fromJSON(json.orbit);
    }
    return new CelestialBody(json.mass, json.radius, json.siderealRotation, orbit, json.atmPressure);
  };

  CelestialBody.Moho = Moho = new CelestialBody(1.80034E+22, 650000, 2530758.15664, new Orbit(Sun, 14522400000, 0.2, 7, 70, 15, 0);
  CelestialBody.Eve = Eve = new CelestialBody(8.645E+23, 2050000, 81000, new Orbit(Sun, 27131000000, 0.01, 2.1, 15, 45, 5.7));
  CelestialBody.Gilly = Gilly = new CelestialBody(991820000000000000, 30000, 670334.4, new Orbit(Eve, 86920000, 0.55, 12, 80, 10, 0));
  CelestialBody.Kerbin = Kerbin = new CelestialBody(3.76157E+23, 1600000, 43200, new Orbit(Sun, 37525647898.4324, 0.02, 0, 0, 0, 0));
  CelestialBody.Mun = Mun = new CelestialBody(3.40892E+21, 800000, 50400, new Orbit(Kerbin, 57189100000, 0.051, 0.06, 135.5, 345, 0.9));
  CelestialBody.Minmus = Minmus = new CelestialBody(1.88079E+20, 160000, 32400, new Orbit(Kerbin, 146970000, 0.03, 6, 75, 315, 30));
  CelestialBody.Duna = Duna = new CelestialBody(3.19734E+22, 800000, 50400, new Orbit(Sun, 57189100000, 0.051, 0.06, 135.5, 345, 0.9));
  CelestialBody.Ike = Ike = new CelestialBody(3.88794E+20, 210000, 955497.6, new Orbit(Duna, 36680000, 0.03, 0.2, 90, 345, 180));
  CelestialBody.Edna = Edna = new CelestialBody(7.94632E+20, 260000, 10800, new Orbit(Sun, 94080000000, 0.07, 3, 30, 310, 0));
  CelestialBody.Dak = Dak = new CelestialBody(470196000000000000, 20000, 284234.4, new Orbit(Edna, 4770000, 0.01, 10, 120, 90, 0));
  CelestialBody.Dres = Dres = new CelestialBody(2.28515E+21, 360000, 16200, new Orbit(Sun, 112687000000, 0.145, 5, 280, 90, 3.9));
  CelestialBody.Jool = Jool = new CelestialBody(2.99515E+25, 14000000, 19800, new Orbit(Sun, 189765000000, 0.05, 1.304, 52, 30, 0.6));
  CelestialBody.Laythe = Laythe = new CelestialBody(1.0312E+23, 1100000, 115300.8, new Orbit(Jool, 87640000, 0.01, 0.2, 120, 120, 180));
  CelestialBody.Vall = Vall = new CelestialBody(8.00068E+21, 550000, 285029.28, new Orbit(Jool, 160230000, 0.03, 0.3, 90, 270, 180));
  CelestialBody.Tylo = Tylo = new CelestialBody(3.80859E+22, 900000, 704635.2, new Orbit(Jool, 292950000, 0.01, 0.1, 150, 285, 270));
  CelestialBody.Bop = Bop = new CelestialBody(2.6522E+20, 190000, 1978084.8, new Orbit(Jool, 582970000, 0.235, 15, 10, 25, 270));
  CelestialBody.Pol = Pol = new CelestialBody(74496700000000000000, 130000, 18000, new Orbit(Jool, 739460000, 0.17085, 4.25, 2, 15, 1.8));
  CelestialBody.Lindor = Lindor = new CelestialBody(8.83969E+24, 8000000, 25200, new Orbit(Sun, 359571000000, 0.03, 1.7, 80, 75, 3.3));
  CelestialBody.Krel = Krel = new CelestialBody(99182000000000000000, 150000, 116039.52, new Orbit(Lindor, 58600000, 0.02, 1.5, 60, 180, 0));
  CelestialBody.Aden = Aden = new CelestialBody(9.25699E+20, 300000, 286873.92, new Orbit(Lindor, 107140000, 0.01, 0.25, 120, 30, 270));
  CelestialBody.Huygen = Huygen = new CelestialBody(9.89396E+21, 670000, 664156.8, new Orbit(Lindor, 187500000, 0.025, 0.75, 150, 60, 90));
  CelestialBody.Riga = Riga = new CelestialBody(1.48773E+22, 750000, 1407672, new Orbit(Lindor, 309380000, 0.03, 0.5, 90, 105, 180));
  CelestialBody.Talos = Talos = new CelestialBody(4.04075E+21, 500000, 3573028.8, new Orbit(Lindor, 575680000, 0.04, 1, 180, 285, 90));
  CelestialBody.Eeloo = Eeloo = new CelestialBody(7.93456E+21, 600000, 14400, new Orbit(Sun, 471171300000, 0.26, 6.15, 50, 260, 3.54));
  CelestialBody.Celes = Celes = new CelestialBody(2.35098E+20, 200000, 1548331.2, new Orbit(Eeloo, 31800000, 0.05, 10, 100, 270, 0));
  CelestialBody.Tam = Tam = new CelestialBody(51427700000000000, 10000, 4490208, new Orbit(Eeloo, 64670000, 0.025, 9.5, 105, 210, 180));
  CelestialBody.Hamek = Hamek = new CelestialBody(2.97546E+21, 450000, 14400, new Orbit(Sun, 527129000000, 0.1, 4, 165, 175, 4.7));
  CelestialBody.Nara = Nara = new CelestialBody(1.9043E+24, 3600000, 43200, new Orbit(Sun, 1712000000000, 0.35, 20, 90, 150, 2.5));
  CelestialBody.Amos = Amos = new CelestialBody(9.02777E+20, 320000, 232809.12, new Orbit(Nara, 55880000, 0.01, 0.5, 180, 345, 180));
  CelestialBody.Enon = Enon = new CelestialBody(1.07998E+22, 700000, 788097.6, new Orbit(Nara, 125980000, 0.015, 0.2, 270, 0, 180));
  CelestialBody.Prax = Prax = new CelestialBody(35558600000000000000, 110000, 21600, new Orbit(Nara, 751900000, 0.4, 17, 95, 100, 0));

}).call(this);
