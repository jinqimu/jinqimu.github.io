---
title: '[原]sublime ubuntu &amp;&amp; windows 配置 注册'
tags: []
date: 2018-08-19 13:03:55
---

<pre class="has">
`{
"cmd" : ["gnome-terminal -x bash -c \"g++ $file_name -o ${file_base_name} -lm -Wall; ./${file_base_name}; exec bash\""],
"selector" :  "source.c, source.c++",
"shell":true,
"working_dir" : "$file_path"
}`</pre>

Tools-&gt;Build System-&gt;new Build System

## **加头文件snippet**

Tools-&gt;Developer-&gt;new Snippet

<pre class="has">
`&lt;snippet&gt;
	&lt;content&gt;&lt;![CDATA[
//---JQM---//
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

]]&gt;&lt;/content&gt;
	&lt;!-- Optional: Set a tabTrigger to define how to trigger the snippet --&gt;
	&lt;!-- &lt;tabTrigger&gt;hello&lt;/tabTrigger&gt; --&gt;
	&lt;tabTrigger&gt;header&lt;/tabTrigger&gt;
	&lt;!-- Optional: Set a scope to limit where the snippet will trigger --&gt;
	&lt;!-- &lt;scope&gt;source.python&lt;/scope&gt; --&gt;
&lt;/snippet&gt;
`</pre>

* * *

18.8.25 update

### 关闭自动更新 及 注册

Preferences-&gt;Settings

加入"update_check": false,

<pre class="has">
`{
	"font_size": 17,
	"update_check": false,
}
`</pre>

前提是你注册了

注册码

Help-&gt;Enter LIcense

> <pre>
> —– BEGIN LICENSE —–
> Michael Barnes
> Single User License
> EA7E-821385
> 8A353C41 872A0D5C DF9B2950 AFF6F667
> C458EA6D 8EA3C286 98D1D650 131A97AB
> AA919AEC EF20E143 B361B1E7 4C8B7F04
> B085E65E 2F5F5360 8489D422 FB8FC1AA
> 93F6323C FD7F7544 3F39C318 D95E6480
> FCCC7561 8A4A1741 68FA4223 ADCEDE07
> 200C25BE DBBC4855 C4CFB774 C5EC138C
> 0FEC1CEF D9DCECEC D3A5DAD1 01316C36
> —— END LICENSE ——</pre>                    <div>
                        作者：Jqmjyj 发表于 2018/08/19 13:03:55 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/81837196) https://blog.csdn.net/Jqmjyj/article/details/81837196                    </div>
                    <div>
                        阅读：121                     </div>