# 绘图原理
实际的数据  --> 画图坐标

>在`坐标系 coordinateSystem`{极坐标, 直角坐标系, 摩卡托坐标}中，
按照`算法 scale`{linear, stack, percent, tree, mercator}计算得到画图坐标，
再利用`图形 shape`{Sector, Circle, Line, Column, Area, Path}绘制出图表。

## 图表类型

| 图表类型   |   Series类         |  seriesCaculater |   scale  |   坐标     |  绘制形状  |    shape  |
| -------- |:------------------ |:--------------- |:--------- |:--------- |:--------- |:--------- |
| 饼图      |   PieSeries        |  percentage     |  percent  |   极坐标   |   扇形     |   Sector  |
| 圈图      |                    |                 |  percent  |   极坐标   |   扇形     |   Sector  |
| 环形图    |                    |                 |  percent  |   极坐标   |   扇形     |   Sector  |
| 气泡弧角图 |                    |                 |  percent  |   极坐标   |   扇形     |   Sector  |
| 散点图    |   BubbleSeries     |  scatter        |  scatter  |  直角坐标系 |   圆形     |   Circle |
| 六星散点图 |   BubbleSeries     |  scatter        |  scatter  |  直角坐标系 |  六边形    |           |
| 折线图    |   LineSeries       |  linear         |  linear   |  直角坐标系 |  折线      |   Line   |
| 曲线图    |   LineSeries       |  linear         |  linear   |  直角坐标系 |   曲线     |   Line   |
| 阶梯图    |   LineSeries       |  linear         |  linear   |  直角坐标系 |   直线     |   Line   |
| 分组柱状图 |   ColumnSeries     |  linear         |  linear   |  直角坐标系 |   柱状     |  Column  |
| 堆栈柱状图 |   StackSeries      |  linear         |  linear   |  直角坐标系 |   柱状     |  Column  | 
| 比例柱状图 |   PercentSeries    |  linear         |  linear   |  直角坐标系 |   柱状     |  Column  |
| 分组条形图 |   BarSeries        |  linear         |  linear   |  直角坐标系 |   条形     |    Bar   |
| 堆栈条形图 |   StackSeries      |  linear         |  linear   |  直角坐标系 |   条形     |    Bar   |
| 比例条形图 |   PercentSeries    |  linear         |  linear   |  直角坐标系 |   条形     |    Bar   |
| 区域图    |   AreaSeries       |  linear         |  linear   |  直角坐标系 |   区域     |   Area   |
| 比例区域图 |   PercentSeries    |  linear         |  linear   |  直角坐标系 |   区域     |   Area   |
| 冰柱数状图 |   TreeSeries       |  tree           |  tree     |  直角坐标系 |   区域     |   Area   |
| 变形放射数状图| TreeSeries       |  tree           |  tree     |  直角坐标系 |   扇形     |   Sector |
| 放射状 Reingold-Tilford树图|TreeSeries|  tree     |  tree     |  直角坐标系 | 圆形（带线） |   Circle |
| 可放缩的矩形分区树图 | TreeSeries |  tree           |  tree     |  直角坐标系 |   柱状     |   Column |
| 树状图    |   TreeSeries       |  tree           |  tree     |  直角坐标系 | 圆形（带线） |   Circle |
|中国区域地图|   ChinaMapSeries   |   *****         |  tree     |  摩卡托坐标 |  闭合曲线   |   Path   |

## 结构
```
    VI
    |-- [chart]
    |       |-- coordinate
    |       |       |-- xAxis ----- scale
    |       |       `-- yAxis ----- scale
    |       |-- [series]
    |       |       `-- [shape]
    |       |-- tooltip
    |       |-- legend
```


## 问题

- 直角坐标系分水平和垂直
- 曲线、折线、直线画图的区别
- 图形shape都绘制 需要具体什么样的入口数据
- 坐标系中的Scale类型怎么配置