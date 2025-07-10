import formattedMonthName from '../../src/utils/formattedMonthName';
import { describe, expect, test } from '@jest/globals';

describe('Unit Test: formattedMonthName.ts', function () {
	// Test 1
	test('Test Case: asserting with the first month value', function () {
		expect(formattedMonthName(1).toLowerCase()).toEqual('january');
	});

	// Test 2
	test('Test Case: asserting with the last month value', function () {
		expect(formattedMonthName(12).toLowerCase()).toEqual('december');
	});

	// Test 3
	test('Test Case: asserting with the eighth month value', function () {
		expect(formattedMonthName(8)).toStrictEqual('August');
	});

	// Test 4
	test('Test Case: asserting with invalid month value (negative, falsy check)', function () {
		expect(formattedMonthName(-5)).toBeFalsy();
	});

	// Test 5
	test('Test Case: asserting with invalid month value (negative, length check)', function () {
		expect(formattedMonthName(-10)).toHaveLength(0);
	});

	// Test 5
	test('Test Case: asserting with invalid month value (negative, value check)', function () {
		expect(formattedMonthName(-100)).toStrictEqual('');
	});

	// Test 6
	test('Test Case: asserting with invalid month value (overflow, falsy check)', function () {
		expect(formattedMonthName(13)).toBeFalsy();
	});

	// Test 7
	test('Test Case: asserting with invalid month value (overflow, length check)', function () {
		expect(formattedMonthName(14)).toHaveLength(0);
	});

	// Test 8
	test('Test Case: asserting with invalid month value (overflow, value check)', function () {
		expect(formattedMonthName(20)).toStrictEqual('');
	});
});
