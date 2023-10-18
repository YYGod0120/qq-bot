> 之前那个 oicq 的机器人(曾佬写的)，icqq 不维护了，然后有问题启动不了，解决不了问题。

> 重新找到一个 icqq，oicq2.0，api 基本相同，但是有人维护，登录等等一些问题能解决。

[oicq](https://github.com/icqqjs/icqq) icqq 的 api 和 oicq 是一致的，写功能要调用这儿的 api

[icqq](https://github.com/icqqjs/icqq) oicq 不维护了，换成 icqq 来写

[获取 api 签名](https://github.com/CikeyQi/unidbg-fetch-qsign-gui)

# 介绍

## 写法

需要调用 oicq 的 api 进行编写，每个函数需要有 client 参数(在 `index.ts` 文件下已经写好了一个 client)
可以参考`groupMes.ts`文件

功能都写在 package 目录下，
群聊的功能写在`./package/func/group`
客户端的功能写在`./package/func/clint`
私聊的功能写在`./package/func/private`

## 目前已有的功能：

1. 上线发信息给 master
2. 群里@回复肘击
