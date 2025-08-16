# Day Aggregation Problem

## Problem Statement

You are given an input dictionary **D**, where:

-   **Key**: a date string in the format `YYYY-MM-DD`
-   **Value**: an integer (can be positive or negative)

You need to implement a function:
that returns a new dictionary D' with the following rules:

The keys of D' are the days of the week:
[Mon, Tue, Wed, Thu, Fri, Sat, Sun]

The values of D' are calculated as:

The sum of all values corresponding to that weekday (across all input dates).

If a weekday is missing in the input, its value must be filled as the average (mean) of its immediate previous and next weekday values.

```js
function solution(D) { ... }
```

## Run below command to run test cases :

```bash
node tests.js
```
