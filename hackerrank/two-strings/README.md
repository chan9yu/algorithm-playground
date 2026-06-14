<h2><a href="https://www.hackerrank.com/challenges/two-strings/problem">Two Strings</a></h2>
<h3>Easy</h3>
<hr>

Given two strings, determine if they share a common substring. A substring may be as small as one character.

<br />

## Example

`s1 = "and"`
`s2 = "art"`

These share the common substring `a`.

`s1 = "be"`
`s2 = "cat"`

These do not share a substring.

<br />

## Function Description

Complete the function `twoStrings` in the editor below.

`twoStrings` has the following parameter(s):

- `string s1`: a string
- `string s2`: another string

<br />

## Returns

- `string`: either `YES` or `NO`

<br />

## Input Format

The first line contains a single integer `p`, the number of test cases.

The following `p` pairs of lines are as follows:

- The first line contains string `s1`.
- The second line contains string `s2`.

<br />

## Constraints

- `s1` and `s2` consist of characters in the range ascii[a-z].
- `1 <= p <= 10`
- `1 <= |s1|, |s2| <= 10^5`

<br />

## Sample Input 0

```
2
hello
world
hi
world
```

## Sample Output 0

```
YES
NO
```

## Explanation 0

We have `p = 2` pairs to check:

1. `s1 = "hello"`, `s2 = "world"`. The substrings `o` and `l` are common to both strings, so the answer is `YES`.
2. `s1 = "hi"`, `s2 = "world"`. `s1` and `s2` share no common substrings, so the answer is `NO`.
