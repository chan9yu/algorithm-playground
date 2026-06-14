<h2><a href="https://www.hackerrank.com/challenges/frequency-queries/problem">Frequency Queries</a></h2>
<h3>Medium</h3>
<hr>

You are given queries. Each query is of the form of two integers described below:

- **`1 x`**: Insert `x` in your data structure.
- **`2 y`**: Delete one occurence of `y` from your data structure, if present.
- **`3 z`**: Check if any integer is present whose frequency is exactly `z`. If yes, print `1` else `0`.

The queries are given in the form of a 2-D array of size `q` where `queries[i][0]` contains the operation, and `queries[i][1]` contains the data element.

<br />

## Example

The results of each operation are:

```
Operation   Array      Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
```

Return an array with the output: `[0, 1]`.

<br />

## Function Description

Complete the `freqQuery` function in the editor below.

`freqQuery` has the following parameter(s):

- `int queries[q][2]`: a 2-d array of integers

<br />

## Returns

- `int[]`: the results of queries of type `3`

<br />

## Input Format

The first line contains an integer `q`, the number of queries.
Each of the next `q` lines contains two space-separated integers, operation and operand.

<br />

## Constraints

- `1 <= q <= 10^5`
- `1 <= x, y <= 10^9`
- All operations are valid.

<br />

## Sample Input 0

```
8
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2
```

## Sample Output 0

```
0
1
```

## Explanation 0

For the first query of type `3`, there is no integer whose frequency is `2`. So the answer is `0`.
For the second query of type `3`, there are two integers in the data structure whose frequency is `2` (integers `6` and `10`). So, the answer is `1`.
