<h2><a href="https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem">DFS: Connected Cell in a Grid</a></h2>
<h3>Medium</h3>
<hr>

Consider a matrix where each cell contains either a `0` or a `1`. Any cell containing a `1` is called a *filled cell*. Two cells are said to be *connected* if they are adjacent to each other horizontally, vertically, or diagonally. In the following grid, all cells marked `X` are connected to the cell marked `Y`.

```
XXX
XYX
XXX
```

If one or more filled cells are also connected, they form a *region*. Note that each cell in a region is connected to zero or more cells in the region but not necessarily directly connected to all the other cells in the region.

Given an `n x m` matrix, find and print the number of cells in the largest region in the matrix. Note that there may be more than one region in the matrix.

<br />

## Example

`grid = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]]`

The diagram below depicts two regions of the matrix. Connected regions are filled with `X` or `Y`. The largest region has `5` cells, marked `Y`.

```
YY00
0YY0
00Y0
X000
```

<br />

## Function Description

Complete the function `maxRegion` in the editor below.

`maxRegion` has the following parameter(s):

- `int grid[n][m]`: a two dimensional array of integers

<br />

## Returns

- `int`: the size of the largest region

<br />

## Input Format

The first line contains an integer `n`, the number of rows in the matrix, `grid`.
The second line contains an integer `m`, the number of columns in the matrix, `grid`.
Each of the next `n` lines contains `m` space-separated integers `grid[i][j]`.

<br />

## Constraints

- `0 < n, m < 10`

<br />

## Sample Input 0

```
4
4
1 1 0 0
0 1 1 0
0 0 1 0
1 0 0 0
```

## Sample Output 0

```
5
```

## Explanation 0

The diagram below depicts two regions of the matrix. Connected regions are filled with `X` or `Y`.

```
YY00
0YY0
00Y0
X000
```

The larger region has `5` cells, marked `Y`. The other region has a single cell, marked `X`. The number of cells in the largest region in this matrix is `5`.
