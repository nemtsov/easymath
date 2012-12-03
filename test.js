var em = require('./easymath');

describe('EeasyMath', function () {
  function e(str) {
    return em.parse(str).evaluate();
  }

  describe('core', function () {
    it('should understand a number', function () {
      e('42').should.equal(42);
    });

    it('should add', function () {
      e('2 + 3').should.equal(5);
    });

    it('should subtract', function () {
      e('3 - 2').should.equal(1);
    });

    it('should multiply', function () {
      e('3 * 2').should.equal(6);
    });

    it('should divide', function () {
      e('10 / 2').should.equal(5);
    });

    it('should follow order of operations', function () {
      e('2 + 3 * 4').should.equal(14);
      e('2 * 3 + 4').should.equal(10);
      e('2 + 10 / 2').should.equal(7);
    });

    it('should understand parens', function () {
      e('(2 + 3) * 4').should.equal(20);
    });

    it('should raise to power', function () {
      e('2^3').should.equal(8);
    });

    it('should follow order', function () {
      e('2 + 2 * 2').should.equal(6);
    });
  });

  it('should resolve basic math procs', function () {
    e('sin(0)').should.equal(0);
    e('cos(0)').should.equal(1);
  });
});
