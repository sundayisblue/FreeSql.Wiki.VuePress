"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[6674],{4351:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-aaf75552",path:"/guide/select-return-data.html",title:"返回数据✨",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1、返回单条记录",slug:"_1、返回单条记录",children:[]},{level:2,title:"2、返回 List",slug:"_2、返回-list",children:[]},{level:2,title:"3、返回 TreeList",slug:"_3、返回-treelist",children:[]},{level:2,title:"4、返回 List + 导航属性的数据",slug:"_4、返回-list-导航属性的数据",children:[]},{level:2,title:"5、指定字段返回",slug:"_5、指定字段返回",children:[{level:3,title:"6、ToSql",slug:"_6、tosql",children:[]},{level:3,title:"7、执行SQL",slug:"_7、执行sql",children:[]}]},{level:2,title:"8、WithSql",slug:"_8、withsql",children:[]},{level:2,title:"9、ToChunk",slug:"_9、tochunk",children:[]},{level:2,title:"10、Dto 映射查询",slug:"_10、dto-映射查询",children:[]},{level:2,title:"11、API",slug:"_11、api",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/select-return-data.md"}},6526:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="返回数据✨" tabindex="-1"><a class="header-anchor" href="#返回数据✨" aria-hidden="true">#</a> 返回数据✨</h1><p>FreeSql 采用 ExpressionTree 优化读取速读，如果懂技术的你一定知道 .NETCore 技术下除了原生代码，最快就是 Emit 和 ExpressionTree。项目在初期使用的反射+缓存，虽然 .NETCore 优化了反射性能，但经过与Dapper性能测试对比之后，发现仍然有一定差距，改成 ExpresstionTree 后才与 Dapper 性能相当。FreeSql 支持的类型较多，实现 ExpressionTree 的复杂度较大，有兴趣的朋友可以翻阅源代码。</p><h2 id="_1、返回单条记录" tabindex="-1"><a class="header-anchor" href="#_1、返回单条记录" aria-hidden="true">#</a> 1、返回单条记录</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">Topic</span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>FreeSql约定，ToOne/First 永远返回 null 或 有数据的实体对象，ToList 永远返回非 null 的 List&lt;实体类型&gt;</p></blockquote><h2 id="_2、返回-list" tabindex="-1"><a class="header-anchor" href="#_2、返回-list" aria-hidden="true">#</a> 2、返回 List</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、返回-treelist" tabindex="-1"><a class="header-anchor" href="#_3、返回-treelist" aria-hidden="true">#</a> 3、返回 TreeList</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span>Category<span class="token punctuation">&gt;</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Select<span class="token operator">&lt;</span>Category<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">ToTreeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span>Category<span class="token punctuation">&gt;</span></span> t3 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Select<span class="token operator">&lt;</span>Category<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;家电&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTreeCte</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToTreeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//v1.6.0 AsTreeCte() 递归CTE查询 家电 下的所有子分类</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>查询数据加工为树型，注意：实体需要配置父子导航属性</p><h2 id="_4、返回-list-导航属性的数据" tabindex="-1"><a class="header-anchor" href="#_4、返回-list-导航属性的数据" aria-hidden="true">#</a> 4、返回 List + 导航属性的数据</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span> t4 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LeftJoin</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Type<span class="token punctuation">.</span>Id <span class="token operator">==</span> a<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//此时会查询 Topic普通字段 + 导航对象Type 字段</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_5、指定字段返回" tabindex="-1"><a class="header-anchor" href="#_5、指定字段返回" aria-hidden="true">#</a> 5、指定字段返回</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//返回一个字段</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> t5 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回匿名类</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span>匿名类<span class="token punctuation">&gt;</span></span> t6 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Title <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回元组</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> t7 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;id, title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回导航属性</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span>匿名类<span class="token punctuation">&gt;</span></span> t8 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span>\n    a<span class="token punctuation">.</span>Type <span class="token comment">//可以直接返回导航属性 Type</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回SQL字段</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span>匿名类<span class="token punctuation">&gt;</span></span> t9 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>\n    cstitle <span class="token operator">=</span> <span class="token string">&quot;substr(a.title, 0, 2)&quot;</span><span class="token punctuation">,</span> <span class="token comment">//将 substr(a.title, 0, 2) 作为查询字段</span>\n    csnow <span class="token operator">=</span> Convert<span class="token punctuation">.</span><span class="token function">ToDateTime</span><span class="token punctuation">(</span><span class="token string">&quot;now()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//将 now() 作为查询字段</span>\n    <span class="token comment">//奇思妙想：怎么查询开窗函数的结果</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回子查询的字段</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span>匿名类<span class="token punctuation">&gt;</span></span> t10 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">.</span>Id<span class="token punctuation">,</span>\n    count <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    max <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    min <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Min</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    name <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote><p>常量机制早期留给了原生SQL，如果真的需要返回该字符串：&quot;&#39;xxx&#39;&quot;</p></blockquote><h3 id="_6、tosql" tabindex="-1"><a class="header-anchor" href="#_6、tosql" aria-hidden="true">#</a> 6、ToSql</h3><p>每个 ToList 都可以使用 ToSql 返回 SQL String，有两个选项：</p><ul><li>FieldAliasOptions.AsIndex(默认) 自动产生 as1, as2, as3 .... 字段别名，可以最大程度防止多表，存在相同字段的问题；</li><li>FieldAliasOptions.AsProperty 使用属性名作为字段别名，合适使用二次构造 SQL 再次执行；</li></ul><h3 id="_7、执行sql" tabindex="-1"><a class="header-anchor" href="#_7、执行sql" aria-hidden="true">#</a> 7、执行SQL</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">xxx</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Path <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title2 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">List<span class="token punctuation">&lt;</span>xxx<span class="token punctuation">&gt;</span></span> t11 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>xxx<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;select * from song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">string</span> <span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> t12 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;select * from song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> t13 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;select * from song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>注意：Ado.Query 的实体特性是无效的，比如 [Column(Name = &quot;xxx&quot;)] 无效</p></blockquote><h2 id="_8、withsql" tabindex="-1"><a class="header-anchor" href="#_8、withsql" aria-hidden="true">#</a> 8、WithSql</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">WithSql</span><span class="token punctuation">(</span><span class="token string">&quot;select * from Topic where clicks &gt; ?val&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> val <span class="token operator">=</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//SELECT a.`Id`, a.`Clicks`, a.`CategoryId`, a.`Title`, a.`CreateTime` </span>\n<span class="token comment">//FROM (select * from Topic where clicks &gt; ?val) a </span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>WithSql 使用多次为 UNION ALL 查询</p></blockquote><h2 id="_9、tochunk" tabindex="-1"><a class="header-anchor" href="#_9、tochunk" aria-hidden="true">#</a> 9、ToChunk</h2><p>执行查询，分块返回数据，可减少内存开销。比如读取10万条数据，每次返回100条处理。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> testlist1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> testlist2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToChunk</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> done <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    testlist2<span class="token punctuation">.</span><span class="token function">AddRange</span><span class="token punctuation">(</span>done<span class="token punctuation">.</span>Object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//done.IsBreak = true; v1.7.0 停止读取</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//这里示范，最终 testlist1 与 testlist2 返回的数据相同。</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_10、dto-映射查询" tabindex="-1"><a class="header-anchor" href="#_10、dto-映射查询" aria-hidden="true">#</a> 10、Dto 映射查询</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Dto<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//默认的映射查询，Dto 与 Song 属性名相同的被查询</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DTO</span> <span class="token punctuation">{</span> xxx <span class="token operator">=</span> a<span class="token punctuation">.</span>ext <span class="token punctuation">}</span><span class="token punctuation">)</span> \n<span class="token comment">//情况1：附加所有映射，再额外映射 ext，返回 List&lt;DTO&gt;</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> a<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span> \n<span class="token comment">//情况2：只查询 id，返回 List&lt;Song&gt;</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> a<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span> \n<span class="token comment">//情况3：只查询 id，返回 List&lt;匿名对象&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>请仔细处理区别，请仔细处理区别，请仔细处理区别</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DTO</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">//情况4：只查询 id，返回 List&lt;DTO&gt;</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DTO</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span> xxx <span class="token operator">=</span> a<span class="token punctuation">.</span>ext <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">//情况5：查询 id, ext，返回 List&lt;DTO&gt;</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">//情况6：查询 id，返回 List&lt;Song&gt;</span>\n\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span> xxx <span class="token operator">=</span> a<span class="token punctuation">.</span>ext <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">//情况7：查询 id, ext，返回 List&lt;Song&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>GroupBy 所有方法不使用 DTO 映射规则</p></blockquote><p>这种映射支持单表/多表，在查询数据之前映射（不是先查询所有字段再到内存映射）</p><p>查找规则，查找属性名，会循环内部对象 _tables（join 查询后会增长），以 主表优先查，直到查到相同的字段。</p><p>如：</p><p>A, B, C 都有 id，Dto { id, a1, a2, b1, b2 }，A.id 被映射。也可以指定 id = C.id 映射。</p><blockquote><p>友情提醒：在 dto 可以直接映射一个导航属性</p></blockquote><h2 id="_11、api" tabindex="-1"><a class="header-anchor" href="#_11、api" aria-hidden="true">#</a> 11、API</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>ToList</td><td>List&lt;T1&gt;</td><td></td><td>执行SQL查询，返回 T1 实体所有字段的记录，若存在导航属性则一起查询返回，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToList&lt;Dto&gt;</td><td>List&lt;Dto&gt;</td><td>Lambda</td><td>执行SQL查询，返回指定字段或Dto映射的记录，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>执行SQL查询，返回 field 指定字段的记录，并以元组或基础类型(int,string,long)接收，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToOne</td><td>T1</td><td></td><td>执行SQL查询，返回 T1 实体所有字段的第一条记录，记录不存在时返回 null</td></tr><tr><td>ToChunk</td><td>&lt;空&gt;</td><td>int size, Action&lt;FetchCallbackArgs&lt;List&lt;T1&gt;&gt;&gt; done</td><td>执行SQL查询，分块返回数据，可减少内存开销。比如读取10万条数据，每次返回100条处理。</td></tr><tr><td>Any</td><td>bool</td><td></td><td>执行SQL查询，是否有记录</td></tr><tr><td>Sum</td><td>T</td><td>Lambda</td><td>指定一个列求和</td></tr><tr><td>Min</td><td>T</td><td>Lambda</td><td>指定一个列求最小值</td></tr><tr><td>Max</td><td>T</td><td>Lambda</td><td>指定一个列求最大值</td></tr><tr><td>Avg</td><td>T</td><td>Lambda</td><td>指定一个列求平均值</td></tr></tbody></table>',39),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);