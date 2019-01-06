---
title: '[原]HPU lib 河南理工大学图书馆 已借书籍爬取 Python'
tags: []
date: 2018-08-30 21:12:51
---

看了下我们学校图书馆，顺手爬个已借书籍

一开始把学校想得没那么简单，尝试模拟登录，提交表单里面出现了一堆奇奇怪怪的东西，查了一下发现是.net生成的，又花了一会时间去抓这个参数

![](https://img-blog.csdn.net/20180830210037627?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pxbWp5ag==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

 最后，emmmm，没毛病，筛子系统果然cookies就能过，真是暴力

<pre class="has">
`import requests
from bs4 import BeautifulSoup
def main():
    headers = {
        'User-Agent': 'Mozilla / 5.0(X11;Linux x86_64) AppleWebKit / 537.36(KHTML, like Gecko) Ubuntu Chromium / 68.0.3440.106 Chrome / 68.0.3440.106 Safari / 537.36',
        'Cookie': 'ASP.NET_SessionId=dnlcydvvqwnc3yax1ymja2ji',
    }
    wb_data = requests.get('http://218.196.244.90:8080/Borrowing.aspx', headers = headers)
    soup = BeautifulSoup(wb_data.text, 'lxml')
    titles = soup.select('#ctl00_ContentPlaceHolder1_GridView1_ctl0{}_HyperLink1'.format(str(3))    #format从2开始到你借的书数量+1)
    print(titles)

main()`</pre>

这里没对输出处理

> [&lt;a href="Book.aspx?id=0199151729" id="ctl00_ContentPlaceHolder1_GridView1_ctl03_HyperLink1" style="color:#980000;color: #800000; font-weight: 700; font-size: small;" title="海边的卡夫卡"&gt;海边的卡夫卡&lt;/a&gt;]

有空再继续阿 
                    <div>
                        作者：Jqmjyj 发表于 2018/08/30 21:12:51 [原文链接](https://blog.csdn.net/Jqmjyj/article/details/82227785) https://blog.csdn.net/Jqmjyj/article/details/82227785                    </div>
                    <div>
                        阅读：103                     </div>