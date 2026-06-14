<h2><a href="https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem">Queues: A Tale of Two Stacks</a></h2>
<h3>Medium</h3>
<hr>

A _queue_ is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

- **Enqueue**: add a new element to the end of the queue.
- **Dequeue**: remove the element from the front of the queue and return it.

In this challenge, you must first implement a queue using two stacks. Then process `q` queries, where each query is one of the following three types:

- **`1 x`**: Enqueue element `x` into the end of the queue.
- **`2`**: Dequeue the element at the front of the queue.
- **`3`**: Print the element at the front of the queue.

<br />

## Adaptation note

> HackerRank's editor uses an I/O-based stub (it reads queries from stdin and prints the front of the queue for each type-`3` query). This repository adapts the problem to a single pure function `processQueries(queries)`, where `queries` is a 2-D array (e.g. `[[1, 42], [2], [3]]`). The function **returns** the array of values produced by every type-`3` (print front) operation.

<br />

## Function Description

Complete the `processQueries` function in the editor below.

`processQueries` has the following parameter(s):

- `int queries[q][]`: a 2-d array of queries, where each query starts with its type `1`, `2`, or `3`, and a type-`1` query is followed by the value `x` to enqueue

<br />

## Returns

- `int[]`: the values printed by each query of type `3`

<br />

## Input Format

The first line contains a single integer `q`, the number of queries.
Each of the next `q` lines contains a single query in the form described in the problem statement above. All queries start with an integer denoting the query type, but only query `1` is followed by an additional space-separated value, `x`, denoting the value to be enqueued.

<br />

## Constraints

- `1 <= q <= 10^5`
- `1 <= type <= 3`
- `1 <= x <= 10^9`
- It is guaranteed that a valid answer always exists for each query of types `2` and `3`.

<br />

## Sample Input 0

```
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2
```

## Sample Output 0

```
14
14
```

## Explanation 0

| Query | Operation       | Queue (front → back) | Return / Print |
|-------|-----------------|----------------------|----------------|
| 1 42  | enqueue 42      | `42`                 |                |
| 2     | dequeue         | `_`                  |                |
| 1 14  | enqueue 14      | `14`                 |                |
| 3     | print front     | `14`                 | `14`           |
| 1 28  | enqueue 28      | `14 28`              |                |
| 3     | print front     | `14 28`              | `14`           |
| 1 60  | enqueue 60      | `14 28 60`           |                |
| 1 78  | enqueue 78      | `14 28 60 78`        |                |
| 2     | dequeue         | `28 60 78`           |                |
| 2     | dequeue         | `60 78`              |                |

The two type-`3` queries print `14` and `14`, so the output is `[14, 14]`.
