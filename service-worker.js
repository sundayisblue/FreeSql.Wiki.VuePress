if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const t=e=>a(e,i),c={module:{uri:i},exports:d,require:t};s[i]=Promise.all(f.map((e=>c[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"FreeSql 官方文档"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.7f8c651d.js",revision:"24e9fb23bad8511610074799328dd560"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.6c8d4bd0.js",revision:"fd015be3305d2d0b185eb8ed3a0f5ccb"},{url:"assets/ado.html.8757df2a.js",revision:"140c2d1d0f3fa8d088ae6eced4cc9f45"},{url:"assets/ado.html.dfd486f5.js",revision:"03a5a39955a5cf54933ade18d81b9fc8"},{url:"assets/aop-freesql-autofac.html.2bdea405.js",revision:"ba8c365235fdf382171a3a09892d8066"},{url:"assets/aop-freesql-autofac.html.7153331f.js",revision:"aa16f3875cfa9bf00835b978e3ac20a4"},{url:"assets/aop.html.64843f93.js",revision:"6f0f12b4ed84ab1e9ac4c6174220162c"},{url:"assets/aop.html.f9b684af.js",revision:"f0e223cf6385a50112ad83e3f9a26d12"},{url:"assets/api.html.81c166eb.js",revision:"a417bf63011baf4d68ee54913b1cdef9"},{url:"assets/api.html.add0ba8a.js",revision:"a9d6496d67a315055454efa0607c18b2"},{url:"assets/app.3546e451.js",revision:"1f4e93e6c2426a3cb5f04a7028c9072e"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/awesome-freesql.html.2f098b34.js",revision:"72fde855825f01d9bb43907b2eb95131"},{url:"assets/awesome-freesql.html.c5e1148f.js",revision:"6437b54d7991868daf317de865cf7556"},{url:"assets/BaseEntity.html.faac0ba0.js",revision:"abca900b1ec8093d43ff164b24fd16b0"},{url:"assets/BaseEntity.html.fab4c089.js",revision:"3dce5ff1fd2339c1d531f729248812a5"},{url:"assets/cascade-delete.html.b40c3abe.js",revision:"f4cbdd7a795a162df1ff1c899d425f82"},{url:"assets/cascade-delete.html.d2f1be55.js",revision:"5f448dfafbe642dcc56d46b1a0a0c406"},{url:"assets/Cascade-Saving.html.052efcd2.js",revision:"ab0041af50c0c53c32944cb63555ed78"},{url:"assets/Cascade-Saving.html.2a9b9651.js",revision:"83822c07daea042b0113bbfc633b0662"},{url:"assets/cascade-saving.html.5f81647b.js",revision:"318a7eb3ac388c2b38acac3334cc24b6"},{url:"assets/cascade-saving.html.69d3bfa4.js",revision:"35d1f27c837f41dd58dc0d892b24e639"},{url:"assets/change-log.html.06f5782b.js",revision:"b97deb2806036fe7fc4d5ea89ccb961e"},{url:"assets/change-log.html.4d470cf2.js",revision:"bdb7d6f045f4031014bec780e931f893"},{url:"assets/code-first.html.2736f7f7.js",revision:"d38024170ab7298e6112d81d6e1c5194"},{url:"assets/code-first.html.fb909a0d.js",revision:"cc3974526204f65d41774262246314cc"},{url:"assets/CodeFirst-Mode.html.05be592a.js",revision:"439dcb8dbabce0ca19b93d1ae0411d8d"},{url:"assets/CodeFirst-Mode.html.071f7cd4.js",revision:"b70aecd7f5f399f46b63904039915cb9"},{url:"assets/config-entity-from-db-first.html.b2bd1964.js",revision:"1ccf218154f6a14bf4f6f86dc41098f6"},{url:"assets/config-entity-from-db-first.html.ca505335.js",revision:"cd0bbc96a3ed76c9ba5955a210d5a48b"},{url:"assets/contributing.html.37e8f311.js",revision:"c4699167317057515d13136b1734e7ed"},{url:"assets/contributing.html.f25b0321.js",revision:"757feab49632f2ddaf0467704cc0788f"},{url:"assets/custom-attribute.html.3a639f79.js",revision:"eff7576ba4cb065ef4169075f80102fd"},{url:"assets/custom-attribute.html.871dfe72.js",revision:"99a513cda76aa6a3f1b3ac4d95098d47"},{url:"assets/db-context.html.dbe8095c.js",revision:"e3e744aad425f303ace456044ee3564d"},{url:"assets/db-context.html.f4641e38.js",revision:"8c2c2297010e06eceb4adcc2e745dc24"},{url:"assets/db-first.html.4966ef0c.js",revision:"40f7b2a71035b6ff8bccc75baa35e8c3"},{url:"assets/db-first.html.4dc9b011.js",revision:"fd3b268aa8c7cfec7a6ad5054f6e9f3e"},{url:"assets/Delete-Data.html.e319a1ba.js",revision:"f09510709f8e605f09e6ac19f35c01bc"},{url:"assets/Delete-Data.html.f5c6600c.js",revision:"741ab976b57171e17b9d485ee4c4f32f"},{url:"assets/delete.html.3536c329.js",revision:"72479afeb2f468f2b00026705f18d302"},{url:"assets/delete.html.9ceffd8c.js",revision:"9c786addad217309e3f10695fe0b66a1"},{url:"assets/donation.html.14df3168.js",revision:"6404a45f33008c279aae0fb5bc27603d"},{url:"assets/donation.html.d4eb222e.js",revision:"d8d955ba6be8a49b18ac5801fd25f175"},{url:"assets/entity-attribute.html.2ba782bb.js",revision:"55ffb4e27d0d238711f703a8efc992e2"},{url:"assets/entity-attribute.html.db98871d.js",revision:"eb6164895fbad3712c6691832c58f893"},{url:"assets/Entity-Relationship.html.477b4147.js",revision:"fe98412beac4be67af962cef1f13292d"},{url:"assets/Entity-Relationship.html.7c33f09d.js",revision:"8db99a27bd8024ae070648d7e85844b1"},{url:"assets/expression-function.html.1fb9352a.js",revision:"e44b9d57520f21bdafab4df3881f45c1"},{url:"assets/expression-function.html.d38affdd.js",revision:"656016fa6d191f090aef6ada29de4605"},{url:"assets/faq.html.bf5a4676.js",revision:"c3663b75b6cb253631099bd3f333ff98"},{url:"assets/faq.html.ff860be1.js",revision:"3a5387bca1af47d6dbb2a9c0907bf335"},{url:"assets/filters.html.855fa404.js",revision:"4ba61ca2e5aac6a4009df6cde460dc68"},{url:"assets/filters.html.d32d47ea.js",revision:"2cbd24154525491a8f767aeacd32c8ab"},{url:"assets/fluent-api.html.5ae73907.js",revision:"a55ae2468f050a6bf704d8d7e09e5fc1"},{url:"assets/fluent-api.html.c3b23863.js",revision:"239d6a91b7c35775b7b5d5de716f2fff"},{url:"assets/freesql-auditlog.html.08fb8d30.js",revision:"563e50be79cdec95a7a207950e8c282f"},{url:"assets/freesql-auditlog.html.5d02cf49.js",revision:"7bcb0159671bf0f532435a721ff4da70"},{url:"assets/freesql-docker.html.092a020b.js",revision:"d253bf7cecc7e49ae3887e2e55dab724"},{url:"assets/freesql-docker.html.590173aa.js",revision:"f7d311eb0b3177c19520671909a9302f"},{url:"assets/freeSql-extensions-baseentity.html.2169bb37.js",revision:"dd95b9d5232268c63fd08aaccdf9d600"},{url:"assets/freeSql-extensions-baseentity.html.781e7ddc.js",revision:"03a9e7af0e10338904db3fea4702e563"},{url:"assets/freesql-extensions-jsonmap.html.b8726cea.js",revision:"be9bff9887d05367a04579c0a9861031"},{url:"assets/freesql-extensions-jsonmap.html.ebb31750.js",revision:"e1b289d614a144394bfa74a9e2397793"},{url:"assets/freesql-provider-custom.html.85a9c738.js",revision:"2e40c2d8d0d1f476ff7951a9dd9e7eb4"},{url:"assets/freesql-provider-custom.html.94780ff6.js",revision:"b2eb147b27f3d22f0e22bf1180b7d45d"},{url:"assets/freesql-provider-mysqlconnector.html.3b3598cd.js",revision:"0e4bd2c6711b568b80ff5cf5c7c927f4"},{url:"assets/freesql-provider-mysqlconnector.html.aebaf10c.js",revision:"0fd73d5a1892d50554cfbe0a5614a735"},{url:"assets/freesql-provider-odbc.html.778dc9f0.js",revision:"cdf2581a0e1ed983327bfe8e6ac9f674"},{url:"assets/freesql-provider-odbc.html.7a6bf907.js",revision:"27e3ff8324d00c17aea4a67bb4a50d7f"},{url:"assets/freesql-provider-oracle.html.c75e5802.js",revision:"3236ce2881c54757f22a04aef80105ce"},{url:"assets/freesql-provider-oracle.html.da5c9932.js",revision:"682967a44d8b9fc48990d977a5a26f8e"},{url:"assets/freesql-provider-postgresql.html.2e63d481.js",revision:"0492f7ae371a063c5ab66f0592e606c3"},{url:"assets/freesql-provider-postgresql.html.da5eefab.js",revision:"4fdcf8f343db81c01062188a160e2896"},{url:"assets/freesql-provider-sqlitecore.html.cacc4c00.js",revision:"6233a649502729fe0b5a1d1a2e42670f"},{url:"assets/freesql-provider-sqlitecore.html.de14864f.js",revision:"7e284ab808ce88ef1755db6950c8bbb0"},{url:"assets/getting-started.html.059f3306.js",revision:"f465fafcc3ac171ac8750348ff7bc190"},{url:"assets/getting-started.html.d0716556.js",revision:"0ffe8b3968ae49aa5f8ebd23a435afdd"},{url:"assets/getting-started.html.ec76e66e.js",revision:"5ad8670887c4f9dcea16b20ca6357623"},{url:"assets/getting-started.html.fd651101.js",revision:"47ce4e21e4caf15f4571f2ed978ec33f"},{url:"assets/Greed-Loading.html.35c4a4fb.js",revision:"a7da41cd30306a07394786340a888506"},{url:"assets/Greed-Loading.html.9903f9d9.js",revision:"430afdba1fbccfd0fd682869f6ffbf0b"},{url:"assets/Group-Aggregation-Query.html.4635db4f.js",revision:"e81e535db7715d3b6637257ee262d596"},{url:"assets/Group-Aggregation-Query.html.a39417a0.js",revision:"87120dd15e7c8b6bedfedbeab9b2b651"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/idlebus-freesql.html.19f32c99.js",revision:"8418b4f003cf17b563defd1870ed67a2"},{url:"assets/idlebus-freesql.html.2480990a.js",revision:"664c20e31d2793b8e562b762956c352b"},{url:"assets/ifreesql-context.html.5eb99865.js",revision:"fa596525df430343e549577c42c09a35"},{url:"assets/ifreesql-context.html.f178cacb.js",revision:"ee4f6fe013a4c413713696d14dc5fa3e"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.2f679524.js",revision:"e5d0d0cb7a0a32e522360cf14bad4f8a"},{url:"assets/index.html.81f5cc84.js",revision:"3b9fc13d91921f545d929dae09dcd7b6"},{url:"assets/index.html.8687b5a5.js",revision:"dcbcea912c270eec9a4c0bef39e0d175"},{url:"assets/index.html.9223b116.js",revision:"7da9ca46b656bd315c804522296aa52a"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.a4804e26.js",revision:"9cc8945918c69472755107ad5c83ce6a"},{url:"assets/index.html.b1304375.js",revision:"aec174a8516d85fb5f8a73038316625c"},{url:"assets/index.html.c553bafd.js",revision:"680b80ce392cb2a1ca2840e1f49a357e"},{url:"assets/index.html.e0bac776.js",revision:"69bb5e33a74e824237568defde29dd1c"},{url:"assets/index.html.e99e684e.js",revision:"41a3fa2cdc58eeafb90d44f2981e7701"},{url:"assets/Insert-Data.html.64a74931.js",revision:"e3d95e7c028ee29cff7d9d904efa2646"},{url:"assets/Insert-Data.html.d589fbd3.js",revision:"d2985527b0146e5e589d4b46a528c2d6"},{url:"assets/insert-or-update.html.0bf62f2a.js",revision:"2768906de2b9bb76abe044aa0a7b0de3"},{url:"assets/insert-or-update.html.43a9330a.js",revision:"c58800de0af1ab0b89bee26617116004"},{url:"assets/insert-or-update.html.a5853a4c.js",revision:"9db695ae1e07cfa380a5d121e4fdf22b"},{url:"assets/insert-or-update.html.f677d022.js",revision:"e83af9eb601f46ad3a29dea2a6096229"},{url:"assets/insert.html.78d5b9af.js",revision:"60a635cce7141a6513ace25ee8f0a4a3"},{url:"assets/insert.html.95a45fef.js",revision:"528124b70c91d9ae2d06eb97771d91ab"},{url:"assets/install.html.39b5247d.js",revision:"1219f9e1638dfddcbf4da3bc66ee8b80"},{url:"assets/install.html.47558706.js",revision:"b10943497c9ef810f684929d154a61c7"},{url:"assets/install.html.4f163bac.js",revision:"e9b525c83ddf467c7245583b927f4364"},{url:"assets/install.html.e2e250ef.js",revision:"7fe27d7a84fbb6eeeeb49882b531340a"},{url:"assets/iselect-depcopy.html.6e8ce03e.js",revision:"68a64f32396a1061ec6faf4e75ed3171"},{url:"assets/iselect-depcopy.html.89008458.js",revision:"062301342ac26d894af08144256c10ce"},{url:"assets/issues-expression-groupbysum.html.0940e08b.js",revision:"c4637a5280ff6e3087bcf1db5b70654b"},{url:"assets/issues-expression-groupbysum.html.698143a7.js",revision:"769c9a4cb0a1caafdeee49877906ed12"},{url:"assets/issues-in-valuetype.html.2a4750b9.js",revision:"b2146953b719c806a9c372abe81f1a1d"},{url:"assets/issues-in-valuetype.html.7ecd81df.js",revision:"544d6ac53723fb12d658d51f561741af"},{url:"assets/issues-mysql5_5.html.68b1fbcf.js",revision:"a802d8a1a6ef4b3726abb7787c724b65"},{url:"assets/issues-mysql5_5.html.a0b320fd.js",revision:"3d30a9b38a8bd0e3169d9733d4d2f1b1"},{url:"assets/Layout.f71034b5.js",revision:"2be7a56d653c64497d79863176ce9efa"},{url:"assets/Lazy-Loading.html.0d1322c6.js",revision:"51ff0ba15f8f6351cc0244dc487597cc"},{url:"assets/Lazy-Loading.html.f4a6eed5.js",revision:"6b07d25068d139bab8c9c407f3ffa99b"},{url:"assets/Linq-to-Sql.html.39f67345.js",revision:"ae9fd2631bbb0499b1b7b0e8f4480d79"},{url:"assets/linq-to-sql.html.6af64eb5.js",revision:"98c4e316fc03a9e37967616b66dd6622"},{url:"assets/linq-to-sql.html.723a1f0b.js",revision:"8cced7d397b56fcff778f62e8ecdcc3a"},{url:"assets/Linq-to-Sql.html.f3726359.js",revision:"7d9b3333f807e40af82767cc19cfb3de"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/more.html.85ca3202.js",revision:"f3a5bcdbdf561167abebaa15f0edfc31"},{url:"assets/more.html.f22bd1f2.js",revision:"cfa5757c334b9a6d43e5f8af31c4e973"},{url:"assets/multi-tenancy.html.06de51a1.js",revision:"bd20ef7f05f2db83e30b73f25b1a158a"},{url:"assets/multi-tenancy.html.bd56e986.js",revision:"85fde0f183550ba6800eae572df3fc8a"},{url:"assets/navigate-attribute.html.1e7cb2a0.js",revision:"11a21c9d54a8c6376d6139d33a783ca0"},{url:"assets/navigate-attribute.html.785b5077.js",revision:"9bd2dc06385dc7a40ce225dc4759d8ed"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/Pagination.html.71c10464.js",revision:"7f63dac662909b92595bd4f37d36b18e"},{url:"assets/Pagination.html.acd7ba18.js",revision:"6548e9be3095bcf8944df0ae14ff538d"},{url:"assets/paging.html.450267c3.js",revision:"5de3996c4768b5c048c1bca60d54e2d8"},{url:"assets/paging.html.bda43c78.js",revision:"2683b89bf463c7a8783c89f8b5a8d438"},{url:"assets/Parent-Child-Relationship-Query.html.1d159870.js",revision:"29bb1ad58b8b774562fbf94642587304"},{url:"assets/Parent-Child-Relationship-Query.html.336f0fd7.js",revision:"e59806a3bc35699b223a530a008b3fe0"},{url:"assets/performance.html.b238237d.js",revision:"c8b2cddc7360db584cf89bbd940ddcf1"},{url:"assets/performance.html.f9adfd37.js",revision:"90b280a130e04f9007c52f23e631ac2a"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Query-Data.html.bb334ca7.js",revision:"55eb5062d350d644259b39a2ef6483ee"},{url:"assets/Query-Data.html.dd46a523.js",revision:"302657d7dcd14b951b4b092035ae248d"},{url:"assets/Query-from-Multi-Table.html.81b7d2e8.js",revision:"10104701e06cb4f85fd308944f9263d2"},{url:"assets/Query-from-Multi-Table.html.a0796e0e.js",revision:"b2a657441438c015b28286a5d4b535e5"},{url:"assets/Query-from-Single-Table.html.6c89b9b5.js",revision:"f80ff77a33c9bef76b40c1e1369849a0"},{url:"assets/Query-from-Single-Table.html.e44ec70c.js",revision:"343d5d0a5f016ce7127869bfbee8c0c8"},{url:"assets/read-write-splitting.html.0d6c45c6.js",revision:"14eaff9da952bf6d460c076a1a0ab406"},{url:"assets/read-write-splitting.html.415997c4.js",revision:"b82d05b67a6311c69f600ade177d92e6"},{url:"assets/Repository-Layer.html.02b66540.js",revision:"9ff2195f5a4fad7ae008979422fa9dfc"},{url:"assets/Repository-Layer.html.8cf022c7.js",revision:"00c75ed0d3cb430305bf68c44166ef7f"},{url:"assets/repository.html.94c87680.js",revision:"3ec1710f1c96cd7995565f44afebbd5e"},{url:"assets/repository.html.c9cfaaaf.js",revision:"49850ce90cdef86f3c73ccd511ba0d04"},{url:"assets/Return-Data.html.74beeb25.js",revision:"45cdf207921f2ac4ce50236f0f47ccc3"},{url:"assets/Return-Data.html.f8ece406.js",revision:"6c7eb82c0398b6b3d42dbdbb0bc83f4a"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/select-as-tree.html.2a6e98cf.js",revision:"9dd6e91fd4e4f55467424cd4787062d2"},{url:"assets/select-as-tree.html.45b5ba0c.js",revision:"baf89943bdefba4136a22b8e38e920ca"},{url:"assets/select-group-by.html.768a92f0.js",revision:"0f99431726d3d42d845de4bbf2e1c4c6"},{url:"assets/select-group-by.html.c5e9ccd0.js",revision:"167ff3ddaf59bdbe06530efc092b289d"},{url:"assets/select-include.html.06b737a2.js",revision:"0ab141c14575cf5696b59bf265db5f95"},{url:"assets/select-include.html.c9a42d45.js",revision:"a95fdc1faf793e362dc7a45ec4989bcb"},{url:"assets/select-lazy-loading.html.17b97a8f.js",revision:"49d3c4840d8c8d4eebefcf0b126a1ab5"},{url:"assets/select-lazy-loading.html.6baa3fc9.js",revision:"f4ad1412cde7c91445b5d1ec5cfad3f7"},{url:"assets/select-multi-table.html.ade8c510.js",revision:"595035937a1b4bb235f554835244a018"},{url:"assets/select-multi-table.html.d20da1a7.js",revision:"6b249e9e049353f0ccceaeb53c3acbb9"},{url:"assets/select-return-data.html.a33b3e64.js",revision:"cd086ee2301b4e4a93ed2899284eab96"},{url:"assets/select-return-data.html.cb2ef085.js",revision:"2632aae902cd31e31d6bcda6efd511f2"},{url:"assets/select-single-table.html.5c155fdc.js",revision:"d5f6cad3957b3ee0652e1ba7c1140193"},{url:"assets/select-single-table.html.7978e15f.js",revision:"ae884d247f72bf3e3034a298af7addc6"},{url:"assets/select.html.0759353a.js",revision:"265751e98bf8ff8461c48907d84f436a"},{url:"assets/select.html.d7e2b911.js",revision:"2ae35083fe4385df8e6fc00b5fadfe2e"},{url:"assets/service-support.html.74f8046f.js",revision:"f9844aa573043ef639d9bff25f398d57"},{url:"assets/service-support.html.bb31b1f3.js",revision:"5a32da572a0cb0e30bb741ae588fd048"},{url:"assets/sharding.html.25c48951.js",revision:"28bee3124196bd1217e4d00560ff0560"},{url:"assets/sharding.html.909b900c.js",revision:"a9b8595ff004291441e8a0b01873b421"},{url:"assets/SkipLink.cdc7cb0f.js",revision:"e6183b7119d958973d28d834a2574cef"},{url:"assets/Slide.8f47f9cc.js",revision:"cc23d06d2fdc0e749dc5e9535c092b69"},{url:"assets/style.a88a7700.css",revision:"86e2a22e907134fa8fc35fe2aef4bb84"},{url:"assets/transaction.html.1519c573.js",revision:"723b1e95fd765c0bb392d7d6cb105a38"},{url:"assets/transaction.html.76860ac8.js",revision:"31d0503015e261e3d2cb3f7f6adfa330"},{url:"assets/type-mapping.html.6abe522e.js",revision:"1e9b090e4649ae06fca77908f35eb905"},{url:"assets/type-mapping.html.6fecf62e.js",revision:"dfc3fe9e10226bca6edfed42718936ec"},{url:"assets/Unit-of-Work-Manager.html.07d9a66c.js",revision:"5266565c468982b178e82009a5b4695f"},{url:"assets/Unit-of-Work-Manager.html.9c24dad7.js",revision:"e7ebf1363c3e8f4547bc1abda7fb19ca"},{url:"assets/Unit-of-Work.html.284f0f4d.js",revision:"4e748cdab3d70964691f0245382f8d67"},{url:"assets/unit-of-work.html.a7759d2b.js",revision:"6148758b48902d743849a50235066517"},{url:"assets/Unit-of-Work.html.ccf79cc7.js",revision:"820a444ece9fa69954e07574dab314b2"},{url:"assets/unit-of-work.html.d8328788.js",revision:"ebab054b2ff8fee8c864cbc76b169559"},{url:"assets/unitofwork-manager.html.33ccc05a.js",revision:"75338294f39fd7e9c13e10710e438dee"},{url:"assets/unitofwork-manager.html.65ca83d8.js",revision:"0c7afdc7be83dea4d22d2dfe26e7c9e0"},{url:"assets/Update-Data.html.260729ab.js",revision:"fe7404c3beaa544e2125c0d75fc293f0"},{url:"assets/Update-Data.html.7e3e157d.js",revision:"0ae157077c56bd1d180e22215a87be36"},{url:"assets/update.html.0066f8d4.js",revision:"39a8bd1f5b47f4ef87de8b53ba64f1fc"},{url:"assets/update.html.a7ed754e.js",revision:"e399232a42c6e3fa0ee98cfdabeac934"},{url:"assets/vs-dapper.html.743aa1ef.js",revision:"52ebf0ed4764a5a42bbeba0614d33cf1"},{url:"assets/vs-dapper.html.a7cb17e8.js",revision:"e35a34d9c18da4fcaf6f11654fb31412"},{url:"assets/vs-entity-framework.html.04e144f2.js",revision:"85fa5baaa945155a20666d25a80f4f45"},{url:"assets/vs-entity-framework.html.9bb92324.js",revision:"0af9395f8e804ff4e0057fc04738cdaf"},{url:"assets/With-Sql.html.accdf552.js",revision:"35d452bf36c45710e513f6435c1d9d56"},{url:"assets/With-Sql.html.dae22084.js",revision:"83e20b86c414b16916fc276ae2749583"},{url:"assets/withsql.html.1ae99868.js",revision:"21611faf558642729dc71f9ffc5def35"},{url:"assets/withsql.html.486ca0d2.js",revision:"bc11a1a48013d62fb9fd2cddef5a351f"},{url:"assets/withtempquery.html.a539275c.js",revision:"e7d99850205ea4bb93faf7674a45d5eb"},{url:"assets/withtempquery.html.e8570f8c.js",revision:"bf85eae44af45f2885e5515af17f9ba6"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"e9c7bc1edab234a13b44309a5227a28f"},{url:"404.html",revision:"e24c93b08878817ccb764c6f62dcea9a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
