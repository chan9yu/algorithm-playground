<h2><a href="https://www.hackerrank.com/challenges/torque-and-development/problem">Roads and Libraries</a></h2>
<h3>Medium</h3>
<hr>

The Ruler of HackerLand believes that every citizen of the country should have access to a library. Unfortunately, HackerLand was hit by a tornado that destroyed all of its libraries and obstructed its roads! As you are the greatest programmer of HackerLand, the ruler wants your help to repair the roads and build some new libraries efficiently.

HackerLand has `n` cities numbered from `1` to `n`. The cities are connected by `m` bidirectional roads. A citizen has access to a library if:

- Their city contains a library.
- They can travel by road from their city to a city containing a library.

The cost of repairing any road is `c_road` dollars, and the cost to build a library in any city is `c_lib` dollars.

You are given `q` queries, and each query is in the form of a map of HackerLand. For each query, find the minimum cost of making libraries accessible to all the citizens and print it on a new line.

<br />

## Example

The following figure is a sample map of HackerLand where the dotted lines denote obstructed roads:

```
n = 3
c_lib = 2
c_road = 1
cities = [[1, 2], [3, 1], [2, 3]]
```

Build a library in city `1` at a cost of `c_lib = 2`. Repair the road between cities `1` and `2` at a cost of `c_road = 1`. Repair the road between cities `2` and `3` at a cost of `c_road = 1`. Now all citizens have access to a library, and the total cost is `2 + 1 + 1 = 4`.

<br />

## Function Description

Complete the function `roadsAndLibraries` in the editor below.

`roadsAndLibraries` has the following parameters:

- `int n`: integer, the number of cities
- `int c_lib`: integer, the cost to build a library
- `int c_road`: integer, the cost to repair a road
- `int cities[m][2]`: each `cities[i]` contains two integers that represent cities that can be connected by a new road

<br />

## Returns

- `int`: the minimal cost

<br />

## Input Format

The first line contains a single integer `q`, that denotes the number of queries.

The subsequent lines describe each query in the following format:

- The first line contains four space-separated integers that describe the respective values of `n`, `m`, `c_lib`, and `c_road`, the number of cities, number of roads, cost of a library, and cost of a road.
- Each of the next `m` lines contains two space-separated integers, `u[i]` and `v[i]`, that describe a bidirectional road that can be built to connect cities `u[i]` and `v[i]`.

<br />

## Constraints

- `1 <= q <= 10`
- `1 <= n <= 10^5`
- `0 <= m <= min(10^5, (n * (n - 1)) / 2)`
- `1 <= c_road, c_lib <= 10^5`
- `1 <= u[i], v[i] <= n`
- Each road connects two distinct cities.

<br />

## Sample Input 0

```
2
3 3 2 1
1 2
3 1
2 3
6 6 2 5
1 3
3 4
2 4
1 2
2 3
5 6
```

## Sample Output 0

```
4
12
```

## Explanation 0

**Query 1:** Build a library in city `1` (cost `2`), repair the road between cities `1` and `2` (cost `1`), and repair the road between cities `2` and `3` (cost `1`). The total cost is `2 + 1 + 1 = 4`.

**Query 2:** Here it is optimal to build a library in each of the `6` cities because the cost to build a library (`c_lib = 2`) is less than the cost to repair a road (`c_road = 5`). The total cost is `2 * 6 = 12`.
