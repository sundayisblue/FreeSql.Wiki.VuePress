"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[8394],{5488:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-7ad3128b",path:"/en/guide/Repository-Layer.html",title:"Repository Layer",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Features",slug:"features",children:[]},{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Declaring",slug:"declaring",children:[]},{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"State Management",slug:"state-management",children:[]},{level:2,title:"Filtering and Verification",slug:"filtering-and-verification",children:[]},{level:2,title:"Sharding Tables and Database",slug:"sharding-tables-and-database",children:[]},{level:2,title:"Compatibility Problems",slug:"compatibility-problems",children:[]},{level:2,title:"Cascade Saving",slug:"cascade-saving",children:[]},{level:2,title:"APIs",slug:"apis",children:[]},{level:2,title:"Reference",slug:"reference",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/Repository-Layer.md"}},6795:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(6252).uE)('<h1 id="repository-layer" tabindex="-1"><a class="header-anchor" href="#repository-layer" aria-hidden="true">#</a> Repository Layer</h1><p>As an extension, FreeSql.Repository realizes the functions of the common DAL. There is a certain standard definition for the repository layer. FreeSql.Repository refers to the interface design of Abp vNext, defines and implements the basic repository layer for CURD operations.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li><code>Select/Attach</code>: Snapshot object, the corresponding <code>Update</code> only updates the changed fields.</li><li><code>Insert</code>: Insert data, adapt to each database to optimize execution <code>ExecuteAffrows</code>, <code>ExecuteIdentity</code> or <code>ExecuteInserted</code>;</li><li><code>InsertOrUpdate</code>: Insert or update data.</li><li><code>SaveMany</code>: Quickly save navigation objects (one-to-many, many-to-many).</li></ul><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><p>Situation 1: .NET Core or .NET 5.0+</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql.Repository\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Situation 2、.NET Framework</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Install-Package FreeSql.DbContext\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="declaring" tabindex="-1"><a class="header-anchor" href="#declaring" aria-hidden="true">#</a> Declaring</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token comment">//Automatically synchronize the entity structure to the database.</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> \n    <span class="token comment">//Be sure to define as singleton mode</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Method 1. The extension method of IFreeSql</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> curd <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>Note: Repository objects are not safe under multiple threads, so you should not operate them on multiple threads at the same time.</p></blockquote><ul><li>Does not support using the same repository instance in different threads at the same time</li></ul><p>Method 2. Inheritance</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SongRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseRepository<span class="token punctuation">&lt;</span>Song<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">SongRepository</span><span class="token punctuation">(</span><span class="token class-name">IFreeSql</span> fsql<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n    <span class="token comment">//Do something except CURD. </span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Method 3: Dependency Injection</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>Fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    services<span class="token punctuation">.</span><span class="token function">AddFreeRepository</span><span class="token punctuation">(</span>filter <span class="token operator">=&gt;</span> filter\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Apply</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISoftDelete<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;SoftDelete&quot;</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>IsDeleted <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Apply</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ITenant<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;Tenant&quot;</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TenantId <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token punctuation">,</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//Use in the controller</span>\n<span class="token keyword">public</span> <span class="token function">SongsController</span><span class="token punctuation">(</span><span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> repos1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>Dependency injection can realize the global setting of <strong>filtering and verification</strong>, which is convenient for the design of tenant functions.</p></blockquote><p>For more information: <a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></p><h2 id="state-management" tabindex="-1"><a class="header-anchor" href="#state-management" aria-hidden="true">#</a> State Management</h2><p>Only update the changed properties:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> repo<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//Take a snapshot of item at this time</span>\nitem<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Compare with snapshots to get changes</span>\n\n<span class="token comment">//UPDATE `tb_topic` SET `Title` = @p_0</span>\n<span class="token comment">//WHERE (`Id` = 1)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Or further streamline:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Take a snapshot of item at this time</span>\nitem<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Compare with snapshots to get changes</span>\n\n<span class="token comment">//UPDATE `tb_topic` SET `Title` = @p_0</span>\n<span class="token comment">//WHERE (`Id` = 1)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="filtering-and-verification" tabindex="-1"><a class="header-anchor" href="#filtering-and-verification" aria-hidden="true">#</a> Filtering and Verification</h2><p>Suppose we have two entities: <code>User</code> and <code>Topic</code>, and two repositories are defined in the domain class:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> userRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> topicRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>In practice, we always worry about the data security of <code>topicRepository</code>, that is, it is possible to query or change the topic of other users. Therefore, we have made improvements in the v0.0.7 version, adding the filter lambda expression parameter.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> userRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> topicRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>UserId <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Attach this condition when querying/modifying/deleting, so that the data of other users will not be modified.</li><li>When adding, use expressions to verify the legality of the data, if not legal, an exception will be thrown.</li></ul><h2 id="sharding-tables-and-database" tabindex="-1"><a class="header-anchor" href="#sharding-tables-and-database" aria-hidden="true">#</a> Sharding Tables and Database</h2><p>FreeSql provides a basic method of sharding tables through <code>AsTable</code>. As a distributed repository, and <code>GuidRepository</code> as a distributed storage, realizes the encapsulation of sharding tables and database (cross-server sharding-database is not supported).</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> logRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Log<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> oldname <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">&quot;YYYYMM&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Above we got a log repository, which corresponds to the shareding-table by year and month. Using CURD operation will finally take effect in the <code>Log_201903</code> table.</p><p>Notice:</p><ul><li>Versions after v0.11.12 can use CodeFirst to migrate sharding tables.</li><li>Do not use lazy loading in the entity type of sharding tables and database.</li></ul><h2 id="compatibility-problems" tabindex="-1"><a class="header-anchor" href="#compatibility-problems" aria-hidden="true">#</a> Compatibility Problems</h2><p>The <code>output inserted</code> feature provided by SqlServer. When the table uses auto-increment or the database defines a default value, use this feature to quickly return the inserted data. PostgreSQL also has similar functions, but not every database supports it.</p><p>When a database that does not support this feature (Sqlite/MySql/Oracle/Damen/MsAccess) is used, and the entity uses auto-increment attributes, the batch insertion of the repository will be executed one by one. The following improvements can be considered:</p><ul><li>Use uuid as the primary key (ie Guid).</li><li>Avoid using the default value function of the database.</li></ul><h2 id="cascade-saving" tabindex="-1"><a class="header-anchor" href="#cascade-saving" aria-hidden="true">#</a> Cascade Saving</h2><p>Please view the documentation of <a href="Cascade-Saving">Cascade Saving</a>.</p><h2 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIs</h2><table><thead><tr><th>Property</th><th>Return</th><th>Description</th></tr></thead><tbody><tr><td>EntityType</td><td>Type</td><td>The entity type that the repository is operating. Note that it is not necessarily <code>TEntity</code></td></tr><tr><td>UnitOfWork</td><td>IUnitOfWork</td><td>Unit of work currently in use</td></tr><tr><td>Orm</td><td>IFreeSql</td><td>ORM currently in use</td></tr><tr><td>DbContextOptions</td><td>DbContextOptions</td><td>DbContext settings currently in use，modifying the DbContextOptions will not affect other repository.</td></tr><tr><td>DataFilter</td><td>IDataFilter&lt;TEntity&gt;</td><td>Repository Filter, valid in this object</td></tr><tr><td>Select</td><td>ISelect&lt;TEntity&gt;</td><td>Prepare to query data</td></tr></tbody></table><table><thead><tr><th>Method</th><th>Return</th><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>AsType</td><td>void</td><td>Type</td><td>Change the type of entity that the repository is operating</td></tr><tr><td>Get</td><td>TEntity</td><td>TKey</td><td>Query data by the primary key</td></tr><tr><td>Find</td><td>TEntity</td><td>TKey</td><td>Query data by the primary key</td></tr><tr><td>Delete</td><td>int</td><td>TKey</td><td>Delete data by the primary key</td></tr><tr><td>Delete</td><td>int</td><td>Lambda</td><td>Delete data by lambda conditions</td></tr><tr><td>Delete</td><td>int</td><td>TEntity</td><td>Query entity</td></tr><tr><td>Delete</td><td>int</td><td>IEnumerable&lt;TEntity&gt;</td><td>Delete data in bulk</td></tr><tr><td>Insert</td><td>-</td><td>TEntity</td><td>Insert data, if the entity has an auto-increment column, the auto-increment after insertion will be filled into the entity</td></tr><tr><td>Insert</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>Insert data in bulk</td></tr><tr><td>Update</td><td>-</td><td>TEntity</td><td>Update entity</td></tr><tr><td>Update</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>Update data in bulk</td></tr><tr><td>InsertOrUpdate</td><td>-</td><td>TEntity</td><td>Insert ot update data in bulk</td></tr><tr><td>FlushState</td><td>-</td><td>-</td><td>Clear status information</td></tr><tr><td>Attach</td><td>-</td><td>TEntity</td><td>Attach entities to state management, which can be used to update or delete without querying</td></tr><tr><td>Attach</td><td>-</td><td>IEnumerable&lt;TEntity&gt;</td><td>Batch attach entities to state management</td></tr><tr><td>AttachOnlyPrimary</td><td>-</td><td>TEntity</td><td>Only attach the primary key data of the entity to the state management</td></tr><tr><td><a href="Cascade-Saving#many-to-many-cascade-saving">SaveMany</a></td><td>-</td><td>TEntity, string</td><td>Save the specified many-to-many or one-to-many navigation properties of the entity (full comparison)</td></tr><tr><td><a href="Insert-or-Update#3-batch-editing-beginedit">BeginEdit</a></td><td>-</td><td>List&lt;TEntity&gt;</td><td>Start editing the data of a set of entities</td></tr><tr><td>EndEdit</td><td>int</td><td>-</td><td>After a set of data is edited, save it</td></tr></tbody></table><blockquote><p>State management can realize that <code>Update</code> only updates the changed fields (not all fields), and it is very comfortable to use <code>Attach</code> and <code>Update</code> flexibly.</p></blockquote><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Insert-Data">《FreeSql 101, Part 1: Insert Data》</a></li><li><a href="Delete-Data">《FreeSql 101, Part 2: Delete Data》</a></li><li><a href="Update-Data">《FreeSql 101, Part 3: Update Data》</a></li><li><a href="Query-Data">《FreeSql 101, Part 4: Query Data》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Sharding-Tables-and-Database">《Sharding Tables and Database》</a></li><li><a href="Tenant">《Tenant》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Aspect-Oriented-Programming">《AOP》</a></li><li><a href="Unit-of-Work">《UnitOfWork》</a></li><li><a href="Batabase-Context">《DbContext》</a></li></ul>',51),e={},p=(0,s(3744).Z)(e,[["render",function(n,a){return t}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);