<h2><a href="https://www.hackerrank.com/challenges/ctci-making-anagrams/problem">Strings: Making Anagrams</a></h2>
<h3>Easy</h3>
<hr>

Given two strings, `a` and `b`, that may or may not be of the same length, determine the minimum number of character deletions required to make `a` and `b` anagrams. Any characters can be deleted from either of the strings.

<br />

## Example

`a = "cde"`
`b = "dcf"`

Delete `e` from `a` and `f` from `b` so that the remaining strings are `cd` and `dc`, which are anagrams. This takes `2` character deletions.

<br />

## Function Description

Complete the `makeAnagram` function in the editor below.

`makeAnagram` has the following parameter(s):

- `string a`: a string
- `string b`: another string

<br />

## Returns

- `int`: the minimum total characters that must be deleted

<br />

## Input Format

The first line contains a single string, `a`.
The second line contains a single string, `b`.

<br />

## Constraints

- `1 <= |a|, |b| <= 10^4`
- The strings `a` and `b` consist of lowercase English alphabetic letters, ascii[a-z].

<br />

## Sample Input 0

```
cde
abc
```

## Sample Output 0

```
4
```

## Explanation 0

We delete the following characters from our two strings to turn them into anagrams of each other:

1. Remove `d` and `e` from `cde` to get `c`.
2. Remove `a` and `b` from `abc` to get `c`.

We must delete `4` characters to make both strings anagrams, so we return `4`.
