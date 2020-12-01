(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{239:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"ant-design-vue-项目搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ant-design-vue-项目搭建"}},[s._v("#")]),s._v(" ant-design-vue 项目搭建")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("创建 vue 项目")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("vue create xxx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR 使用图形化界面进行创建")]),s._v("\nvue ui\n")])])])]),s._v(" "),a("li",[a("p",[s._v("安装 ant-design-vue")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i --save ant-design-vue\n")])])])]),s._v(" "),a("li",[a("p",[s._v("配置 main.js")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 完整引入")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" Vue from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" Antd from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ant-design-vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" App from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ant-design-vue/dist/antd.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    Vue.config.productionTip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    Vue.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Antd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    /* eslint-disable no-new */\n    new Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    el: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),s._v(",\n    components: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" App "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    template: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<App/>'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 局部导入组件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" Vue from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button, message "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ant-design-vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" App from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./App'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    Vue.config.productionTip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    /* v1.1.2 */\n    Vue.component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button.name, Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    Vue.component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button.Group.name, Button.Group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    /* v1.1.3+ 自动注册Button下组件，如Button.Group */\n    Vue.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    Vue.prototype."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    /* eslint-disable no-new */\n    new Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    el: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),s._v(",\n    components: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" App "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    template: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<App/>'")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改 ant 兼容 ie 浏览器")]),s._v(" "),a("ul",[a("li",[s._v("安装所需插件")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save @babel/polyfill\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev @babel/plugin-transform-runtime @babel/runtime\n")])])]),a("ul",[a("li",[s._v("修改 main.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("# 加入\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core-js/stable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regenerator-runtime/runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("修改 babel.config.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vue/app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                corejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    vesion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    proposals"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    useBuiltIns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"entry"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("增加 css 样式兼容前缀")]),s._v(" "),a("ul",[a("li",[s._v("修改.browserslistrc 文件")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("%\nlast "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" versions\nlast "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" Chrome versions\nlast "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" Firefox versions\nSafari "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\nie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n")])])]),a("ul",[a("li",[s._v("安装 postcss 依赖")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("cnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postcss-loader --save-dev\n")])])]),a("ul",[a("li",[s._v("安装 Autoprefixer(前缀补全)")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("cnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" Autoprefixer --save-dev\n")])])]),a("ul",[a("li",[s._v("postcss 配置，在项目根目录新建 postcss.config.js，配置如下")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"autoprefixer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("重新运行项目")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);