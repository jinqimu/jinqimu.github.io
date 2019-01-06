---
title: '[原]HDU1520 Anniversary party 不要超时'
tags: []
date: 2018-08-10 17:42:23
---

HDU1520链接:[http://acm.hdu.edu.cn/showproblem.php?pid=1520](http://acm.hdu.edu.cn/showproblem.php?pid=1520)

百度了一堆过不了的wa代码，真是要哭哭出来了我去

比如某排第一的代码

<pre class="has">
`#include&lt;bits/stdc++.h&gt;
using namespace std;
int l,k,n,dp[6005][2],node,father[6005],isson[6005],vis[6005];
//dp[i][0] 不邀请i的最大值 
//dp[i][1] 邀请i的最大值 
void dfs(int root)
{
	vis[root]=1;
	for(int i=1;i&lt;=n;i++)
	{
		if(vis[i]==0&amp;&amp;father[i]==root)
		{
			dfs(i);
			dp[root][1]+=dp[i][0];
			dp[root][0]+=max(dp[i][1],dp[i][0]);
		} 
	}
}
int main()
{
	cin&gt;&gt;n;
	for(int i=1;i&lt;=n;i++)
	{
		cin&gt;&gt;dp[i][1];	
	}
	while(cin&gt;&gt;l&gt;&gt;k)
	{
		if(l==0&amp;&amp;k==0)	break;
		father[l]=k;
		isson[l]++;
	} 
	for(int i=1;i&lt;=n;i++)
	{
		if(isson[i]==0)	
		{
			node=i;
			break;	
		}
	}
	dfs(node);
	cout&lt;&lt;max(dp[node][1],dp[node][0]);
	return 0;
}`</pre>

迷啊迷啊，超时啊

ac代码如下，主要卡了n的长度，找子节点的时候遍历会超时

<pre class="has">
`#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
using namespace std;

int n;
int vis[6050], boss[6020], flag[6050];
int a[6050];
int dp[6050][2];
vector&lt;int&gt; ve[6050];

void dfs(int fa)
{
	int i;
	dp[fa][1] = a[fa];
	for(i=0; i&lt;ve[fa].size(); i++)    //用vector而不用数组或者1-n遍历避免超时
	{
		int l = ve[fa][i];
		dfs(l);
		dp[fa][0] = max(dp[fa][0]+dp[l][0], dp[fa][0]+dp[l][1]);
		dp[fa][1] = dp[fa][1]+dp[l][0];
	}	
}

int main()
{
	int i, l, k;
	while(~scanf("%d", &amp;n))
	{
		memset(dp, 0, sizeof(dp));
		for(i=1; i&lt;=n; i++)
		{
			scanf("%d", &amp;a[i]);
			ve[i].clear();
		}
		while(scanf("%d%d", &amp;l, &amp;k) &amp;&amp; l &amp;&amp; k)
		{
			boss[l] = k;
			//flag[l] = 1;
			ve[k].push_back(l);
		}
		i = 1;
		while(boss[i])
			i = boss[i];

		dfs(i);
		cout&lt;&lt;max(dp[i][1], dp[i][0])&lt;&lt;endl;
	}

	return 0;
}`</pre>

                    <div>
                        作者：Jqmjyj 发表于 2018/08/10 17:42:23 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/81567383) https://blog.csdn.net/Jqmjyj/article/details/81567383                    </div>
                    <div>
                        阅读：41                     </div>