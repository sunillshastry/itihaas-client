import Badge from '../../src/components/elements/Badge';
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

// Component Unit Testing: Badge.tsx
describe('Component testing: Badge', () => {
	// Test Case 1
	test("Test Case: Checking for Badge's textContent value", function () {
		render(<Badge>Custom Badge</Badge>);

		const element = screen.getByText('Custom Badge');
		expect(element.textContent).toStrictEqual('Custom Badge');
	});

	// Test Case 2
	test("Test Case: Checking for Badge's textContent's uppercase format by default", function () {
		render(<Badge>Uppercase Check</Badge>);
		const element = screen.getByText('Uppercase Check');

		expect(element.classList.contains('uppercase')).toBe(true);
	});
});
