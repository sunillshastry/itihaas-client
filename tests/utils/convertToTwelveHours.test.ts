import convertToTwelveHours from '../../src/utils/convertToTwelveHours';
import { describe, expect, test } from '@jest/globals';

// Unit Testing: convertToTwelveHours utility function
describe('Unit Test: convertToTwelveHours.ts', function () {
	// Test 1
	test('Test Case: asserting with 0 hours', function () {
		expect(convertToTwelveHours(0)).toStrictEqual([12, 'AM']);
	});

	// Test 2
	test('Test Case: asserting with 24 hours', function () {
		expect(convertToTwelveHours(24)).toStrictEqual([12, 'PM']);
	});

	// Test 3
	test('Test Case: asserting with 12 hours', function () {
		expect(convertToTwelveHours(12)).toEqual([12, 'PM']);
	});

	// Test 4
	test('Test Case: asserting with 18 hours', function () {
		expect(convertToTwelveHours(18)).toStrictEqual([6, 'PM']);
	});

	// Test 5
	test('Test Case: asserting with 04 hours', function () {
		expect(convertToTwelveHours(4)).toStrictEqual([4, 'AM']);
	});

	// Test 6
	test('Test Case: asserting with 11 hours', function () {
		expect(convertToTwelveHours(11)).toStrictEqual([11, 'AM']);
	});
});
