if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const c=e=>a(e,i),t={module:{uri:i},exports:d,require:c};s[i]=Promise.all(f.map((e=>t[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"FreeSql 官方文档"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.9a3f5cb9.js",revision:"2947d0368c23dba21bda32f0bff09b56"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.6c8d4bd0.js",revision:"fd015be3305d2d0b185eb8ed3a0f5ccb"},{url:"assets/ado.html.c3883709.js",revision:"e74f25ef37405addd37836f95cb022b3"},{url:"assets/ado.html.dfd486f5.js",revision:"03a5a39955a5cf54933ade18d81b9fc8"},{url:"assets/aop-freesql-autofac.html.2bdea405.js",revision:"ba8c365235fdf382171a3a09892d8066"},{url:"assets/aop-freesql-autofac.html.99048c7f.js",revision:"e2b79db36d37b410bca995c781c8e816"},{url:"assets/aop.html.2b63b2fa.js",revision:"6f64c874d24cd17f96f0985379dceb9d"},{url:"assets/aop.html.30621176.js",revision:"71585bc1a9fde58c474801cfbd9537b0"},{url:"assets/api.html.81c166eb.js",revision:"a417bf63011baf4d68ee54913b1cdef9"},{url:"assets/api.html.a539c38e.js",revision:"bf60da479a6da367f562fa61a51594c1"},{url:"assets/app.79fdd696.js",revision:"5d907d32bd625c2a782612b8ebd7d2bc"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/awesome-freesql.html.345d5cbc.js",revision:"817975948f2a60b1e901d5df8a9ad56f"},{url:"assets/awesome-freesql.html.c5e1148f.js",revision:"6437b54d7991868daf317de865cf7556"},{url:"assets/BaseEntity.html.f9b3b24d.js",revision:"b770fa1c0687bf77bf0f55314df811e0"},{url:"assets/BaseEntity.html.faac0ba0.js",revision:"abca900b1ec8093d43ff164b24fd16b0"},{url:"assets/cascade-delete.html.d1b6652c.js",revision:"84addc047457472dd50dfbab0a7bd2e3"},{url:"assets/cascade-delete.html.d2f1be55.js",revision:"5f448dfafbe642dcc56d46b1a0a0c406"},{url:"assets/Cascade-Saving.html.2a9b9651.js",revision:"83822c07daea042b0113bbfc633b0662"},{url:"assets/cascade-saving.html.5f81647b.js",revision:"318a7eb3ac388c2b38acac3334cc24b6"},{url:"assets/Cascade-Saving.html.852b803b.js",revision:"7f924b8cd13b877cb948c43d899182c6"},{url:"assets/cascade-saving.html.998bbd47.js",revision:"bfdff17324da42707b74ac988b7c0280"},{url:"assets/change-log.html.2b965e5f.js",revision:"e55648ee29e9ffedf8c9255a841e5893"},{url:"assets/change-log.html.4d470cf2.js",revision:"bdb7d6f045f4031014bec780e931f893"},{url:"assets/code-first.html.1ead983a.js",revision:"85c42d4967a511c4bd6e89866ea59823"},{url:"assets/code-first.html.f0121bac.js",revision:"a4ae24e0534886af7f3d7b4fc1d7eede"},{url:"assets/CodeFirst-Mode.html.05be592a.js",revision:"439dcb8dbabce0ca19b93d1ae0411d8d"},{url:"assets/CodeFirst-Mode.html.071f7cd4.js",revision:"b70aecd7f5f399f46b63904039915cb9"},{url:"assets/config-entity-from-db-first.html.c6b692e6.js",revision:"4cfeeb63a90a89f0503a799489a1dd29"},{url:"assets/config-entity-from-db-first.html.ca505335.js",revision:"cd0bbc96a3ed76c9ba5955a210d5a48b"},{url:"assets/contributing.html.37e8f311.js",revision:"c4699167317057515d13136b1734e7ed"},{url:"assets/contributing.html.f25b0321.js",revision:"757feab49632f2ddaf0467704cc0788f"},{url:"assets/custom-attribute.html.07164aa9.js",revision:"fd0572aed6a130eeb4d7a9369648f956"},{url:"assets/custom-attribute.html.3a639f79.js",revision:"eff7576ba4cb065ef4169075f80102fd"},{url:"assets/db-context.html.5dd4a6ec.js",revision:"5d7337d7113b4a1c2c5d7735d621b4eb"},{url:"assets/db-context.html.f4641e38.js",revision:"8c2c2297010e06eceb4adcc2e745dc24"},{url:"assets/db-first.html.4dc9b011.js",revision:"fd3b268aa8c7cfec7a6ad5054f6e9f3e"},{url:"assets/db-first.html.c01fbbdd.js",revision:"2b82d9616d55735d6f8a0077c91a1fda"},{url:"assets/Delete-Data.html.1e1dbc5a.js",revision:"44e93c656cbff64c808144040181f308"},{url:"assets/Delete-Data.html.e319a1ba.js",revision:"f09510709f8e605f09e6ac19f35c01bc"},{url:"assets/delete.html.3536c329.js",revision:"72479afeb2f468f2b00026705f18d302"},{url:"assets/delete.html.8711edc5.js",revision:"3b482545aac7ea9a35cd49fe80d931dc"},{url:"assets/donation.html.627622cf.js",revision:"12b457df124a86d591cf9cbcc5b3fb9a"},{url:"assets/donation.html.d4eb222e.js",revision:"d8d955ba6be8a49b18ac5801fd25f175"},{url:"assets/entity-attribute.html.da99a811.js",revision:"f3893ee5b2e95bf2f27c6599a76732bf"},{url:"assets/entity-attribute.html.db98871d.js",revision:"eb6164895fbad3712c6691832c58f893"},{url:"assets/Entity-Relationship.html.477b4147.js",revision:"fe98412beac4be67af962cef1f13292d"},{url:"assets/Entity-Relationship.html.91ba21cc.js",revision:"fcda58b45b532200a763ddec6fcdc9a0"},{url:"assets/expression-function.html.48ef9dcd.js",revision:"3d5b2e65209af9eb44011f293d201e0e"},{url:"assets/expression-function.html.9d9f5709.js",revision:"a5d520bbb4a6cbf3b3ec2f30feee6e48"},{url:"assets/faq.html.bf5a4676.js",revision:"c3663b75b6cb253631099bd3f333ff98"},{url:"assets/faq.html.d303b95c.js",revision:"49f5a8273ff096bbec3c681448338003"},{url:"assets/filters.html.371dd3f4.js",revision:"741334624ee666c944aead9ff707bc22"},{url:"assets/filters.html.c723ee2d.js",revision:"064d93d77b1d299e198208fbe7501c0e"},{url:"assets/fluent-api.html.ce14ae98.js",revision:"8fc60ab572def55279d5b70eaddbf7f6"},{url:"assets/fluent-api.html.e2d20329.js",revision:"04eb88bfd1cdee444dae3de884775028"},{url:"assets/freesql-auditlog.html.08fb8d30.js",revision:"563e50be79cdec95a7a207950e8c282f"},{url:"assets/freesql-auditlog.html.ac9e1ed5.js",revision:"8790fca89a24cb486aaa70c8546eddfe"},{url:"assets/freesql-docker.html.092a020b.js",revision:"d253bf7cecc7e49ae3887e2e55dab724"},{url:"assets/freesql-docker.html.17b8a55b.js",revision:"604999f3a09ab506cee9eb83aac64aee"},{url:"assets/freesql-provider-custom.html.51d29750.js",revision:"0ec5be26077942af1181c57024c8194d"},{url:"assets/freesql-provider-custom.html.94780ff6.js",revision:"b2eb147b27f3d22f0e22bf1180b7d45d"},{url:"assets/freesql-provider-mysqlconnector.html.6224d489.js",revision:"0e973a326f46ede59d64ffeeb1b8b91b"},{url:"assets/freesql-provider-mysqlconnector.html.e824febc.js",revision:"e3fccde69349b4b78e3713843651dbdc"},{url:"assets/freesql-provider-odbc.html.21a270ee.js",revision:"7813b4fe9327c05f799c93f95a28b9de"},{url:"assets/freesql-provider-odbc.html.7a6bf907.js",revision:"27e3ff8324d00c17aea4a67bb4a50d7f"},{url:"assets/freesql-provider-oracle.html.32b7c5bb.js",revision:"1066dedde0b5369e04611ed81f5278e7"},{url:"assets/freesql-provider-oracle.html.da5c9932.js",revision:"682967a44d8b9fc48990d977a5a26f8e"},{url:"assets/freesql-provider-postgresql.html.0160e0eb.js",revision:"54ea97463d17a1a154503d8fcb95524b"},{url:"assets/freesql-provider-postgresql.html.da5eefab.js",revision:"4fdcf8f343db81c01062188a160e2896"},{url:"assets/freesql-provider-sqlitecore.html.a208eb0c.js",revision:"f341cb3c3892d81c2c6f1c85286ceb76"},{url:"assets/freesql-provider-sqlitecore.html.cacc4c00.js",revision:"6233a649502729fe0b5a1d1a2e42670f"},{url:"assets/getting-started.html.1e1806f5.js",revision:"639651aac23a8cf89db736f7989ac6c0"},{url:"assets/getting-started.html.3cd780fe.js",revision:"5306f426dff0407630f06f243e5438b9"},{url:"assets/getting-started.html.a8c3eae2.js",revision:"cc110e962d0fe8c18624d601e0dfd1e3"},{url:"assets/getting-started.html.e4c3eed3.js",revision:"d43e7e1c305f11eae5882b794ac2f785"},{url:"assets/Greed-Loading.html.234fb6c8.js",revision:"4ef9b29059573daed242d7fc7966089b"},{url:"assets/Greed-Loading.html.35c4a4fb.js",revision:"a7da41cd30306a07394786340a888506"},{url:"assets/Group-Aggregation-Query.html.4635db4f.js",revision:"e81e535db7715d3b6637257ee262d596"},{url:"assets/Group-Aggregation-Query.html.884b4d18.js",revision:"7c7664ad0c3d7fa48eb6d1c48fe38438"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/idlebus-freesql.html.57c48849.js",revision:"c566f50cd13137da26aadd6a75c1244d"},{url:"assets/idlebus-freesql.html.c2f9d413.js",revision:"5833273fb0daf4bce4c0f60da1aad088"},{url:"assets/ifreesql-context.html.77258679.js",revision:"cc476d9a3f09496139a69f58c4189f53"},{url:"assets/ifreesql-context.html.f178cacb.js",revision:"ee4f6fe013a4c413713696d14dc5fa3e"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.2f679524.js",revision:"e5d0d0cb7a0a32e522360cf14bad4f8a"},{url:"assets/index.html.5b213fe1.js",revision:"59e53d8dde4143f2379bdae9e3c943fe"},{url:"assets/index.html.8687b5a5.js",revision:"dcbcea912c270eec9a4c0bef39e0d175"},{url:"assets/index.html.946a8ede.js",revision:"c1ed64eda58ee529031adf01524ac913"},{url:"assets/index.html.97a670e2.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.c553bafd.js",revision:"680b80ce392cb2a1ca2840e1f49a357e"},{url:"assets/index.html.d7fb433f.js",revision:"f2d57cd2578e6eb6ed8202bd3e42b8bc"},{url:"assets/index.html.df3f2592.js",revision:"e963026a817901e41c05e6f566f25524"},{url:"assets/index.html.e0bac776.js",revision:"69bb5e33a74e824237568defde29dd1c"},{url:"assets/index.html.f4eda191.js",revision:"182e6286d657909be52dedc291f2e5cd"},{url:"assets/Insert-Data.html.64a74931.js",revision:"e3d95e7c028ee29cff7d9d904efa2646"},{url:"assets/Insert-Data.html.d69d4170.js",revision:"8ad3bdaa7532bfe87339ca00293d8387"},{url:"assets/insert-or-update.html.0bf62f2a.js",revision:"2768906de2b9bb76abe044aa0a7b0de3"},{url:"assets/insert-or-update.html.30408e5f.js",revision:"e62d716d12a2376e3c3857deb31b0a03"},{url:"assets/insert-or-update.html.43a9330a.js",revision:"c58800de0af1ab0b89bee26617116004"},{url:"assets/insert-or-update.html.fc8f4636.js",revision:"7247e6924e58505ab6965725a153fc7b"},{url:"assets/insert.html.4bac37fe.js",revision:"7b2709c99bd5a114e726fd71d96ebdea"},{url:"assets/insert.html.95a45fef.js",revision:"528124b70c91d9ae2d06eb97771d91ab"},{url:"assets/install.html.120fa202.js",revision:"fef8b27d88bc7e4e79b93684f32b687e"},{url:"assets/install.html.24add291.js",revision:"6612e998a3f4ee7b98c306c10964bbaf"},{url:"assets/install.html.4f163bac.js",revision:"e9b525c83ddf467c7245583b927f4364"},{url:"assets/install.html.7c25836f.js",revision:"753e030663917442a3c1690abd712394"},{url:"assets/iselect-depcopy.html.6e8ce03e.js",revision:"68a64f32396a1061ec6faf4e75ed3171"},{url:"assets/iselect-depcopy.html.7587cd28.js",revision:"52e54c9e472525f68ba53b242b771b5b"},{url:"assets/issues-expression-groupbysum.html.67f8fe96.js",revision:"765ffb93d65a70edf04c51a124d19ec1"},{url:"assets/issues-expression-groupbysum.html.c5920560.js",revision:"5caf0efd67188f81e32f1fb961888d60"},{url:"assets/issues-in-valuetype.html.2a4750b9.js",revision:"b2146953b719c806a9c372abe81f1a1d"},{url:"assets/issues-in-valuetype.html.d501414f.js",revision:"133ea88591b11f16f4f77088ecb43cb8"},{url:"assets/issues-mysql5_5.html.2ec246d8.js",revision:"81a27829c2167fdd6e88ae2c658c38d0"},{url:"assets/issues-mysql5_5.html.a0b320fd.js",revision:"3d30a9b38a8bd0e3169d9733d4d2f1b1"},{url:"assets/Layout.3facac8b.js",revision:"fa179739c4afbe051b6006d77ffed6c8"},{url:"assets/Lazy-Loading.html.7364096d.js",revision:"85652288ce927820ecb529466eb4c086"},{url:"assets/Lazy-Loading.html.f4a6eed5.js",revision:"6b07d25068d139bab8c9c407f3ffa99b"},{url:"assets/linq-to-sql.html.432b36bb.js",revision:"f3a47152fedcefa8bdf7a8244ae34cb6"},{url:"assets/linq-to-sql.html.6af64eb5.js",revision:"98c4e316fc03a9e37967616b66dd6622"},{url:"assets/Linq-to-Sql.html.aa0934f8.js",revision:"65bb82fde3c640e9b6555dc36960cd71"},{url:"assets/Linq-to-Sql.html.f3726359.js",revision:"7d9b3333f807e40af82767cc19cfb3de"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/more.html.577822f5.js",revision:"9aa7808d8e005cdc2401831d1b9c10f3"},{url:"assets/more.html.c0353c05.js",revision:"7e96e46089005134462688e01f5418d8"},{url:"assets/multi-tenancy.html.06de51a1.js",revision:"bd20ef7f05f2db83e30b73f25b1a158a"},{url:"assets/multi-tenancy.html.f9130e0e.js",revision:"b26a3df4f5344d969346bcde16d53b99"},{url:"assets/navigate-attribute.html.1e7cb2a0.js",revision:"11a21c9d54a8c6376d6139d33a783ca0"},{url:"assets/navigate-attribute.html.d4d9e0f7.js",revision:"8946740f8286ecf7c11f20cbd94ee125"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/Pagination.html.4f693340.js",revision:"1f879c83166dda66e70e6aa63c979174"},{url:"assets/Pagination.html.71c10464.js",revision:"7f63dac662909b92595bd4f37d36b18e"},{url:"assets/paging.html.450267c3.js",revision:"5de3996c4768b5c048c1bca60d54e2d8"},{url:"assets/paging.html.b71f7822.js",revision:"29518964b498a0df32e5d5c4d13d98ee"},{url:"assets/Parent-Child-Relationship-Query.html.1d159870.js",revision:"29bb1ad58b8b774562fbf94642587304"},{url:"assets/Parent-Child-Relationship-Query.html.b049c325.js",revision:"a91103712c6c806064700d01f913e0ac"},{url:"assets/performance.html.4b19ea0b.js",revision:"482306a2f2b7adcb2968ad837db514ed"},{url:"assets/performance.html.b238237d.js",revision:"c8b2cddc7360db584cf89bbd940ddcf1"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Query-Data.html.bb334ca7.js",revision:"55eb5062d350d644259b39a2ef6483ee"},{url:"assets/Query-Data.html.dc7ef27f.js",revision:"39637ddbced1656ec4ec7845e6da87aa"},{url:"assets/Query-from-Multi-Table.html.a0796e0e.js",revision:"b2a657441438c015b28286a5d4b535e5"},{url:"assets/Query-from-Multi-Table.html.f391adc4.js",revision:"65f95045f3b0b253f85b44141c75991c"},{url:"assets/Query-from-Single-Table.html.6c89b9b5.js",revision:"f80ff77a33c9bef76b40c1e1369849a0"},{url:"assets/Query-from-Single-Table.html.91eab416.js",revision:"c6c5ed9fa11ce816278ab7d143becf0f"},{url:"assets/read-write-splitting.html.415997c4.js",revision:"b82d05b67a6311c69f600ade177d92e6"},{url:"assets/read-write-splitting.html.d2c8f23d.js",revision:"b787109d851195c6ce5e4024919174dd"},{url:"assets/Repository-Layer.html.02b66540.js",revision:"9ff2195f5a4fad7ae008979422fa9dfc"},{url:"assets/Repository-Layer.html.32eda0d6.js",revision:"8b9d22e8f475adc0bf2d7c8c3d3c29ba"},{url:"assets/repository.html.5367a5fa.js",revision:"b417bf047fd19b1d70fe409d908296b2"},{url:"assets/repository.html.b61606cc.js",revision:"bc0f48acfff86ffab74bb767b679bf89"},{url:"assets/Return-Data.html.097098df.js",revision:"2b89490a7a5f987a20ef083e36d50bb3"},{url:"assets/Return-Data.html.f8ece406.js",revision:"6c7eb82c0398b6b3d42dbdbb0bc83f4a"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/select-as-tree.html.2a6e98cf.js",revision:"9dd6e91fd4e4f55467424cd4787062d2"},{url:"assets/select-as-tree.html.40120602.js",revision:"1d40d4883cd828856a08f8aaf836e525"},{url:"assets/select-group-by.html.8c012463.js",revision:"2b879e8a58b00cdf03e159122bc5713a"},{url:"assets/select-group-by.html.c5e9ccd0.js",revision:"167ff3ddaf59bdbe06530efc092b289d"},{url:"assets/select-include.html.abfdf286.js",revision:"e8211fe34675cb8c4c8c413853e9d162"},{url:"assets/select-include.html.c400e264.js",revision:"5116f1f36721b66de383caaaef2de06b"},{url:"assets/select-lazy-loading.html.6baa3fc9.js",revision:"f4ad1412cde7c91445b5d1ec5cfad3f7"},{url:"assets/select-lazy-loading.html.89a3d7a1.js",revision:"152e6bdb077c8d09c73494bc9f7e7bd7"},{url:"assets/select-multi-table.html.311ce2a1.js",revision:"e95baf5ff5095259b55d84b0f5fa7007"},{url:"assets/select-multi-table.html.ade8c510.js",revision:"595035937a1b4bb235f554835244a018"},{url:"assets/select-return-data.html.4454ba7f.js",revision:"fa1e2c17d49b33e90784f73b2f56a6b2"},{url:"assets/select-return-data.html.a33b3e64.js",revision:"cd086ee2301b4e4a93ed2899284eab96"},{url:"assets/select-single-table.html.866fbfd5.js",revision:"6f99d8eb15436cd3d17ffe915bd5e0e5"},{url:"assets/select-single-table.html.87b4b133.js",revision:"ec649b6a7d747fd7175828c3c77c5d68"},{url:"assets/select.html.406e7529.js",revision:"41533060ba6fba3e20a219da9ebf19e8"},{url:"assets/select.html.94caf5ec.js",revision:"734f114ec216530dadad934691f3b834"},{url:"assets/service-support.html.74f8046f.js",revision:"f9844aa573043ef639d9bff25f398d57"},{url:"assets/service-support.html.b418179e.js",revision:"167abf31a37f571b5c42a3eda5d9eb93"},{url:"assets/sharding.html.0183fd1d.js",revision:"d41693a60ceb66cba2c99b3df276c495"},{url:"assets/sharding.html.25337bc0.js",revision:"a28735c058e6051a224d68981288381f"},{url:"assets/SkipLink.dc71eb22.js",revision:"8e18dcd002f19f83913eef59469c8f85"},{url:"assets/Slide.bcf01fc3.js",revision:"eb1de23eb70cb83ba81a20e281a69435"},{url:"assets/style.a88a7700.css",revision:"86e2a22e907134fa8fc35fe2aef4bb84"},{url:"assets/transaction.html.1519c573.js",revision:"723b1e95fd765c0bb392d7d6cb105a38"},{url:"assets/transaction.html.4a5609c0.js",revision:"39089114fefe3aca24b1bb8380a17128"},{url:"assets/type-mapping.html.6fecf62e.js",revision:"dfc3fe9e10226bca6edfed42718936ec"},{url:"assets/type-mapping.html.9bf7caae.js",revision:"6c58f32d85d1b1e5f07410c262597d3d"},{url:"assets/Unit-of-Work-Manager.html.07d9a66c.js",revision:"5266565c468982b178e82009a5b4695f"},{url:"assets/Unit-of-Work-Manager.html.a137f71b.js",revision:"03ac50562b650a423a160aaf086b0b0c"},{url:"assets/Unit-of-Work.html.ccf79cc7.js",revision:"820a444ece9fa69954e07574dab314b2"},{url:"assets/Unit-of-Work.html.ce901791.js",revision:"149429e90692b5aa7b67d21734d05f4b"},{url:"assets/unit-of-work.html.d8328788.js",revision:"ebab054b2ff8fee8c864cbc76b169559"},{url:"assets/unit-of-work.html.da0e27d4.js",revision:"f556669249610aa6488eac065f419d5a"},{url:"assets/unitofwork-manager.html.65ca83d8.js",revision:"0c7afdc7be83dea4d22d2dfe26e7c9e0"},{url:"assets/unitofwork-manager.html.e01e8db4.js",revision:"bbc5db55a8f36b6cca1e83c46d050558"},{url:"assets/Update-Data.html.260729ab.js",revision:"fe7404c3beaa544e2125c0d75fc293f0"},{url:"assets/Update-Data.html.4e802df8.js",revision:"6251c4b78e0bcfc1aba9f8b8183c1c0c"},{url:"assets/update.html.5d8b1dcc.js",revision:"be5bcf795952b5b5c2e6e4e2c68daf09"},{url:"assets/update.html.a7ed754e.js",revision:"e399232a42c6e3fa0ee98cfdabeac934"},{url:"assets/vs-dapper.html.31112152.js",revision:"ac634926bf5d2bc3cfd4c6d6b33d4e52"},{url:"assets/vs-dapper.html.743aa1ef.js",revision:"52ebf0ed4764a5a42bbeba0614d33cf1"},{url:"assets/vs-entity-framework.html.9bb92324.js",revision:"0af9395f8e804ff4e0057fc04738cdaf"},{url:"assets/vs-entity-framework.html.e01eb0b7.js",revision:"e6c201afd262c5d6c1d8444864b5c32e"},{url:"assets/With-Sql.html.9a01c52d.js",revision:"2df1b8b62e2e918e678ad8ec4029869a"},{url:"assets/With-Sql.html.dae22084.js",revision:"83e20b86c414b16916fc276ae2749583"},{url:"assets/withsql.html.486ca0d2.js",revision:"bc11a1a48013d62fb9fd2cddef5a351f"},{url:"assets/withsql.html.f941f81d.js",revision:"9c9cb116f5d53a027a584987686da327"},{url:"assets/withtempquery.html.a539275c.js",revision:"e7d99850205ea4bb93faf7674a45d5eb"},{url:"assets/withtempquery.html.cd71ba2e.js",revision:"c6285be6d16fc3dbc0cf562e9f8c0e0b"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"c62048f188d473311ec9ce10276abaa9"},{url:"404.html",revision:"e0753f6616924ea684a73b5c4d23cf3d"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
