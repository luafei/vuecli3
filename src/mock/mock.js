var Mock = require('mockjs')

// 定义数据类型
var data = Mock.mock({
    // 20条
    "data|1": [{
        // 商品种类
        "goodsClass": "女装",
        // 商品Id
        "goodsId|+1": 1,
        //商品名称
        "goodsName": "@ctitle(10)",
        //商品地址
        "goodsAddress": "@county(true)",
        //商品等级评价★
        "goodsStar|1-5": "★",
        //商品图片
        "goodsImg": "@Image('100x100','@color','小甜甜')",
        //商品售价
        "goodsSale|30-500": 30
    }]
})

console.log(data);