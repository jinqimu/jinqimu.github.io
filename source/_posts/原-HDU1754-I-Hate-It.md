---
title: '[原]HDU1754 I Hate It'
tags: []
date: 2018-08-21 16:24:45
---

链接[http://acm.hdu.edu.cn/showproblem.php?pid=1754](http://acm.hdu.edu.cn/showproblem.php?pid=1754)

> Problem Description
> 
> 很多学校流行一种比较的习惯。老师们很喜欢询问，从某某到某某当中，分数最高的是多少。
> 
> 这让很多学生很反感。
> 
> 不管你喜不喜欢，现在需要你做的是，就是按照老师的要求，写一个程序，模拟老师的询问。当然，老师有时候需要更新某位同学的成绩。
> 
> Input
> 
> 本题目包含多组测试，请处理到文件结束。
> 
> 在每个测试的第一行，有两个正整数 N 和 M ( 0&lt;N&lt;=200000,0&lt;M&lt;5000 )，分别代表学生的数目和操作的数目。
> 
> 学生ID编号分别从1编到N。
> 
> 第二行包含N个整数，代表这N个学生的初始成绩，其中第i个数代表ID为i的学生的成绩。
> 
> 接下来有M行。每一行有一个字符 C (只取'Q'或'U') ，和两个正整数A，B。
> 
> 当C为'Q'的时候，表示这是一条询问操作，它询问ID从A到B(包括A,B)的学生当中，成绩最高的是多少。
> 
> 当C为'U'的时候，表示这是一条更新操作，要求把ID为A的学生的成绩更改为B。
> 
> Output
> 
> 对于每一次询问操作，在一行里面输出最高成绩。
> 
> Sample Input
> 
> <pre>
> 
>  </pre>
> 
> 5 6 1 2 3 4 5 Q 1 5 U 3 6 Q 3 4 Q 4 5 U 2 9 Q 1 5
> 
> Sample Output
> 
> <pre>
> 
>  </pre>
> 
> 5 6 5 9
> 
> _Hint_
> 
> Huge input,the C function scanf() will work better than cin

这篇看了b站SWPU的教程，av9350697,链接[https://www.bilibili.com/video/av9350697?from=search&amp;seid=7800936964375617671](https://www.bilibili.com/video/av9350697?from=search&amp;seid=7800936964375617671)

<pre class="has">
`#include &lt;cstdio&gt;
#include &lt;cstring&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;
using namespace std;
typedef long long ll;

const int maxn = 2e6+10;

struct stu
{
	int l, r, v;
}node[maxn&lt;&lt;2];

int father[maxn];
void build(int i, int l, int r)
{
	node[i].l = l;
	node[i].r = r;
	node[i].v = 0;
	if(l == r)
	{
		father[l] = i;
		return ;
	}
	build(i&lt;&lt;1, l, (l+r)/2);
	build((i&lt;&lt;1)|1, (l+r)/2+1, r);
}
void update(int ri)
{
	if(ri==1) return ;
	int fi = ri/2;
	int a = node[fi&lt;&lt;1].v;
	int b = node[(fi&lt;&lt;1)|1].v;
	node[fi].v = max(a, b);
	update(fi);
}
int maax;
void query(int i, int l, int r)
{
	if(node[i].l == l &amp;&amp; node[i].r ==r)
	{
		maax = max(maax, node[i].v);
		return ;
	}
	i = i&lt;&lt;1;
	if(l&lt;=node[i].r)
	{
		if(r&lt;=node[i].r) query(i, l, r);
		else query(i, l, node[i].r);
	}
	i++;
	if(r&gt;=node[i].l)
	{
		if(l&gt;=node[i].l) query(i, l, r);
		else query(i, node[i].l, r);
	}
}

int main()
{
	int n, m, i, t;
	cin&gt;&gt;t;
	char s[10];
	while(t--)
	{
		scanf("%d%d", &amp;n, &amp;m);
		int x, y;
		build(1, 1, n);
		for(i=1; i&lt;=n; i++)
		{
			scanf("%d", &amp;x);
			node[father[i]].v = x;
			update(father[i]);
		}
		while(m--)
		{
			scanf("%s%d%d", s, &amp;x, &amp;y);
			if(s[0]=='Q')
			{
				maax = 0;
				query(1, x, y);
				cout&lt;&lt;maax&lt;&lt;endl;
			}
			else
			{
				node[father[x]].v = y;
				update(father[x]);
			}
		}
	}

	return 0;
}`</pre>

                    <div>
                        作者：Jqmjyj 发表于 2018/08/21 16:24:45 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/81909779) https://blog.csdn.net/Jqmjyj/article/details/81909779                    </div>
                    <div>
                        阅读：51                     </div>