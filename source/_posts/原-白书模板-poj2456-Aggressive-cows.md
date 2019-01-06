---
title: '[原]白书模板 poj2456 Aggressive cows'
tags: []
date: 2018-08-17 19:21:59
---

基础二分 水题 [http://poj.org/problem?id=2456](http://poj.org/problem?id=2456)

Description

Farmer John has built a new long barn, with N (2 &lt;= N &lt;= 100,000) stalls. The stalls are located along a straight line at positions x1,...,xN (0 &lt;= xi &lt;= 1,000,000,000). 

His C (2 &lt;= C &lt;= N) cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, FJ want to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?

Input

* Line 1: Two space-separated integers: N and C 

* Lines 2..N+1: Line i+1 contains an integer stall location, xi

Output

* Line 1: One integer: the largest minimum distance

Sample Input

<pre>
`5 3
1
2
8
4
9`</pre>

Sample Output

<pre>
`3`</pre>

Hint

OUTPUT DETAILS: 

FJ can put his 3 cows in the stalls at positions 1, 4 and 8, resulting in a minimum distance of 3. 

Huge input data,scanf is recommended.

<pre class="has">
`#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;algorithm&gt;
#include&lt;iostream&gt;
#include&lt;cmath&gt;
using namespace std;
const int maxn = 1e6+10;

int a[maxn];
int n, c;

int check(int x)
{
	int cnt = 1;
	int temp = a[0];
	for(int i=1; i&lt;n; i++)
	{
		if(a[i]-temp&gt;=x)
		{
			cnt++;
			temp = a[i];
		}
		if(cnt&gt;=c) break;
	}
	return cnt&gt;=c?1:0;
}

int main()
{
	int i;
	while(cin&gt;&gt;n&gt;&gt;c)
	{
		for(i=0; i&lt;n; i++)
		{
			scanf("%d", &amp;a[i]);
		}
		sort(a, a+n);
		int l=0, m, r=a[n-1]-a[0];
		while(r&gt;l+1)
		{
			m = (l+r)/2;
			if(check(m))
				l = m;
			else r = m;
		}
		cout&lt;&lt;l&lt;&lt;endl;
	}

	return 0;
}`</pre>

一开始输出了m，样列过了然后疯狂wa，发现取m可能超，应该用l
                    <div>
                        作者：Jqmjyj 发表于 2018/08/17 19:21:59 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/81782324) https://blog.csdn.net/Jqmjyj/article/details/81782324                    </div>
                    <div>
                        阅读：43                     </div>