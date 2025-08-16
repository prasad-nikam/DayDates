function solution(D) {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let weekMap = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
	let presentDays = new Set();

	// Step 1: Aggregate values by weekday
	for (let dateStr in D) {
		let date = new Date(dateStr);
		let day = days[date.getDay()]; // get weekday
		weekMap[day] += D[dateStr];
		presentDays.add(day);
	}

	// Step 2: Fill missing days using mean of previous & next
	let orderedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	for (let i = 0; i < orderedDays.length; i++) {
		let day = orderedDays[i];
		if (!presentDays.has(day)) {
			// find prev
			let prev = i - 1;
			while (prev >= 0 && !presentDays.has(orderedDays[prev])) prev--;
			// find next
			let next = i + 1;
			while (next < 7 && !presentDays.has(orderedDays[next])) next++;
			if (prev >= 0 && next < 7) {
				weekMap[day] = Math.floor(
					(weekMap[orderedDays[prev]] + weekMap[orderedDays[next]]) /
						2
				);
			}
		}
	}

	return weekMap;
}

export default solution;
