<h2><a href="https://www.hackerrank.com/challenges/ctci-ransom-note/problem">Hash Tables: Ransom Note</a></h2>
<h3>Easy</h3>
<hr>

Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print `Yes` if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print `No`.

<br />

## Example

`magazine = "attack at dawn"`
`note = "Attack at dawn"`

The magazine has all the right words, but there is a case mismatch. The answer is `No`.

<br />

## Function Description

Complete the `checkMagazine` function in the editor below. It must print `Yes` if the note can be formed using the magazine, or `No` otherwise.

`checkMagazine` has the following parameters:

- `string magazine[m]`: the words in the magazine
- `string note[n]`: the words in the ransom note

<br />

## Prints

- `string`: either `Yes` or `No`; the answer is printed and there is no return value expected

<br />

## Input Format

The first line contains two space-separated integers, `m` and `n`, the numbers of words in the `magazine` and the `note`.
The second line contains `m` space-separated strings, each a word in the `magazine` string.
The third line contains `n` space-separated strings, each a word in the `note` string.

<br />

## Constraints

- `1 <= m, n <= 30000`
- `1 <= |word| <= 5`, where `|word|` is the length of any word in the `magazine` or `note`
- Each word consists of English alphabetic letters (i.e., `a` to `z` and `A` to `Z`).

<br />

## Sample Input 0

```
6 4
give me one grand today night
give one grand today
```

## Sample Output 0

```
Yes
```

## Explanation 0

`magazine = "give me one grand today night"`
`note = "give one grand today"`

The note has each word it needs available in the magazine, so the answer is `Yes`.

## Sample Input 1

```
6 5
two times three is not four
two times two is four
```

## Sample Output 1

```
No
```

## Explanation 1

`magazine = "two times three is not four"`
`note = "two times two is four"`

The word `two` appears only once in the magazine but is needed twice in the note, so the answer is `No`.
