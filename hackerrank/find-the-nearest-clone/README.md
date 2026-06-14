<h2><a href="https://www.hackerrank.com/challenges/find-the-nearest-clone/problem">Find the Nearest Clone</a></h2>
<h3>Medium</h3>
<hr>

In an effort to maintain the social distance, a country decides to clone its citizens. Every citizen is assigned a color, and a citizen and their clone share the same color. The country is represented as a connected undirected graph of `n` nodes, where each node is a citizen and each edge is a road connecting two citizens.

Starting from any node, find the shortest path to another node that has the same color as the starting node, considering only the nodes whose color is `val`. Each edge has a weight of `1`.

Return the shortest distance between any pair of nodes that share the color `val`. If no such pair exists, or the color `val` is not present, return `-1`.

<br />

## Function Description

Complete the `findShortest` function in the editor below.

`findShortest` has the following parameter(s):

- `int g_nodes`: the number of graph nodes
- `int g_from[g_edges]`: the start nodes for each edge
- `int g_to[g_edges]`: the end nodes for each edge
- `int ids[g_nodes]`: the color id per graph node
- `int val`: the id of the color to analyze

<br />

## Returns

- `int`: the length of the shortest path between two nodes of the same color, or `-1` if it is not possible.

<br />

## Input Format

The first line has two space-separated integers, `g_nodes` and `g_edges`, the number of nodes and edges in the graph.
Each of the next `g_edges` lines contains two space-separated integers, `g_from[i]` and `g_to[i]`, the nodes connected by an edge.
The next line has `g_nodes` space-separated integers, `ids[i]`, representing the color id of each node.
The last line has a single integer, `val`, representing the id of the color to analyze.

<br />

## Constraints

- `1 <= g_nodes <= 10^5`
- `1 <= g_edges <= 10^5`
- `1 <= g_from[i], g_to[i] <= g_nodes`
- `1 <= ids[i] <= 10^9`
- `1 <= val <= 10^9`

<br />

## Sample Input 0

```
4 3
1 2
1 3
4 2
1 2 1 1
1
```

## Sample Output 0

```
1
```

## Explanation 0

The graph given in the test case is shown below. Each node has a color id next to it.

The nodes with color id `1` are nodes `1`, `3`, and `4`. The distance between the closest nodes having color id `1` is `1` (nodes `1` and `3` are directly connected). So the answer is `1`.
