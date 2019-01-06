---
title: '[原]CodeForces - 893C Rumor  并查集'
tags: []
date: 2018-08-24 15:40:20
---

链接[http://codeforces.com/problemset/problem/893/C](http://codeforces.com/problemset/problem/893/C)

C. Rumor

time limit per test

2 seconds

memory limit per test

256 megabytes

input

standard input

output

standard output

Vova promised himself that he would never play computer games... But recently Firestorm — a well-known game developing company — published their newest game, World of Farcraft, and it became really popular. Of course, Vova started playing it.

Now he tries to solve a quest. The task is to come to a settlement named Overcity and spread a rumor in it.

Vova knows that there are _n_ characters in Overcity. Some characters are friends to each other, and they share information they got. Also Vova knows that he can bribe each character so he or she starts spreading the rumor; _i_-th character wants _c__i_ gold in exchange for spreading the rumor. When a character hears the rumor, he tells it to all his friends, and they start spreading the rumor to their friends (for free), and so on.

The quest is finished when all _n_ characters know the rumor. What is the minimum amount of gold Vova needs to spend in order to finish the quest?

Take a look at the notes if you think you haven't understood the problem completely.

Input

The first line contains two integer numbers _n_ and _m_ (1 ≤ _n_ ≤ 105, 0 ≤ _m_ ≤ 105) — the number of characters in Overcity and the number of pairs of friends.

The second line contains _n_ integer numbers _c__i_ (0 ≤ _c__i_ ≤ 109) — the amount of gold _i_-th character asks to start spreading the rumor.

Then _m_ lines follow, each containing a pair of numbers (_x__i_, _y__i_) which represent that characters _x__i_ and _y__i_ are friends (1 ≤ _x__i_, _y__i_ ≤ _n_, _x__i_ ≠ _y__i_). It is guaranteed that each pair is listed at most once.

Output

Print one number — the minimum amount of gold Vova has to spend in order to finish the quest.

Examples

Input

Copy

<pre id="id0004739612087564293">
5 2
2 5 3 4 8
1 4
4 5
</pre>

Output

Copy

<pre id="id005044321242425065">
10
</pre>

Input

Copy

<pre id="id008048980374087077">
10 0
1 2 3 4 5 6 7 8 9 10
</pre>

Output

Copy

<pre id="id0009336970407419043">
55
</pre>

Input

Copy

<pre id="id005167973549436237">
10 5
1 6 2 7 3 8 4 9 5 10
1 2
3 4
5 6
7 8
9 10
</pre>

Output

Copy

<pre id="id00386164195285306">
15
</pre>

Note

In the first example the best decision is to bribe the first character (he will spread the rumor to fourth character, and the fourth one will spread it to fifth). Also Vova has to bribe the second and the third characters, so they know the rumor.

In the second example Vova has to bribe everyone.

In the third example the optimal decision is to bribe the first, the third, the fifth, the seventh and the ninth characters.

* * *

### 保证每一个团体中贿赂的钱都是其中最便宜的那个

注意数据范围和long long

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
#define maxn 100050
//int fa[maxn];
ll ans;

struct stu
{
	int fa, val;
}fa[maxn];

int find(int x)
{
	if(fa[x].fa==x)
		return x;
	return fa[x].fa = find(fa[x].fa);
}

int join(int x, int y)
{
	int f1 = find(x);
	int f2 = find(y);
	if(f1!=f2)
	{
		fa[f1].fa = f2;
		fa[f2].val = min(fa[f1].val, fa[f2].val);
		fa[f1].val = 0;
		return 1;
	}
	return 0;
}

int main()
{
	int n, m, i, x, y;
	cin&gt;&gt;n&gt;&gt;m;
	for(i=1; i&lt;=n; i++)
	{
		fa[i].fa = i;
		scanf("%d", &amp;fa[i].val);
	}
	ans = 0;
	for(i=1; i&lt;=m; i++)
	{
		scanf("%d%d", &amp;x, &amp;y);
		join(x, y);
	}
	for(i=1; i&lt;=n; i++)
	{
		ans += fa[i].val;
	}
	cout&lt;&lt;ans&lt;&lt;endl;

	return 0;
}`</pre>

                    <div>
                        作者：Jqmjyj 发表于 2018/08/24 15:40:20 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/82019888) https://blog.csdn.net/Jqmjyj/article/details/82019888                    </div>
                    <div>
                        阅读：54                     </div>