---
title: '[原]KMP hdu1686 poj3461 Oulipo'
tags: []
date: 2018-08-18 11:03:40
---

链接 poj[http://poj.org/problem?id=3461](http://poj.org/problem?id=3461)

hdu[acm.hdu.edu.cn/showproblem.php?pid=1686](http://acm.hdu.edu.cn/showproblem.php?pid=1686)

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
3
BAPC
BAPC
AZA
AZAZAZA
VERDI
AVERDXIVYERDIAN</pre>

Sample Output

<pre>
1
3
0</pre>

魔改的kmp板子，可能还会有错

<pre class="has">
`#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;
#include&lt;iostream&gt;
#include&lt;cmath&gt;
using namespace std;
const int maxn = 1e6+10;

int n, m, cnt;
char s1[maxn], s2[maxn];
int a[maxn];

void getnext()
{
	int i=1, j=0;
	a[0] = 0;
	while(i&lt;m)
	{
		if(s2[i]==s2[j])
			a[i++] = ++j;
		else if(!j)
			i++;
		else j = a[j-1];
	}
}

int kmp()
{
	int i=0, j=0;
	while(i&lt;n&amp;&amp;j&lt;m)
	{
		if(s1[i]==s2[j])
		{
			i++;
			j++;
		}
		else if(!j)
			i++;
		else j = a[j-1];
		if(j==m)
		{
			cnt++;
			j=a[j-1];
		}
	}
	return cnt;
}

int main()
{
	int t, i;
	cin&gt;&gt;t;
	while(t--)
	{
		scanf("%s", s2);
		scanf("%s", s1);
		m = strlen(s2);
		n = strlen(s1);
		getnext();
		cnt = 0;
		cout&lt;&lt;kmp()&lt;&lt;endl;
	}

	return 0;
}`</pre>

                    <div>
                        作者：Jqmjyj 发表于 2018/08/18 11:03:40 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/81806706) https://blog.csdn.net/Jqmjyj/article/details/81806706                    </div>
                    <div>
                        阅读：27                     </div>