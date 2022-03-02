"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[8813],{5831:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3392574c",path:"/en/guide/insert-or-update.html",title:"Insert Or Update",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. IFreeSql.InsertOrUpdate",slug:"_1-ifreesql-insertorupdate",children:[]},{level:2,title:"2. InsertOrUpdate in FreeSql.Repository",slug:"_2-insertorupdate-in-freesql-repository",children:[]},{level:2,title:"3. Batch Editing: BeginEdit",slug:"_3-batch-editing-beginedit",children:[]},{level:2,title:"4. On Duplicate Key Update (MySql only)",slug:"_4-on-duplicate-key-update-mysql-only",children:[]},{level:2,title:"5. On Conflict Do Update (PostgreSQL only)",slug:"_5-on-conflict-do-update-postgresql-only",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/insert-or-update.md"}},4099:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="insert-or-update" tabindex="-1"><a class="header-anchor" href="#insert-or-update" aria-hidden="true">#</a> Insert Or Update</h1><h2 id="_1-ifreesql-insertorupdate" tabindex="-1"><a class="header-anchor" href="#_1-ifreesql-insertorupdate" aria-hidden="true">#</a> 1. IFreeSql.InsertOrUpdate</h2><p><code>IFreeSql</code> defines the <code>InsertOrUpdate</code> method, which uses the characteristics and functions of the database to implement the added or modified functions. (since 1.5.0)</p><table><thead><tr><th>Database</th><th>Features</th><th></th><th>Database</th><th>Features</th></tr></thead><tbody><tr><td>MySql</td><td>on duplicate key update</td><td></td><td>Dameng</td><td>merge into</td></tr><tr><td>PostgreSQL</td><td>on conflict do update</td><td></td><td>Kingbase ES</td><td>on conflict do update</td></tr><tr><td>SqlServer</td><td>merge into</td><td></td><td>Shentong Database</td><td>merge into</td></tr><tr><td>Oracle</td><td>merge into</td><td></td><td>MsAccess</td><td>not support</td></tr><tr><td>Sqlite</td><td>replace into</td><td></td><td></td><td></td></tr><tr><td>Firebird</td><td>merge into</td><td></td><td></td><td></td></tr></tbody></table><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token comment">//Data to be processed</span>\n  <span class="token comment">//.IfExistsDoNothing() //If the data exists, do nothing (that means, insert the data if and only if the data does not exist)</span>\n  <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>When the entity class has auto-increment properties, batch <code>InsertOrUpdate</code> can be split into two executions at most. Internally, FreeSql will calculate the data without self-increment and with self-increment, and execute the two commands of <code>insert into</code> and <code>merge into</code> mentioned above (using transaction execution).</p><p>Note: the common repository in <code>FreeSql.Repository</code> also has <code>InsertOrUpdate</code> method, but their mechanism is different.</p><hr><h2 id="_2-insertorupdate-in-freesql-repository" tabindex="-1"><a class="header-anchor" href="#_2-insertorupdate-in-freesql-repository" aria-hidden="true">#</a> 2. InsertOrUpdate in <code>FreeSql.Repository</code></h2><p>To use this method, you need to reference the <code>FreeSql.Repository</code> or <code>FreeSql.DbContext</code> extensions package.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">InsertOrUpdate</span><span class="token punctuation">(</span>YOUR_ENTITY<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If there is data in the internal state management, then update it.</p><p>If there is no data in the internal state management, query the database to determine whether it exists.</p><blockquote><p>Update if it exists, insert if it doesn&#39;t exist</p></blockquote><p>Disadvantages: does not support batch operations</p><hr><h2 id="_3-batch-editing-beginedit" tabindex="-1"><a class="header-anchor" href="#_3-batch-editing-beginedit" aria-hidden="true">#</a> 3. Batch Editing: <code>BeginEdit</code></h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BeginEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BeginEdit01<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;1=1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BeginEdit01<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> cts <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category1_1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category1_2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category1_3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category2_1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category2_2&quot;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>cts<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    repo<span class="token punctuation">.</span><span class="token function">BeginEdit</span><span class="token punctuation">(</span>cts<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Start editing `cts`</span>\n\n    cts<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category2_3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    cts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">;</span>\n    cts<span class="token punctuation">.</span><span class="token function">RemoveAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    Assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> repo<span class="token punctuation">.</span><span class="token function">EndEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">BeginEdit01</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>When the above code <code>EndEdit</code> method is executed, 3 SQL statements are generated, as follows:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token string">&quot;BeginEdit01&quot;</span><span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;5f26bf07-6ac3-cbe8-00da-7dd74818c3a6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Category2_3&#39;</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">UPDATE</span> <span class="token string">&quot;BeginEdit01&quot;</span> <span class="token keyword">SET</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;123123&#39;</span> \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;5f26bf00-6ac3-cbe8-00da-7dd01be76e26&#39;</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token string">&quot;BeginEdit01&quot;</span> <span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;5f26bf00-6ac3-cbe8-00da-7dd11bcf54dc&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Use case: In winform, after loading the table data, perform some operations such as adding, modifying, and deleting, and then click [Save]</p><p>Note: This operation is only valid for the variable <code>cts</code>, not for comparison and update of the entire table.</p><h2 id="_4-on-duplicate-key-update-mysql-only" tabindex="-1"><a class="header-anchor" href="#_4-on-duplicate-key-update-mysql-only" aria-hidden="true">#</a> 4. <code>On Duplicate Key Update</code> (MySql only)</h2><p><code>FreeSql.Provider.MySql</code> and <code>FreeSql.Provider.MySqlConnector</code> support MySql&#39;s unique function <code>On Duplicate Key Update</code>.</p><p>This function can also insert or update data, and supports batch operations.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestOnDuplicateKeyUpdateInfo</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnDuplicateKeyUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-100&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO `TestOnDuplicateKeyUpdateInfo`(`id`, `title`, `time`) VALUES(100, &#39;title-100&#39;, &#39;2000-01-01 00:00:00.000&#39;)</span>\n<span class="token comment">//ON DUPLICATE KEY UPDATE</span>\n<span class="token comment">//`title` = VALUES(`title`), </span>\n<span class="token comment">//`time` = VALUES(`time`)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Methods that can be called after <code>OnDuplicateKeyUpdate()</code>:</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>IgnoreColumns</td><td>Ignore updated columns, the mechanism is the same as <code>IUpdate.IgnoreColumns</code></td></tr><tr><td>UpdateColumns</td><td>Specify updated columns, the mechanism is the same as <code>IUpdate.UpdateColumns</code></td></tr><tr><td>Set</td><td>Manually specify the updated column, the same function as <code>IUpdate.Set</code></td></tr><tr><td>SetRaw</td><td>As a supplement to the <code>Set</code> method, SQL strings can be passed in.</td></tr><tr><td>ToSql</td><td>Return the SQL statement to be executed</td></tr><tr><td>ExecuteAffrows</td><td>Execute and return the number of rows affected</td></tr></tbody></table><p>Both <code>IInsert</code> and <code>OnDuplicateKeyUpdate</code> have <code>IgnoreColumns</code> and <code>UpdateColumns</code> methods.</p><p>When inserting an entity or a set of entities, the <code>time</code> column is ignored, the code is as follows:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO `TestOnDuplicateKeyUpdateInfo`(`id`, `title`) VALUES(200, &#39;title-200&#39;)</span>\n<span class="token comment">//ON DUPLICATE KEY UPDATE</span>\n<span class="token comment">//`title` = VALUES(`title`), </span>\n<span class="token comment">//`time` = &#39;2000-01-01 00:00:00.000&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>We found that the <code>UPDATE time</code> part became a constant instead of <strong>VALUES(`time`)</strong>. The mechanism is as follows:</p><p>When there are columns in the <code>insert</code> part, they will be set in the form of VALUES(`field`) in the <code>update</code>;</p><p>When a column that does not exist in the <code>insert</code> part, it will be set as a constant in the <code>update</code>. When manipulating the entity array, this constant is executed for <code>case when ... end</code> (same as <code>IUpdate</code>);</p><hr><h2 id="_5-on-conflict-do-update-postgresql-only" tabindex="-1"><a class="header-anchor" href="#_5-on-conflict-do-update-postgresql-only" aria-hidden="true">#</a> 5. <code>On Conflict Do Update</code> (PostgreSQL only)</h2><p><code>FreeSql.Provider.PostgreSQL</code> supports PostgreSQL 9.5+ unique function <code>On Conflict(id) Do Update</code>.</p><p>The usage method is roughly the same as that of MySql&#39;s <code>OnDuplicateKeyUpdate</code>.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-200&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">201</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-201&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">202</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-202&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OnConflictDoUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO &quot;&quot;testonconflictdoupdateinfo&quot;&quot;(&quot;&quot;id&quot;&quot;, &quot;&quot;title&quot;&quot;) VALUES(200, &#39;title-200&#39;), (201, &#39;title-201&#39;), (202, &#39;title-202&#39;)</span>\n<span class="token comment">//ON CONFLICT(&quot;&quot;id&quot;&quot;) DO UPDATE SET</span>\n<span class="token comment">//&quot;&quot;title&quot;&quot; = EXCLUDED.&quot;&quot;title&quot;&quot;, </span>\n<span class="token comment">//&quot;&quot;time&quot;&quot; = CASE EXCLUDED.&quot;&quot;id&quot;&quot; </span>\n<span class="token comment">//WHEN 200 THEN &#39;2000-01-01 00:00:00.000000&#39; </span>\n<span class="token comment">//WHEN 201 THEN &#39;2000-01-01 00:00:00.000000&#39; </span>\n<span class="token comment">//WHEN 202 THEN &#39;2000-01-01 00:00:00.000000&#39; END::timestamp</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',39),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);