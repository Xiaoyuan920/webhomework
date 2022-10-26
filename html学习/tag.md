## html标签
* \<!DOCTYPE html>声明文档类型
* html:包裹了整个完整的页面，是web页面的根元素  
    * 属性lang:有助于屏幕阅读技术确定要陈述的正确语言   
        * lang="zh-CN" 简体中文
## head标签
* \<head>标签中的内容不会在浏览器中显示，作用是保存页面的一些元数据。   
    * \<title>是一项元数据，用于表示整个HTML文档的标题。    
    * \<meta>用来定义描述数据的数据。
    * 例如:常用的元数据
    ```html
        <!-- 指定文档中的字符-->
        <meta charset="UTF-8">
        <!-- 说明网页作者与描述，针对搜索引擎 -->
        <meta name="author" content="梨">
        <!-- 对IE浏览器的兼容性设置 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- 对视口（viewport）的声明，html5响应布局 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    * \<link>标签   
        * 在元数据中添加对自定义图标(favorites icon)的引用，这些将在特定的场合中显示。
        ```html 
        <!-- 图标 -->
        <link rel="stylesheet" href="../html学习/图标.ico" type="image/x-icon">
        ```
        * 链接到外部样式css文件
        ```html
        <!-- 链接到外部样式css文件 -->
        <link rel="stylesheet" href="../login/css/loginStyle.css" type="text/css">
        ```
    * \<style>  
        * 定义了HTML文档的样式文件
        ```html
        <style>
            body {
                width: 100%;
                height: 100%;
            }
        </style>
        ``` 
    * \<script>
        * 定义客户端的脚本文件
        ```html
        <!-- 客户端的脚本文件  -->
        <script src="#"></script>
        <script>
            var m = "javascript";
            console.log(m);
        </script>
        ```
## body标签
* 标题标签
```html
<!-- 标题标签 -->
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```
* 段落标签
```html
<p>这是一个段落</p>
```
* 文档结构化：即文本语义，使用恰当的元素表达内容意义、作用以及外形。
* 列表标签
    * 无序列表
    ```html
    <!-- 无序 -->
    <ul>
        <li>无序列表项</li>
    </ul>
    ```
    * 有序列表
    ```html
    <!-- 有序 -->
    <ol>
        <li>有序列表项</li>
    </ol>
    ```
    * 列表嵌套：无需有序列表可以嵌套使用。
* 强调
    * 强调，默认是斜体
    ```html
    <!-- 斜体 -->
    <em>强调</em>
    ```
    * 非常重要，默认是粗体
    ```html
    <!-- 粗体 -->
    <strong>非常重要</strong>
    ```
    * 注意：不应该使用这两个标签来表示斜体与粗体的风格，应该使用CSS。
* 斜体字\<i>:被用来传达传统上用斜体表达的意义：外国文字、分类名称、技术术语、一种思想。
```html
<!-- 斜体字 -->
<i>斜体</i>
```
* 粗体字\<b>:被用来传达传统上用粗体表达的意义:关键字、产品名称、引导句。
```html
<!-- 粗体字 -->
<b>粗体</b>
```
* 下划线\<u>:被用来传达传统上用下划线表达的意义:专有名词、拼写错误。
```html
<!-- 下划线 -->
<u>下划线</u>
```
* 超链接\<a>:互联网的一个特性，使互联网成为互联网的网络。几乎任何网络内容都可以转换为链接，点击超链接将使网络浏览器传到另一个网址(URL)。
```html
<!-- 超链接 -->
<a href="#">超链接</a>
```
* URL可以指向HTML文件，文本文件，图像，文本文档，视频和音频文件以及可以在网络上保存的任何其他内容。如果浏览器不知道如何显示或处理文件，它会询问你是否要打开文件和下载文件。
    ```html
    <p>创建了一个指向<a href="https://www.jju.edu.cn">九江学院</a>的超链接。</p>
    ```     
    * \<a>标签--title属性增加超链接支持信息
    * \<a>标签--target属性指定在何处显示链接的资源。
        * _self:当前页面加载，此值是默认的，如果没有指定属性的话。
        * _blank:新窗口打开。
        * _parent:加载父框架或父浏览上下文。
    * \<a>标签--href属性，包含超链接指向的URL或URL片段。
            * 有三种表示：当前目录、子目录、上级目录
            * 有绝对路径和相对路径
* 自定义列表
    * 描述列表
    ```html
    <!-- 自定义列表 -->
    <dl>
        <dt>描述标题</dt>
        <dd>描述内容</dd>
    </dl>
    ```
* HTML文本排版-引用
    * 块引用\<blockquote>标签
    * 行引用\<q>标签
    * 引用属性cite
    ```html
    <blockquote cite="https://www.jju.edu.cn/">块引用会形成缩进</blockquote>
    <p>行内引用，<q cite="https://www.jju.edu.cn/">会形成双引号</q></p>
    ```
* HTML文本排版-缩略语\<abbr>标签
```html
 <p><abbr title="九江学院">九院</abbr>是我们大学四年生活学习的地方</p>
 ```
* HTML文本排版-联系方式\<address>标签
```html
<address>地址信息</address>
```
* HTML文本排版-上标\<sup>和下标\<sub>标签
```html
<p>水的化学分子式H<sub>2</sub>O。</p>
<p>3<sup>2</sup>的值为9</p>
```
* HTML文本排版-展示计算机代码
    * \<code>：用于标记计算机通用代码
    * \<pre>: 用来保留空白字符
    * \<var>: 用来标记具体变量名
    * \<kbd>: 用来标记输入电脑的键盘输入。
    * \<samp>：用来标记程序输出。
* HTML文本排版-标记时间和日期
    * \<time>标签
    * datetime属性
* HTML多媒体标签-\<img>标签
    * 用来把图片放到网页上，最少只需要一个src属性，包含了指向引入的图片的路径，可以是相对路径或绝对路径。
    * 备选文本属性alt
    ```html
    <img src="#" alt="#">
    <img src="网址上的" alt="#">
    ``` 
* 为图片配说明的用法
```html
<figure>
    <img src="#" alt="#" width="一只恐龙头部和躯干的骨架" width="200px" height="200px">
    <figcaption>博物馆展出的一只化<figcaption>
</figure>
```
* HTML多媒体标签--\<video>视频标签
```html
<video controls>
    <source src="###" type="video/mp4"/>
    <source src="###" type="video/webm"/>
    <p>你的浏览器不支持HTML5视频，可点击<a href="##">此链接</a>观看</p>
</video>
``` 
* HTML多媒体标签--\<audio>音频标签
```html
<audio controls>
    <source src="#" type="audio/mp3"/>
    <source src="#" type="audio/ogg"/>
    <p>你的浏览器不支持HTML5视频，可点击<a href="viper.mp3">此链接</a>收听</p>
</audio>
``` 
* HTML嵌入标签 
    * \<iframe>标签 
    ```html
    <iframe src="https://www.cctv.com" frameborder="0" sandbox=""></iframe>
    ```
    * \<embed>标签 
    ```html
    <embed src="/media/cc0-videos/frowe.mp4" type="video/webm"/>
    ``` 
    * \<object>标签 
    ```html
    <object data="media/examples/In-cco.pdf" type="application/pdf"></object>
    ```
* html标签属性
    * 全局属性是所有HTML元素共有的属性，它们可以用于所有元素，即使属性可能对某些元素不起作用。
    * 全局属性可以在所有的HTML元素上指定全局属性，甚至是在标准里没有指定的元素。
    * 常用html全局属性  
        * id定义唯一标识(ID),该标识在整个文档中必须唯一的，其目的是在链接(使用片段标识符),脚本或样式(使用CSS)时标识元素。
        * class一个以空格分隔的元素得类名(classes)列表，它允许CSS和Javascript通过类选择器或DOM方法来选择和访问特定的元素。
        * style应用于元素的CSS样式声明。
        * title包含表示与其所属相关信息的文本，通常可以作为提示呈现给用户。
        * hidden布尔属性表示该元素隐藏。    
* 数据展示-表格
    * 表格是由行与列组成的结构化数据集(表格数据),它能够简捷迅速地查找某个表示不同类型数据之间的某种关系的值
    * 表格在日常生活中很常见，且已经存在很长时间。  
    * 表格标签\<table>  
        * 表格行标签\<tr>
            * 表格列标签\<td>
    ```html
    <table>
        <tr>
            <td>单元格1</td>
            <td>单元格2</td>
            <td>单元格3</td>
        </tr>
    </table>
    ``` 
    * 标题标签\<th>
    ```html
    <table>
        <tr>
            <th>标题</th>
            <td>单元格2</td>
            <td>单元格3</td>
        </tr>
    </table>
    ``` 
    * 单元格跨越行和列  
        * 属性colspan   
        ```html 
        <td colspan="2">单元格1</td>
        ```
        * 属性rowspan   
        ```html 
        <td rowspan="2">单元格1</td>
        ``` 
    * \<caption>标签为表格增加标题
    ```html 
    <table>
        <caption>表格标题</caption>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
    </table>
    ``` 
    * 划分表格结构
        * \<thead>标签:嵌套在table元素中，放置在头部的位置，因为它通常代表第一行。
        * \<tfoot>标签:嵌套在table元素中，放置在底部(页脚)的位置，一般是最后一行，往往是对前面所有行的总结。    
        * \<tbody>标签:需要嵌套在table元素中，放置在\<thead>的下面或者是\<tfoot>的下面，这取决于你如何设计你的结构。
    * 表格数据示例：学生信息表
        * 建议结构
        ```html
        <table>
            <caption>标题</caption>
            <thead>头</thead>
            <tfoot>尾部</tfoot>
            <tbody>身体</tbody>
        </table>
        ``` 
* 数据交互-表单
    * web表单是用户和web站点或应用程序之间交互的主要界面，允许用户输入数据。
        * 大多数情况下会将数据发送到web服务器进行处理和存储。   
        * 或者在客户端使用某种方式立刻更新界面。
    * web表单是由一个或多个表单控件，以及一些有助于构建整个表单的附和元素组成——通常被称为HTML表单，这些控件可以是文本字段(单行或多行)、选择框、按钮、复选框、或单选按钮，大部分是使用\<input>元素创建的。
    * html实现  
    ```html 
    <form action="#">
        <ul>
            <li>
                <label for="name">发件人:</label>
                <input type="text" name="username" id="name">
            </li>
            <li>
                <label for="mail">收件人:</label>
                <input type="email" id="mail" name="user_email">
            </li>
            <li>
                <label for="msg">消息:</label>
                <textarea name="user_messasge" id="msg" cols="30" rows="10"></textarea>
            </li>
            <li class="button">
                <button type="submit">发送</button>
            </li>
        </ul>
    </form>
    ``` 
    * \<form>:所有表单都以一个\<form>元素开始
        ```html
        <form action="#" mothod="post">...</form>
        ``` 
        * action属性定义了在提交表单时，应该把所收集的数据送给谁(URL)去处理。
        * method属性定义了发送数据的HTTP方法，(通常是get或者post)。
        * \<label>、\<input>、\<textarea>标签
            * \<lable>标签使用for属性将标签链接到表单控件，这个属性应用对应的表单控件的id。
            * \<input>标签type属性指定行为方式  
                * text值是最常见的一种模式，表示文本，接受任何类型的文本输入。
                * email值定义了一个只接受格式正确的电子邮件地址的单行文字字段。
            * \<textarea>标签定义基本的多行文本框。
        * \<button>标签
            * type属性值：接受submit、reset、或者button三个值中的任一个。
            * 单击type属性定义为submit值(也是默认值)的按钮会发送表单得数据到\<form>元素的action属性所定义的网页。
            * 单击type属性定义为reset值的按钮，将所表单小部件重新设置为它们的默认值。
            * 单击type属性定义button值的按钮，不会发生任何事！通常使用javascript控制。
        * 构造HTML表单的标签
            * \<form>标签:构建表单的行为，表单不要嵌套。
            * \<label>标签:点击可以聚焦相应的小部件。
            * \<fieldset>和\<legend>元素:可分组表单，提高可阅读性。
            * 可以使用各种HTML标签对表单布局。
        * HTML表单元素
            * 文本输入框(input):是最基本的表单元素，可以让用户输入任何类型的数据。
                * 所有文本框都是一些通用规范：
                    * readonly:用户不能修改输入值。
                    * disabled：输入值不会发送。
                    * placeholder：文本输入框中出现的文本，可描述输入框的目的。
                    * size:框的大小。
                    * maxlength:可以输入的最大字符数。
            * 单行文本框
            ```html
             <input type="text" id="comment" name="comment" value="单行文本框">
            ```
            * 密码框
            ```html
            <input type="password" id="pwd" name="pwd"/>
            ``` 
            * 隐藏内容
            ```html 
            <input type="hidden" id="edit_id" name="edit_id" value="18"/>
            ```
            * 复选框
            ```html 
            <input type="checkbox" id="one" name="choice" value="-" checked/>
            <input type="checkbox" id="two" name="choice" value="-" checked/>
            ```
            * 单选按钮
            ```html
            <input type="radio" id="opt_a" name="question" checked/>
            <input type="radio" id="opt_b" name="question"/>
            <input type="radio" id="opt_c" name="question"/>
            ```
            * 按钮（button或input），有三种按钮：
                * submit 
                ```html
                <button type="submit">提交<strong>按钮</strong></button>
                <input type="submit" value="提交按钮"/>
                ```
                * reset
                ```html
                <button type="reset">重置<strong>按钮</strong></button>
                <input type="reset" value="重置按钮"/>
                ``` 
                * 图像按钮
                ```html
                <input type="image" alt="点击" src="*.png" width="80" height="30"/>
                ```
                * 文件选择器
                    * accept属性约束被接受的文件类型。
                    * multiple属性来实现选择多个文件。
                ```html
                 <input type="file" name="file" id="file" accept="image/*" multiple/>
                ```
                * email字段
                ```html
                 <input type="email" id="email" name="email" multiple/>
                 ```
                * 查询字段
                ```html
                <input type="search" id="search" name="search"/>
                ```
                * 电话号码字段
                ```html
                <input type="tel" id="tel" name="tel"/>
                ```
                * URL字段
                ```html 
                 <input type="url" id="url" name="url"/>
                ```
                * 数字字段
                ```html
                <input type="number" id="age" name="age" min="1" max="10" step="2"/>
                ```
                * 滑块控件
                ```html
                <input type="range" name="n" id="n" min="1" max="100" step="10"/>
                ```
                * 日期与时间选择器
                ```html
                <input type="date" name="date" id="date"/>
                <input type="time" name="time" id="time"/>
                <input type="datetime-local" name="datetime" id="datetime"/>
                <input type="month" name=month id="month"/>
                <input type="week" name="week" id="week"/>
                <input type="date" name="mydate" min="2022-09-01" max="2022-12-31" step="7" id="mydate"/>
                ```
                * 颜色选择控件
                ```html 
                <input type="color" name="color" id="color"/>
                ```
                * 多行文本框
                    * cols属性指定文件控件的可见宽度（列）单位为字符的宽度。
                    * rows属性指定文本控件的可见行数。
                    * wrap属性指定如何控制文本换行。取值可能为soft(默认值)/hard/off
                ```html
                <textarea name="a" id="a" cols="30" rows="10"></textarea>
                ```
                * 下拉控件：单选框
                ```html 
                    <select name="simple" id="simple">
                        <option value="1">梨</option>
                        <option value="2" selected>香蕉</option>
                    </select>
                ```
                ```html
                <select name="groups" id="groups">
                    <optgroup label="水果">
                        <option>苹果</option>
                        <option>草莓</option>
                    </optgroup>
                    <optgroup label="蔬菜">
                        <option>青菜</option>
                        <option value="番茄">番茄</option>
                    </optgroup>
                </select>
                ```
                * value属性：\<option>元素明确设置了明确了value属性，当表单提交时也会提交那个选项对应的值。
                ```html
                <select name="b" id="b">
                    <option value="1">选项一</option>
                    <option value="2">选项二</option>
                    <option value="3">选项三</option>
                </select>
                ```
                * 下拉控件：多选框
                ```html
                <select name="groups" id="groups" multiple>
                    <optgroup label="水果">
                        <option>苹果</option>
                        <option selected>草莓</option>
                    </optgroup>
                    <optgroup label="蔬菜">
                        <option>青菜</option>
                        <option value="番茄">番茄</option>
                    </optgroup>
                </select>
                ```
                * 自动补全框
                    * 可以通过\<datalist>元素中的一些显示的\<option>子元素为表单项提供推荐的自动补全值。\<datalist>元素需要指定一个id。
                    * 数据列表会使用list属性绑定至一个\<input>元素，该属性的取值就是要绑定的数据列表的id值。
                

