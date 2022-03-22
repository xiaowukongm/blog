(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{499:function(a,t,s){"use strict";s.r(t);var e=s(4),_=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"产品分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产品分析"}},[a._v("#")]),a._v(" 产品分析")]),a._v(" "),s("p",[a._v("首先我们来看一下市场上关于消息的实现是怎么样的。")]),a._v(" "),s("h3",{attrs:{id:"简书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简书"}},[a._v("#")]),a._v(" 简书")]),a._v(" "),s("p",[a._v("简书的消息系统主要分了两种")]),a._v(" "),s("ul",[s("li",[a._v("简信")]),a._v(" "),s("li",[a._v("提醒")])]),a._v(" "),s("h5",{attrs:{id:"简信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简信"}},[a._v("#")]),a._v(" 简信")]),a._v(" "),s("p",[a._v("简信的性质其实跟私信是一样的，是用户发送给用户的一则消息，有具体的信息内容。")]),a._v(" "),s("h5",{attrs:{id:"提醒"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提醒"}},[a._v("#")]),a._v(" 提醒")]),a._v(" "),s("p",[a._v("而提醒，则是系统发送的一则消息，其文案格式是固定的，并且对特殊对象一般拥有超链接。\n"),s("a",{attrs:{href:"https://upload-images.jianshu.io/upload_images/79702-d8e9bcfcbde089ec.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/79702-d8e9bcfcbde089ec.jpg",alt:""}}),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"知乎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知乎"}},[a._v("#")]),a._v(" 知乎")]),a._v(" "),s("p",[a._v("知乎跟简书一样，主要分了两种：")]),a._v(" "),s("ul",[s("li",[a._v("私信")]),a._v(" "),s("li",[a._v("消息")])]),a._v(" "),s("h5",{attrs:{id:"私信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私信"}},[a._v("#")]),a._v(" 私信")]),a._v(" "),s("p",[a._v("跟简书一样，使用户发送给用户的一则消息，也可以是管理员发送给用户的消息。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://upload-images.jianshu.io/upload_images/79702-4c98190143481f7a.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/79702-4c98190143481f7a.jpg",alt:""}}),s("OutboundLink")],1)]),a._v(" "),s("h5",{attrs:{id:"消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息"}},[a._v("#")]),a._v(" 消息")]),a._v(" "),s("p",[a._v("知乎的消息比简书的提醒有过之而无不及，知乎会对多条相似的消息进行聚会，以达到减轻用户阅读压力的体验。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://upload-images.jianshu.io/upload_images/79702-9c189d0ea208b71d.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/79702-9c189d0ea208b71d.jpg",alt:""}}),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"阿里云"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云"}},[a._v("#")]),a._v(" 阿里云")]),a._v(" "),s("ul",[s("li",[a._v("站内消息")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://www.zealsay.com/wp-content/uploads/2018/09/ab5bb2ba54be4345dbef77045886d8f2.png",alt:""}})]),a._v(" "),s("p",[a._v("阿里云的C端用户，主要是站内消息，而这些站内消息主要是促销活动的广播信息。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://www.zealsay.com/wp-content/uploads/2018/09/2789349276e9e1014a46832915bf1c30.png",alt:""}})]),a._v(" "),s("p",[a._v("还可以加一个"),s("code",[a._v("label")]),a._v("标签来区分消息的类别。")]),a._v(" "),s("h3",{attrs:{id:"消息的三种分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息的三种分类"}},[a._v("#")]),a._v(" 消息的三种分类")]),a._v(" "),s("p",[a._v("通过三种产品的简单分析，得出他们的消息有两种分类，在这基础上，我们再加上一种：公告。\n公告的主要性质是系统发送一则含有具体内容的消息，站内所有用户都能读取到这条消息。\n所以，消息有三种分类：")]),a._v(" "),s("ol",[s("li",[a._v("公告 Announce")]),a._v(" "),s("li",[a._v("提醒 Remind")]),a._v(" "),s("li",[a._v("私信 Message")])]),a._v(" "),s("h3",{attrs:{id:"提醒的语言分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提醒的语言分析"}},[a._v("#")]),a._v(" 提醒的语言分析")]),a._v(" "),s("p",[a._v("我们从简书取一组提醒样本：")]),a._v(" "),s("ul",[s("li",[a._v("3dbe1bd90774 关注了你")]),a._v(" "),s("li",[a._v("magicdawn 喜欢了你的文章 《单点登录的三种实现方式》")]),a._v(" "),s("li",[a._v("无良程序 喜欢了你的文章 《基于RESTful API 怎么设计用户权限控制？》")]),a._v(" "),s("li",[a._v("alexcc4 喜欢了你的文章 《在Nodejs中贯彻单元测试》")]),a._v(" "),s("li",[a._v("你在《基于RESTful API 怎么设计用户权限控制？》中收到一条 cnlinjie 的评论")]),a._v(" "),s("li",[a._v("你的文章《Session原理》已被加入专题 《ios开发》")]),a._v(" "),s("li",[a._v("分析句子结构，提醒的内容无非就是")])]),a._v(" "),s("p",[s("code",[a._v("「谁对一样属于谁的事物做了什么操作」 「someone do something in someone's something」")])]),a._v(" "),s("p",[a._v("someone = 提醒的触发者，或者发送者，标记为sender\ndo something = 提醒的动作，评论、喜欢、关注都属于一个动作，标记为action\nsomething = 提醒的动作作用对象，这就具体到是哪一篇文章，标记为target\nsomeone's = 提醒的动作作用对象的所有者，标记为targetOwner")]),a._v(" "),s("p",[a._v("这就清楚了，sender和targetOwner就是网站的用户，而target是具体到哪一篇文章，如果提醒的对象不仅仅局限于文章，还有其他的话，就需要增加一项targetType，来标记目标是文章还是其他的什么。而action，则是固定的，整个网站会触发提醒的动作可能就只有那几样：评论、喜欢、关注.....（或者其他业务需要提醒的动作）")]),a._v(" "),s("h3",{attrs:{id:"消息的两种获取方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息的两种获取方式"}},[a._v("#")]),a._v(" 消息的两种获取方式")]),a._v(" "),s("ul",[s("li",[a._v("推 Push")]),a._v(" "),s("li",[a._v("拉 Pull")])]),a._v(" "),s("h5",{attrs:{id:"以知乎为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以知乎为例"}},[a._v("#")]),a._v(" 以知乎为例")]),a._v(" "),s("p",[a._v("推的比较常见，需要针对某一个问题维护着一张关注者的列表，每当触发这个问题推送的条件时（例如有人回答问题），就把这个通知发送给每个关注者。")]),a._v(" "),s("p",[a._v("拉的相对麻烦一点，就是推的反向，例如每个用户都有一张关注问题的列表，每当用户上线的时候，对每个问题进行轮询，当问题的事件列表出现了比我原本时间戳大的信息就进行拉取。")]),a._v(" "),s("h5",{attrs:{id:"而我们则根据消息的不同分类采用不同的获取方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#而我们则根据消息的不同分类采用不同的获取方式"}},[a._v("#")]),a._v(" 而我们则根据消息的不同分类采用不同的获取方式：")]),a._v(" "),s("p",[a._v("通告和提醒，适合使用拉取的方式，消息产生之后，会存在消息表中，用户在某一特定的时间根据自己关注问题的表进行消息的拉取，然后添加到自己的消息队列中，")]),a._v(" "),s("p",[a._v("信息，适合使用推的方式，在发送者建立一条信息之后，同时指定接收者，把消息添加到接收者的消息队列中。")]),a._v(" "),s("h3",{attrs:{id:"订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅"}},[a._v("#")]),a._v(" 订阅")]),a._v(" "),s("p",[a._v("根据提醒使用拉取的方式，需要维护一个关注某一事物的列表。\n这种行为，我们称之为：**「订阅」Subscribe **")]),a._v(" "),s("h5",{attrs:{id:"一则订阅有以下三个核心属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一则订阅有以下三个核心属性"}},[a._v("#")]),a._v(" 一则订阅有以下三个核心属性：")]),a._v(" "),s("ul",[s("li",[a._v("订阅的目标 target")]),a._v(" "),s("li",[a._v("订阅的目标类型 targetType")]),a._v(" "),s("li",[a._v("订阅的动作 action")])]),a._v(" "),s("p",[a._v("比如我发布了一篇文章，那么我会订阅文章《XXX》的评论动作，所以文章《XXX》每被人评论了，就需要发送一则提醒告知我。")]),a._v(" "),s("h5",{attrs:{id:"订阅的规则还可以扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅的规则还可以扩展"}},[a._v("#")]),a._v(" 订阅的规则还可以扩展")]),a._v(" "),s("p",[a._v("我喜欢了一篇文章，和我发布了一篇文章，订阅的动作可能不一样。\n喜欢了一篇文章，我希望我订阅这篇文章更新、评论的动作。\n而发布了一篇文章，我希望我只是订阅这篇文章的评论动作。")]),a._v(" "),s("p",[a._v("这时候就需要多一个参数：subscribReason\n不同的subscribReason，对应着一个动作数组，\nsubscribReason = 喜欢，对应着 actions = [更新，评论]\nsubscribReason = 发布，对应着 actions = [评论]")]),a._v(" "),s("h5",{attrs:{id:"订阅的规则还还可以扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅的规则还还可以扩展"}},[a._v("#")]),a._v(" 订阅的规则还还可以扩展")]),a._v(" "),s("p",[a._v("用户可能会有一个自己的订阅设置，比如对于所有的喜欢的动作，我都不希望接收。\n比如Knewone的提醒设置")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://upload-images.jianshu.io/upload_images/79702-aa831d93990cff2e.jpg",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/79702-aa831d93990cff2e.jpg",alt:""}}),s("OutboundLink")],1),a._v("\n所以我们需要再维护一个表：SubscriptionConfig，来存放用户的提醒设置。\n并且，当用户没有提醒设置的时候，可以使用系统提供的一套默认设置：defaultSubscriptionConfig")]),a._v(" "),s("h3",{attrs:{id:"聚合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[a._v("#")]),a._v(" 聚合")]),a._v(" "),s("p",[a._v("如果我发布了一篇文章《XXX》，在我不在线的时候，被评论了10遍，当我一上线的时候，应该是收到十条信息类似于：「谁谁谁评论了你的文章《XXX》」?\n还是应该收到一条信息：「甲、乙、丙、丁...评论了你的文章《XXX》」?")]),a._v(" "),s("h3",{attrs:{id:"五个实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五个实体"}},[a._v("#")]),a._v(" 五个实体")]),a._v(" "),s("p",[a._v("通过上面的分析，大概知道做这个消息系统，需要哪些实体类：")]),a._v(" "),s("ol",[s("li",[a._v("消息实体 Notify")]),a._v(" "),s("li",[a._v("用户消息队列 UserNotify")]),a._v(" "),s("li",[a._v("用户 User")]),a._v(" "),s("li",[a._v("订阅 Subscription")]),a._v(" "),s("li",[a._v("订阅设置 SubscriptionConfig\n"),s("ul",[s("li",[a._v("消息 Notify")]),a._v(" "),s("li",[a._v("通告 Announce")]),a._v(" "),s("li",[a._v("提醒 Remind")]),a._v(" "),s("li",[a._v("信息 Message")])])])]),a._v(" "),s("h3",{attrs:{id:"行为分解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行为分解"}},[a._v("#")]),a._v(" 行为分解")]),a._v(" "),s("p",[a._v("说了这么多，整理一下整个消息流程的一些行为：")]),a._v(" "),s("ul",[s("li",[a._v("系统或者管理员，创建消息\ncreateNotify (make announce | remind | message)")]),a._v(" "),s("li",[a._v("用户，订阅消息，取消订阅\nsubscribe, cancelSubscription")]),a._v(" "),s("li",[a._v("用户管理订阅设置\ngetSubscriptionConfig, updateSubscriptionConfig")]),a._v(" "),s("li",[a._v("用户，拉取消息\npullNotify (pull announce | remind | message | all)")]),a._v(" "),s("li",[a._v("用户，查询消息队列\ngetUserNotify(get announce | remind | message | all)")]),a._v(" "),s("li",[a._v("用户阅读消息\nread")])])])}),[],!1,null,null,null);t.default=_.exports}}]);