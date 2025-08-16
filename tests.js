import solution from "./index.js";

// ====================test cases given in porblem=====================
console.log(
	solution({
		"2020-01-01": 4,
		"2020-01-02": 4,
		"2020-01-03": 6,
		"2020-01-04": 8,
		"2020-01-05": 2,
		"2020-01-06": -6,
		"2020-01-07": 2,
		"2020-01-08": -2,
	})
);
// Output: { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }

console.log(
	solution({
		"2020-01-01": 6,
		"2020-01-04": 12,
		"2020-01-05": 14,
		"2020-01-06": 2,
		"2020-01-07": 4,
	})
);
// Output: { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }

// ======================= More test cases ===========================

// Case 1: Normal mix of positive and negative values
console.log(
	solution({
		"2023-06-05": -5, // Mon
		"2023-06-07": 15, // Wed
		"2023-06-09": 5, // Fri
	})
);
// Output: { Mon: -5, Tue: 5, Wed: 15, Thu: 10, Fri: 5, Sat: 0, Sun: 0 }
//-----------------------------------------------------------------------------

// Case 2: Only Mon & Sun exist, middle days should be averages
console.log(
	solution({
		"2023-06-05": 10, // Mon
		"2023-06-11": 20, // Sun
	})
);
// Output: { Mon: 10, Tue: 12, Wed: 14, Thu: 16, Fri: 18, Sat: 19, Sun: 20 }
//-----------------------------------------------------------------------------

// Case 3: Multiple dates on the same weekday → values should sum
console.log(
	solution({
		"2023-06-05": 5, // Mon
		"2023-06-12": 7, // Mon
		"2023-06-06": 4, // Tue
		"2023-06-13": -2, // Tue
	})
);
// Output: { Mon: 12, Tue: 2, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 }
//-----------------------------------------------------------------------------

// Case 4: Large positive and negative values
console.log(
	solution({
		"2023-06-05": 1000000, // Mon
		"2023-06-06": -1000000, // Tue
		"2023-06-07": 500000, // Wed
		"2023-06-09": -500000, // Fri
	})
);
// Output: { Mon: 1000000, Tue: -1000000, Wed: 500000, Thu: 0, Fri: -500000, Sat: 0, Sun: 0 }
//-----------------------------------------------------------------------------

// Case 5: Missing middle days filled by averaging
console.log(
	solution({
		"2023-06-05": 6, // Mon
		"2023-06-08": 12, // Thu
		"2023-06-11": 18, // Sun
	})
);
// Output: { Mon: 6, Tue: 8, Wed: 10, Thu: 12, Fri: 14, Sat: 16, Sun: 18 }
//-----------------------------------------------------------------------------

// Case 6: Continuous dates covering full week
console.log(
	solution({
		"2023-06-05": 1, // Mon
		"2023-06-06": 2, // Tue
		"2023-06-07": 3, // Wed
		"2023-06-08": 4, // Thu
		"2023-06-09": 5, // Fri
		"2023-06-10": 6, // Sat
		"2023-06-11": 7, // Sun
	})
);
// Output: { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }
//-----------------------------------------------------------------------------
