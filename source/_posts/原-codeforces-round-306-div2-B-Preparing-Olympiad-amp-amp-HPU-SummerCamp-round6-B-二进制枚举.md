---
title: >-
  [原]codeforces round #306 div2 B Preparing Olympiad &amp;&amp; HPU SummerCamp
  round6 B 二进制枚举
tags: []
date: 2018-08-28 19:09:15
---

### 被隔壁oi爷暴打的一场校内赛，这道水题没做出来

[<font style="vertical-align:inherit;"><font style="vertical-align:inherit;">http://codeforces.com/contest/550/problem/B</font></font>](http://codeforces.com/contest/550/problem/B)

You have _n_ problems. You have estimated the difficulty of the _i_-th one as integer _c__i_. Now you want to prepare a problemset for a contest, using some of the problems you've made.

A problemset for the contest must consist of at least two problems. You think that the total difficulty of the problems of the contest must be at least _l_ and at most _r_. Also, you think that the difference between difficulties of the easiest and the hardest of the chosen problems must be at least _x_.

Find the number of ways to choose a problemset for the contest.

Input

The first line contains four integers _n_, _l_, _r_, _x_ (1 ≤ _n_ ≤ 15, 1 ≤ _l_ ≤ _r_ ≤ 109, 1 ≤ _x_ ≤ 106) — the number of problems you have, the minimum and maximum value of total difficulty of the problemset and the minimum difference in difficulty between the hardest problem in the pack and the easiest one, respectively.

The second line contains _n_ integers _c_1, _c_2, ..., _c__n_ (1 ≤ _c__i_ ≤ 106) — the difficulty of each problem.

Output

Print the number of ways to choose a suitable problemset for the contest.

Examples

input

<pre id="id006216143287294518">
3 5 6 1
1 2 3
</pre>

output

<pre id="id009812702219503664">
2
</pre>

input

<pre id="id0008705002904095704">
4 40 50 10
10 20 30 25
</pre>

output

<pre id="id007348456095551714">
2
</pre>

input

<pre id="id007068279861353814">
5 25 35 10
10 10 20 10 20
</pre>

output

<pre id="id006528180606196563">
6
</pre>

Note

In the first example two sets are suitable, one consisting of the second and third problem, another one consisting of all three problems.

In the second example, two sets of problems are suitable — the set of problems with difficulties 10 and 30 as well as the set of problems with difficulties 20 and 30.

In the third example any set consisting of one problem of difficulty 10 and one problem of difficulty 20 is suitable.

* * *

一开始没想到二进制枚举，sb一样看队友在那写for循环， 啊啊啊啊

这道题就是简单的**二进制枚举**

乘机补一下二进制枚举，原理是利用二进制每一位有0和1两种状态，从0枚举到![2^{n-1}](https://private.codecogs.com/gif.latex?2%5E%7Bn-1%7D)

<pre class="has">
`//---JQM---//
#include &lt;cstdio&gt;
#include &lt;cstring&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;
#include &lt;cmath&gt;
#include &lt;map&gt;
#include &lt;set&gt;
#include &lt;stack&gt;
#include &lt;queue&gt;
#define INF 0x3f3f3f3f
using namespace std;
typedef long long ll;
typedef unsigned long long ull;

int c[30];

int main()
{
	int t, i, n, l, r, x, maxx, minn, ans, sum;
	cin&gt;&gt;t;    //codeforces上此题没有t
	while(t--)    //codeforces上此题没有t
	{
		ans = 0;
		scanf("%d%d%d%d", &amp;n, &amp;l, &amp;r, &amp;x);
		for(i=0; i&lt;n; i++)
			scanf("%d", &amp;c[i]);
		int temp = 1&lt;&lt;n;
		for(i=0; i&lt;temp; i++)    //每一个i代表不同的情况
		{
			maxx = 0;
			minn = INF;
			sum = 0;
			for(int j=0; j&lt;n; j++)
				if(i&amp;(1&lt;&lt;j))    //判断二进制i的每一位是否为1，不是则跳过
				{
					sum += c[j];
					maxx = max(maxx, c[j]);
					minn = min(minn, c[j]);
				}
			if(sum&lt;=r &amp;&amp; sum&gt;= l &amp;&amp; maxx-minn&gt;=x) ans++;
		}
		cout&lt;&lt;ans&lt;&lt;endl;
	}

	return 0;
}`</pre>

                    <div>
                        作者：Jqmjyj 发表于 2018/08/28 19:09:15 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/82152851) https://blog.csdn.net/Jqmjyj/article/details/82152851                    </div>
                    <div>
                        阅读：32                     </div>