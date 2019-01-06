---
title: '[原]poj3461 Oulipo Hash || kmp'
tags: []
date: 2018-08-17 19:11:30
---

poj3461[http://poj.org/problem?id=3461](http://poj.org/problem?id=3461)

**hash模板题**

Description

The French author Georges Perec (1936–1982) once wrote a book, La disparition, without the letter 'e'. He was a member of the Oulipo group. A quote from the book:

> Tout avait Pair normal, mais tout s’affirmait faux. Tout avait Fair normal, d’abord, puis surgissait l’inhumain, l’affolant. Il aurait voulu savoir où s’articulait l’association qui l’unissait au roman : stir son tapis, assaillant à tout instant son imagination, l’intuition d’un tabou, la vision d’un mal obscur, d’un quoi vacant, d’un non-dit : la vision, l’avision d’un oubli commandant tout, où s’abolissait la raison : tout avait l’air normal mais…

Perec would probably have scored high (or rather, low) in the following contest. People are asked to write a perhaps even meaningful text on some subject with as few occurrences of a given “word” as possible. Our task is to provide the jury with a program that counts these occurrences, in order to obtain a ranking of the competitors. These competitors often write very long texts with nonsense meaning; a sequence of 500,000 consecutive 'T's is not unusual. And they never use spaces.

So we want to quickly find out how often a word, i.e., a given string, occurs in a text. More formally: given the alphabet {'A', 'B', 'C', …, 'Z'} and two finite strings over that alphabet, a word _W_ and a text _T_, count the number of occurrences of _W_ in _T_. All the consecutive characters of W must exactly match consecutive characters of _T_. Occurrences may overlap.

Input

The first line of the input file contains a single number: the number of test cases to follow. Each test case has the following format:

*   One line with the word _W_, a string over {'A', 'B', 'C', …, 'Z'}, with 1 ≤ |_W_| ≤ 10,000 (here |_W_| denotes the length of the string _W_).
*   One line with the text _T_, a string over {'A', 'B', 'C', …, 'Z'}, with |_W_| ≤ |_T_| ≤ 1,000,000.

Output

For every test case in the input file, the output should contain a single number, on a single line: the number of occurrences of the word _W_in the text _T_.

Sample Input

<pre>
`3
BAPC
BAPC
AZA
AZAZAZA
VERDI
AVERDXIVYERDIAN`</pre>

Sample Output

<pre>
`1
3
0`</pre>

一开始做的时候直接用pow求得差基，忘了会爆了，笑哭

<pre class="has">
`#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;
#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;set&gt;
using namespace std;
#define maxn 1000010
#define base 13333
typedef unsigned long long ull;

char s1[10010];
char s2[maxn];
ull has2[maxn];
ull po[maxn];
void init()
{
    po[0]=1;
    for(int i=1; i&lt;maxn; i++)
        po[i]=po[i-1]*base;
}

ull gethas(int i, int l, ull has0[])
{
	if(i==0) return has0[i+l-1];
	return has0[i+l-1]-has0[i-1]*po[l];    //不能直接用pow，会爆，=-=忘了
}

int main()
{
	int t, i;
	cin&gt;&gt;t;
	init();
	while(t--)
	{
		scanf("%s%s", s1, s2);
		ull has1 = 0;
		int len1 = strlen(s1), len2 = strlen(s2);
		for(i=0; i&lt;len1; i++)
			has1 = has1*base+s1[i]-'A'+1;
		has2[0] = s2[0]-'A'+1;
		for(i=1; i&lt;len2; i++)
		{
			has2[i] = has2[i-1]*base+s2[i]-'A'+1;
		}
		int ans = 0;
		for(i=0; i&lt;len2-len1+1; i++)
		{
			if(s2[i]==s1[0])
			{
				if(gethas(i, len1, has2)==has1)
					ans++;
			}
		}
		cout&lt;&lt;ans&lt;&lt;endl;
	}

	return 0;
}`</pre>

### 用数组存差基，has0[i+l-1]-has0[i-1]*po[l]返回一定范围的hash进行对比

### 用ull直接取mod
                    <div>
                        作者：Jqmjyj 发表于 2018/08/17 19:11:30 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/81782220) https://blog.csdn.net/Jqmjyj/article/details/81782220                    </div>
                    <div>
                        阅读：45                     </div>