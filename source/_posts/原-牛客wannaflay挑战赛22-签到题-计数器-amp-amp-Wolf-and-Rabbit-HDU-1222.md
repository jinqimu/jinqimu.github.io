---
title: '[原]牛客wannaflay挑战赛22 签到题 计数器 &amp;&amp; Wolf and Rabbit HDU 1222'
tags: []
date: 2018-08-24 08:23:58
---

这链接真特么难找

链接：[https://www.nowcoder.com/acm/contest/160/A](https://www.nowcoder.com/acm/contest/160/A)

来源：牛客网

时间限制：C/C++ 1秒，其他语言2秒

空间限制：C/C++ 262144K，其他语言524288K

64bit IO Format: %lld

## 题目描述

有一个计数器，计数器的初始值为0，每次操作你可以把计数器的值加上a1,a2,...,an中的任意一个整数，操作次数不限（可以为0次），问计数器的值对m取模后有几种可能。

## 输入描述:

<pre>
`第一行两个整数n,m
接下来一行n个整数表示a1,a2,...,an
1≤n≤100
1≤m,a1,a2,...,an≤1000000000`</pre>

## 输出描述:

<pre>
`输出一个整数表示答案`</pre>

示例1

## 输入

<a>复制</a>

<pre>
`3 6
6 4 8`</pre>

## 输出

<a>复制</a>

<pre>
`3`</pre>

* * *

求出所有数的公共gcd，即每次可以多出多少（注意第一次要和m进行gcd）

<pre class="has">
`#include &lt;cstdio&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;

using namespace std;
int main()
{
    int n, m, i;
    cin&gt;&gt;n&gt;&gt;m;
    int x = m;
    int a;
    for(i=0; i&lt;n; i++){
        cin&gt;&gt;a;
        x = __gcd(a, x);
    }
    cout&lt;&lt;m/x&lt;&lt;endl;

    return 0;
}`</pre>

* * *

类似思想在hdu1222[http://acm.hdu.edu.cn/showproblem.php?pid=1222](http://acm.hdu.edu.cn/showproblem.php?pid=1222)

解法差不多，但是这个题面更容易理解

Problem Description

There is a hill with n holes around. The holes are signed from 0 to n-1.

![](http://acm.hdu.edu.cn/data/images/C9-1004-1.jpg)

A rabbit must hide in one of the holes. A wolf searches the rabbit in anticlockwise order. The first hole he get into is the one signed with 0\. Then he will get into the hole every m holes. For example, m=2 and n=6, the wolf will get into the holes which are signed 0,2,4,0\. If the rabbit hides in the hole which signed 1,3 or 5, she will survive. So we call these holes the safe holes.

Input

The input starts with a positive integer P which indicates the number of test cases. Then on the following P lines,each line consists 2 positive integer m and n(0&lt;m,n&lt;2147483648).

Output

For each input m n, if safe holes exist, you should output "YES", else output "NO" in a single line.

Sample Input

2

1 2

2 2

Sample Output

NO YES

<pre class="has">
`#include&lt;cstdio&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

int main()
{
	int T;
	scanf("%d",&amp;T);
	while(T--)
	{
		int n,m;
		scanf("%d%d",&amp;m,&amp;n);
		if(__gcd(m,n)==1)
			puts("NO");
		else
			puts("YES");
	}
	return 0;
}`</pre>

                    <div>
                        作者：Jqmjyj 发表于 2018/08/24 08:23:58 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/82011054) https://blog.csdn.net/Jqmjyj/article/details/82011054                    </div>
                    <div>
                        阅读：43                     </div>