describe('String class test', function() {


  describe('hasVowels function', function() {

    it('should return false for string not containing vowel', function() {

      expect("h_sV_w_ls".hasVowels()).toBe(false);
    });

    it('should return false for string not containing vowel', function() {

      expect("hasVowels".hasVowels()).toBe(true);
    });
  });

  describe('toUpper function', function() {

    it('should return string all in upper case', function() {

      expect("toUpper".toUpper()).toBe('TOUPPER');
    });
  });

  describe('toLower function', function() {

    it('should return string all in upper case', function() {

      expect("tOLoWer".toLower()).toBe('tolower');
    });
  });

  describe('ucFirst function', function() {

    it('should change the first character of a string to upper case', function() {

      expect("lowerCase".ucFirst()).toBe('LowerCase');
    });
  });

  describe('isQuestion function', function() {

    it('should return false for string that does not end with ?', function() {

      expect("is it a questi?on".isQuestion()).toBe(false);
    });

    it('should return true for string that does end with ?', function() {

      expect("is it a question?".isQuestion()).toBe(true);
    });
  });

  describe('words function', function() {

    it('should return array of words in a string', function() {

      expect("should return array of words in a string".words()).toEqual([ 'should', 'return', 'array', 'of', 'words', 'in', 'a', 'string' ]);
    });
  });

  describe('wordCount function', function() {

    it('should return number of words in a string', function() {

      expect("should return array of words in a string".wordCount()).toEqual(8);
    });
  });

  describe('toCurrency function', function() {

    it('should return a string formatted in currency mode', function() {

      expect("3773763.12".toCurrency()).toEqual('3,773,763.12');
    });
  });

  describe('toCurrency function', function() {

    it('should return a string formatted in currency mode', function() {

      expect('3,773,763.12'.fromCurrency()).toBe(3773763.12);
    });
  });
});
