"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5617],{9114:(t,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-60c55912",path:"/guide/type-mapping.html",title:"类型映射",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"自定义类型映射(MapType)",slug:"自定义类型映射-maptype",children:[]},{level:2,title:"默认类型映射",slug:"默认类型映射",children:[]},{level:2,title:"MySql 特别类型映射",slug:"mysql-特别类型映射",children:[]},{level:2,title:"PostgreSQL 特别类型映射",slug:"postgresql-特别类型映射",children:[]},{level:2,title:"优先级",slug:"优先级",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/type-mapping.md"}},3322:(t,n,s)=>{s.r(n),s.d(n,{default:()=>p});const a=(0,s(6252).uE)('<h1 id="类型映射" tabindex="-1"><a class="header-anchor" href="#类型映射" aria-hidden="true">#</a> 类型映射</h1><h2 id="自定义类型映射-maptype" tabindex="-1"><a class="header-anchor" href="#自定义类型映射-maptype" aria-hidden="true">#</a> 自定义类型映射(MapType)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">EnumTestMap</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum</span> enum_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum<span class="token punctuation">?</span></span> enumnullable_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum</span> enum_to_int <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum<span class="token punctuation">?</span></span> enumnullable_to_int <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">BigInteger</span> biginteger_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">BigInteger<span class="token punctuation">?</span></span> bigintegernullable_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ToStringMapEnum</span> <span class="token punctuation">{</span> 中国人<span class="token punctuation">,</span> abc<span class="token punctuation">,</span> 香港 <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>应该不需要解释了吧？</p><p>BigInteger 都可以映射使用了，但请注意：仅仅是 CURD 方便， Equals == 判断可以使用，无法实现 + - * / 等操作；</p><p>v0.9.15 版本还可以将值对象映射成 typeof(string)，安装扩展包：</p><blockquote><p>dotnet add package FreeSql.Extensions.JsonMap</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">UseJsonMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//开启功能</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TestConfig</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;sysconfig&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">S_SysConfig</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonMap</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">TestConfig</span> Config <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="默认类型映射" tabindex="-1"><a class="header-anchor" href="#默认类型映射" aria-hidden="true">#</a> 默认类型映射</h2><table><thead><tr><th>csharp</th><th>MySql</th><th>SqlServer</th><th>PostgreSQL</th><th>Oracle</th><th>Sqlite</th><th>达梦</th></tr></thead><tbody><tr><td>bool | bool?</td><td>bit(1)</td><td>bit</td><td>bool</td><td>number(1)</td><td>boolean</td><td>number(1)</td></tr><tr><td>sbyte | sbyte?</td><td>tinyint(3)</td><td>smallint</td><td>int2</td><td>number(4)</td><td>smallint</td><td>number(4)</td></tr><tr><td>short | short?</td><td>smallint(6)</td><td>smallint</td><td>int2</td><td>number(6)</td><td>smallint</td><td>number(6)</td></tr><tr><td>int | int?</td><td>int(11)</td><td>int</td><td>int4</td><td>number(11)</td><td>integer</td><td>number(11)</td></tr><tr><td>long | long?</td><td>bigint(20)</td><td>bigint</td><td>int8</td><td>number(21)</td><td>integer</td><td>number(21)</td></tr><tr><td>byte | byte?</td><td>tinyint(3) unsigned</td><td>tinyint</td><td>int2</td><td>number(3)</td><td>int2</td><td>number(3)</td></tr><tr><td>ushort | ushort?</td><td>smallint(5) unsigned</td><td>int</td><td>int4</td><td>number(5)</td><td>unsigned</td><td>number(5)</td></tr><tr><td>uint | uint?</td><td>int(10) unsigned</td><td>bigint</td><td>int8</td><td>number(10)</td><td>decimal(10,0)</td><td>number(10)</td></tr><tr><td>ulong | ulong?</td><td>bigint(20) unsigned</td><td>decimal(20,0)</td><td>numeric(20,0)</td><td>number(20)</td><td>decimal(21,0)</td><td>number(20)</td></tr><tr><td>double | double?</td><td>double</td><td>float</td><td>float8</td><td>float(126)</td><td>double</td><td>double</td></tr><tr><td>float | float?</td><td>float</td><td>real</td><td>float4</td><td>float(63)</td><td>float</td><td>real</td></tr><tr><td>decimal | decimal?</td><td>decimal(10,2)</td><td>decimal(10,2)</td><td>numeric(10,2)</td><td>number(10,2)</td><td>decimal(10,2)</td><td>number(10,2)</td></tr><tr><td>Guid | Guid?</td><td>char(36)</td><td>uniqueidentifier</td><td>uuid</td><td>char(36 CHAR)</td><td>character(36)</td><td>char(36)</td></tr><tr><td>TimeSpan | TimeSpan?</td><td>time</td><td>time</td><td>time</td><td>interval day(2) to second(6)</td><td>bigint</td><td>-</td></tr><tr><td>DateTime | DateTime?</td><td>datetime</td><td>datetime</td><td>timestamp</td><td>timestamp(6)</td><td>datetime</td><td>timestamp(6)</td></tr><tr><td>DateTimeOffset | DateTimeOffset?</td><td>-</td><td>datetimeoffset</td><td>-</td><td>timestamp(6) with local time zone</td><td>-</td><td>timestamp(6)</td></tr><tr><td>Enum | Enum?</td><td>enum</td><td>int</td><td>int4</td><td>number(16)</td><td>mediumint</td><td>number(16)</td></tr><tr><td>FlagsEnum | FlagsEnum?</td><td>set</td><td>bigint</td><td>int8</td><td>number(32)</td><td>bigint</td><td>number(32)</td></tr><tr><td>byte[]</td><td>varbinary(255)</td><td>varbinary(255)</td><td>bytea</td><td>blob</td><td>blob</td><td>blob</td></tr><tr><td>string</td><td>varchar(255)</td><td>nvarchar(255)</td><td>varchar(255)</td><td>nvarchar2(255)</td><td>nvarchar(255)</td><td>nvarchar2(255)</td></tr></tbody></table><blockquote><p>以上类型和长度是默认值，可手工设置 Column 特性 DbType 值</p></blockquote><blockquote><p>string 指定长度 [Column(DbType = &quot;varchar(max)&quot;)] 或者 [MaxLength(-1)] 或者 [Column(StringLength = -1)]，当长度 -1 时产生的映射如下：</p></blockquote><table><thead><tr><th>MySql</th><th>PostgreSQL</th><th>SqlServer</th><th>Oracle</th><th>Sqlite</th><th>Firebird</th><th>MsAccess</th><th>达梦</th><th>金仓</th><th>神通</th></tr></thead><tbody><tr><td>text</td><td>text</td><td>varchar(max)</td><td>nclob</td><td>text</td><td>blob sub_type 1</td><td>longtext</td><td>text</td><td>text</td><td>text</td></tr></tbody></table><blockquote><p>注意：Oracle nclob 需要 v1.3.2+ 版本才支持，否则将映射 nvarchar2(4000)</p></blockquote><blockquote><p>注意：MySql [MaxLength(-2)] 或者 [Column(StringLength = -2)] 映射类型 longtext，其他数据库的映射规则与 -1 相同</p></blockquote><blockquote><p>decimal 指定长度 [Column(Precision = 10, Scale = 2)]</p></blockquote><h2 id="mysql-特别类型映射" tabindex="-1"><a class="header-anchor" href="#mysql-特别类型映射" aria-hidden="true">#</a> MySql 特别类型映射</h2><table><thead><tr><th>csharp</th><th>MySql</th></tr></thead><tbody><tr><td>MygisPoint</td><td>point</td></tr><tr><td>MygisLineString</td><td>linestring</td></tr><tr><td>MygisPolygon</td><td>polygon</td></tr><tr><td>MygisMultiPoint</td><td>multipoint</td></tr><tr><td>MygisMultiLineString</td><td>multilinestring</td></tr><tr><td>MygisMultiPolygon</td><td>multipolygon</td></tr></tbody></table><h2 id="postgresql-特别类型映射" tabindex="-1"><a class="header-anchor" href="#postgresql-特别类型映射" aria-hidden="true">#</a> PostgreSQL 特别类型映射</h2><table><thead><tr><th>csharp</th><th>PostgreSQL</th></tr></thead><tbody><tr><td>BitArray</td><td>varbit(64)</td></tr><tr><td>NpgsqlPoint | NpgsqlPoint?</td><td>point</td></tr><tr><td>NpgsqlLine | NpgsqlLine?</td><td>line</td></tr><tr><td>NpgsqlLSeg | NpgsqlLSeg?</td><td>lseg</td></tr><tr><td>NpgsqlBox | NpgsqlBox?</td><td>box</td></tr><tr><td>NpgsqlPath | NpgsqlPath?</td><td>path</td></tr><tr><td>NpgsqlPolygon | NpgsqlPolygon?</td><td>polygon</td></tr><tr><td>NpgsqlCircle | NpgsqlCircle?</td><td>circle</td></tr><tr><td>(IPAddress Address, int Subnet) | (IPAddress Address, int Subnet)?</td><td>cidr</td></tr><tr><td>IPAddress</td><td>inet</td></tr><tr><td>PhysicalAddress</td><td>macaddr</td></tr><tr><td>NpgsqlRange&lt;int&gt; | NpgsqlRange&lt;int&gt;?</td><td>int4range</td></tr><tr><td>NpgsqlRange&lt;long&gt; | NpgsqlRange&lt;long&gt;?</td><td>int8range</td></tr><tr><td>NpgsqlRange&lt;decimal&gt; | NpgsqlRange&lt;decimal&gt;?</td><td>numrange</td></tr><tr><td>NpgsqlRange&lt;DateTime&gt; | NpgsqlRange&lt;DateTime&gt;?</td><td>tsrange</td></tr><tr><td>PostgisPoint</td><td>geometry</td></tr><tr><td>PostgisLineString</td><td>geometry</td></tr><tr><td>PostgisPolygon</td><td>geometry</td></tr><tr><td>PostgisMultiPoint</td><td>geometry</td></tr><tr><td>PostgisMultiLineString</td><td>geometry</td></tr><tr><td>PostgisMultiPolygon</td><td>geometry</td></tr><tr><td>PostgisGeometry</td><td>geometry</td></tr><tr><td>PostgisGeometryCollection</td><td>geometry</td></tr><tr><td>Dictionary&lt;string, string&gt;</td><td>hstore</td></tr><tr><td>JToken</td><td>jsonb</td></tr><tr><td>JObject</td><td>jsonb</td></tr><tr><td>JArray</td><td>jsonb</td></tr><tr><td>数组</td><td>以上所有类型都支持，包括默认类型</td></tr></tbody></table><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>从数据库导入特性 &gt; 实体特性 &gt; FluentApi &gt; Aop</p>',22),e={},p=(0,s(3744).Z)(e,[["render",function(t,n){return a}]])},3744:(t,n)=>{n.Z=(t,n)=>{const s=t.__vccOpts||t;for(const[t,a]of n)s[t]=a;return s}}}]);