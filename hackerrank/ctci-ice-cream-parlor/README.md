<h2><a href="https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem">Hash Tables: Ice Cream Parlor</a></h2>
<h3>Easy</h3>
<hr>

Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream. On any given day, the parlor offers a line of `flavors`. Each flavor has a cost associated with it.

Given the value of `money` Sunny and Johnny have to spend, they want to choose two distinct flavors such that they spend all of their money.

Given a list of `cost`s for the flavors of ice cream, select the two that will cost all of the money they have.

Note that they must select two different flavors even if two flavors cost the same.

<br />

## Example

`money = 5`
`cost = [1, 3, 4, 5, 6]`

The combinations of flavors are `(0, 1), (0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4), (2, 3), (2, 4)`. The cost of the flavors at index `0` and `2` is `1 + 4 = 5`. Print the indices `1` and `3` (using 1-based indexing) on a new line: `1 3`.

<br />

## Function Description

Complete the function `whatFlavors` in the editor below.

`whatFlavors` has the following parameter(s):

- `int cost[n]`: an array of integers representing the cost of each flavor
- `int money`: the total amount of money they have to spend

<br />

## Prints

The function prints two space-separated integers, the indices of the two flavors purchased, in increasing order using 1-based indexing. There is a unique solution for each test case.

<br />

## Input Format

The first line contains an integer, `t`, the number of trips to the ice cream parlor.

Each of the next `t` sets of `3` lines is as follows:

- The first line contains the integer `money`, the amount of money they have to spend.
- The second line contains the integer `n`, the number of flavors offered at the time.
- The third line contains `n` space-separated integers denoting the cost of each flavor.

<br />

## Constraints

- `1 <= t <= 50`
- `2 <= money <= 10^4`
- `2 <= n <= 10^4`
- `1 <= cost[i] <= 10^4`

<br />

## Sample Input 0

```
2
4
5
1 4 5 3 2
4
4
2 2 4 3
```

## Sample Output 0

```
1 4
1 2
```

## Explanation 0

Sunny and Johnny make the following two trips to the parlor:

1. The first time, they pool together `money = 4` dollars. There are five flavors available that day and flavors `1` and `4` have a total cost of `1 + 3 = 4`.
2. The second time, they pool together `money = 4` dollars. There are four flavors available that day and flavors `1` and `2` have a total cost of `2 + 2 = 4`.
