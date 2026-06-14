<h2><a href="https://www.hackerrank.com/challenges/pairs/problem">Pairs</a></h2>
<h3>Medium</h3>
<hr>

Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.

<br />

## Example

`k = 1`
`arr = [1, 2, 3, 4]`

There are three values that differ by `k = 1`: `2 - 1 = 1`, `3 - 2 = 1`, and `4 - 3 = 1`. Return `3`.

<br />

## Function Description

Complete the `pairs` function below.

`pairs` has the following parameter(s):

- `int k`: an integer, the target difference
- `int arr[n]`: an array of integers

<br />

## Returns

- `int`: the number of pairs that satisfy the criterion

<br />

## Input Format

The first line contains two space-separated integers `n` and `k`, the size of `arr` and the target value.
The second line contains `n` space-separated integers of the array `arr`.

<br />

## Constraints

- `2 <= n <= 10^5`
- `0 < k < 10^9`
- `0 < arr[i] < 2^31`
- each integer `arr[i]` will be unique

<br />

## Sample Input 0

```
5 2
1 5 3 4 2
```

## Sample Output 0

```
3
```

## Explanation 0

There are 3 pairs of integers in the set with a difference of `2`: `[5, 3]`, `[4, 2]` and `[3, 1]`.
