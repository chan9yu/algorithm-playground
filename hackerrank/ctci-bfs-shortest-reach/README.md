<h2><a href="https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem">BFS: Shortest Reach in a Graph</a></h2>
<h3>Easy</h3>
<hr>

Consider an undirected graph consisting of `n` nodes where each node is labeled from `1` to `n` and the edge between any two nodes is always of length `6`. We define node `s` to be the starting position for a Breadth First Search (BFS).

Given a graph, determine the distances from the start node to each of its descendants and return the list in node number order, ascending. If a node is disconnected, its distance will be `-1`.

For example, there are `n = 4` nodes in the graph with a starting node `s = 1`. The list of edges = `[[1, 2], [1, 3]]`, and each has a weight of `6`.

```
1
|  \
2   3
```

Starting from node `1` and visiting its adjacent nodes, the distances to nodes `2` and `3` are both `6`. Node `4` is not connected, so its distance is `-1`. After starting node `1` is removed, the distances are `[6, 6, -1]`.

<br />

## Function Description

Complete the `bfs` function in the editor below. If a node is unreachable, its distance is `-1`.

`bfs` has the following parameter(s):

- `int n`: the number of nodes
- `int m`: the number of edges
- `int edges[m][2]`: each contains two integers that describe the nodes connected by an edge
- `int s`: the node to start from

<br />

## Returns

- `int[n-1]`: the distances to nodes in increasing node number order, not including the start node (-1 if a node is not reachable)

<br />

## Input Format

The first line contains an integer `q`, the number of queries. Each of the following `q` sets of lines has the following format:

- The first line contains two space-separated integers `n` and `m`, the number of nodes and edges in the graph.
- Each line `i` of the `m` subsequent lines contains two space-separated integers, `u` and `v`, that describe an edge between nodes `u` and `v`.
- The last line contains a single integer, `s`, the node number to start from.

<br />

## Constraints

- `1 <= q <= 10`
- `2 <= n <= 1000`
- `1 <= m <= (n * (n - 1)) / 2`
- `1 <= u, v, s <= n`

<br />

## Sample Input

```
2
4 2
1 2
1 3
1
3 1
2 3
2
```

## Sample Output

```
6 6 -1
-1 6
```

## Explanation

We perform the following two queries:

1. The given graph can be represented as:

```
1
|  \
2   3
```

where our start node, `s`, is node `1`. The shortest distances from `s` to the other nodes are one edge to node `2` (distance `6`), one edge to node `3` (distance `6`), and an infinite distance to node `4` (it is not connected to the graph, so the distance is `-1`).

2. The given graph can be represented as:

```
1   2 -- 3
```

where our start node, `s`, is node `2`. There is only one edge here, so node `1` is unreachable from node `2` (distance `-1`) and node `3` is one edge away (distance `6`). We report the distances in node order ascending, excluding the start node, so the answer is `-1 6`.
