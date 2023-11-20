import { printMessage, getType, addNumbers, reverseString } from './functions'; 

describe('Basic TypeScript Functionality Tests', () => {

// TESTING PRINT FUNCTION
  describe('Print Function Tests', () => {
    it('should print the correct message', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const message = 'Hello TypeScript';
      printMessage(message);
      expect(consoleSpy).toHaveBeenCalledWith(message);
      consoleSpy.mockRestore();
    });
  });
  // testing the types
  describe('Type Getting Tests', () => {
    it('should return the correct type for a string', () => {
      const value = 'Hello TypeScript';
      const type = getType(value);
      expect(type).toBe('string');
    });

    it('should return the correct type for a number', () => {
      const value = 100;
      const type = getType(value);
      expect(type).toBe('number');
    });

    it('should return the correct type for an object', () => {
      const value = { key: 'value' };
      const type = getType(value);
      expect(type).toBe('object');
    });
  });
  
  // testing the arithmetic functions
  describe('Arithmetic Function Tests', () => {
    it('should correctly add two numbers', () => {
      const num1 = 5;
      const num2 = 10;
      const result = addNumbers(num1, num2);
      expect(result).toBe(15);
    });
  });

  //testing string manipulation
  describe('String Manipulation Tests', () => {
    it('should correctly reverse a string', () => {
      const str = 'TypeScript';
      const reversed = reverseString(str);
      expect(reversed).toBe('tpircSepyT');
    });
  });
});
