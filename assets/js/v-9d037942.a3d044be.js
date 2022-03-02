"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[2603],{3552:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-9d037942",path:"/en/guide/Pagination.html",title:"Pagination",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"20 data per page, query page 1",slug:"_20-data-per-page-query-page-1",children:[]},{level:2,title:"Optimization",slug:"optimization",children:[]},{level:2,title:"API",slug:"api",children:[]},{level:2,title:"参考资料",slug:"参考资料",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/Pagination.md"}},9518:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(6252).uE)('<h1 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Be sure to define as singleton mode</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> CategoryId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_20-data-per-page-query-page-1" tabindex="-1"><a class="header-anchor" href="#_20-data-per-page-query-page-1" aria-hidden="true">#</a> 20 data per page, query page 1</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> total<span class="token punctuation">)</span> <span class="token comment">//Total number of records</span>\n    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Tolist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> Optimization</h2><p>For the previous versions of <code>SqlServer 2012</code>, use <code>row_number</code> for pagination;</p><p>For <code>SqlServer 2012+</code> version, using the latest <code>fetch next rows</code> pagination;</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Methods</th><th>Return</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>Return the SQL statement to be executed</td></tr><tr><td>ToList</td><td>List&lt;T1&gt;</td><td></td><td>Execute SQL query, and return the records of all the fields of the <code>T1</code> entity. If there are navigation properties, they will be queried and returned together. If the record does not exist, a list with <code>Count</code> of <code>0</code> will be returned.</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>Execute SQL query, and return the record of the specified fields. If the record does not exist, a list with <code>Count</code> of <code>0</code> will be returned.</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>Execute SQL query, and return the record of the specified fields of the parameters, and receive it as a tuple or basic type (<code>int</code>, <code>string</code>, <code>long</code>). If the record does not exist, a list with <code>Count</code> of <code>0</code> will be returned.</td></tr><tr><td>【Pagination】</td><td></td><td></td><td></td></tr><tr><td>Count</td><td>long</td><td></td><td>Number of records queried</td></tr><tr><td>Count</td><td>&lt;this&gt;</td><td>out long</td><td>The number of records to be queried, returned in the form of parameter with <code>out</code></td></tr><tr><td>Skip</td><td>&lt;this&gt;</td><td>int offset</td><td>Query the number of rows shifted backward</td></tr><tr><td>Offset</td><td>&lt;this&gt;</td><td>int offset</td><td>Query the number of rows shifted backward</td></tr><tr><td>Limit</td><td>&lt;this&gt;</td><td>int limit</td><td>Number of query data</td></tr><tr><td>Take</td><td>&lt;this&gt;</td><td>int limit</td><td>Number of query data</td></tr><tr><td>Page</td><td>&lt;this&gt;</td><td>int pageIndex, int pageSize</td><td>Pagination</td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><ul><li><a href="Query-from-Multi-Tables">《Query from Multi Tables》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Linq-to-Sql">《LinqToSql》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li><li><a href="Performance">《Performance》</a></li><li><a href="Tenant">《Tenant》</a></li><li><a href="Sharding-Tables-and-Database">《Sharding Tables and Database》</a></li></ul>',11),e={},p=(0,s(3744).Z)(e,[["render",function(n,a){return t}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);