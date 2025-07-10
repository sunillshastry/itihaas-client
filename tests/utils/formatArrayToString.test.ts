import formatArrayToString from '../../src/utils/formatArrayToString';
import { describe, expect, test } from '@jest/globals';

describe('Unit Test: formatArrayToString.ts', function () {
	// Test 1
	test('Test Case: asserting with empty array (length)', function () {
		expect(formatArrayToString).toHaveLength(1);
	});

	// Test 2
	test('Test Case: asserting with an empty array (content)', function () {
		expect(formatArrayToString([])).toStrictEqual('');
	});

	// Test 3
	test('Test Case: asserting with an array of one element', function () {
		expect(formatArrayToString([100])).toStrictEqual('100');
	});

	// Test 4
	test('Test Case: asserting with an array of three elements', function () {
		expect(formatArrayToString([100, 200, 300])).toStrictEqual('100, 200, 300');
	});

	// Test 5
	test('Test Case: asserting with an array of ten elements', function () {
		const testElement = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
		const testExpectation = '100, 200, 300, 400, 500, 600, 700, 800, 900, 1000';
		expect(formatArrayToString(testElement)).toStrictEqual(testExpectation);
	});
});
