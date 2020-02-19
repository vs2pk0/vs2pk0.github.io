(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{172:function(t,r,i){"use strict";i.r(r);var e=i(0),d=Object(e.a)({},(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"系统要求"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),i("ul",[i("li",[t._v("操作系统: Windows 7 或更高版本 (64-bit)")]),t._v(" "),i("li",[t._v("磁盘空间: 400 MB (不包括 Android Studio 的磁盘空间).")]),t._v(" "),i("li",[t._v("工具:\n"),i("ul",[i("li",[t._v("Flutter 依赖 Git for Windows ("),i("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 命令行工具"),i("OutboundLink")],1),t._v(")")]),t._v(" "),i("li",[t._v("Flutter 需要安装和配置 "),i("a",{attrs:{href:"http://www.android-studio.org/index.php/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Studio"),i("OutboundLink")],1)])])])]),t._v(" "),i("h2",{attrs:{id:"android-设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android-设置"}},[t._v("#")]),t._v(" Android 设置")]),t._v(" "),i("p",[i("strong",[t._v("安装 Android Studio")])]),t._v(" "),i("ul",[i("li",[i("p",[t._v("要为 Android 开发 Flutter 应用，您可以使用 Mac，Windows 或 Linux（64 位）机器.")])]),t._v(" "),i("li",[i("p",[t._v("Flutter 需要安装和配置 Android Studio:")])])]),t._v(" "),i("p",[i("strong",[t._v("下载并安装 Android Studio")])]),t._v(" "),i("ul",[i("li",[t._v("启动 Android Studio，然后执行“Android Studio 安装向导”。这将安装最新的 Android SDK，Android SDK 平台工具和 Android SDK 构建工具，这是 Flutter 为 Android 开发时所必需的")])]),t._v(" "),i("p",[i("strong",[t._v("设置您的 Android 设备")]),t._v("\n要准备在 Android 设备上运行并测试您的 Flutter 应用，您需要安装 Android 4.1（API level 16）或更高版本的 Android 设备.")]),t._v(" "),i("ul",[i("li",[t._v("在您的设备上启用 开发人员选项 和 USB 调试 。详细说明可在 Android 文档中找到。")]),t._v(" "),i("li",[t._v("使用 USB 将手机插入电脑。如果您的设备出现提示，请授权您的计算机访问您的设备。")]),t._v(" "),i("li",[t._v("在终端中，运行 flutter devices 命令以验证 Flutter 识别您连接的 Android 设备。")]),t._v(" "),i("li",[t._v("运行启动您的应用程序 flutter run。")]),t._v(" "),i("li",[t._v("默认情况下，Flutter 使用的 Android SDK 版本是基于你的 adb 工具版本。 如果您想让 Flutter 使用不同版本的 Android SDK，则必须将该 ANDROID_HOME 环境变量设置为 SDK 安装目录。")])]),t._v(" "),i("p",[i("strong",[t._v("设置 Android 模拟器")]),t._v("\n要准备在 Android 模拟器上运行并测试您的 Flutter 应用，请按照以下步骤操作：")]),t._v(" "),i("ul",[i("li",[t._v("在您的机器上启用 VM acceleration")]),t._v(" "),i("li",[t._v("启动 Android Studio>Tools>Android>AVD Manager 并选择 Create Virtual Device.")]),t._v(" "),i("li",[t._v("选择一个设备并选择 Next。")]),t._v(" "),i("li",[t._v("为要模拟的 Android 版本选择一个或多个系统映像，然后选择 Next. 建议使用 x86 或 x86_64 image .")]),t._v(" "),i("li",[t._v("在 Emulated Performance 下, 选择 Hardware - GLES 2.0 以启用 硬件加速.")]),t._v(" "),i("li",[t._v("验证 AVD 配置是否正确，然后选择 Finish。")])]),t._v(" "),i("h2",{attrs:{id:"获取-flutter-sdk"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#获取-flutter-sdk"}},[t._v("#")]),t._v(" 获取 Flutter SDK")]),t._v(" "),i("ul",[i("li",[t._v("去 flutter 官网下载其最新可用的安装包，"),i("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/releases#windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载"),i("OutboundLink")],1)]),t._v(" "),i("li",[t._v("将安装包 zip 解压到你想安装 Flutter SDK 的路径（如：C:\\src\\flutter；注意，不要将 flutter 安装到需要一些高权限的路径如 C:\\Program Files\\）")])]),t._v(" "),i("h2",{attrs:{id:"更新环境变量"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#更新环境变量"}},[t._v("#")]),t._v(" 更新环境变量")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("转到 “控制面板>用户帐户>用户帐户>更改我的环境变量”")])]),t._v(" "),i("li",[i("p",[t._v("在“用户变量”下检查是否有名为“Path”的条目:")]),t._v(" "),i("ul",[i("li",[t._v("如果该条目存在, 追加 flutter\\bin 的全路径，使用 ; 作为分隔符.")]),t._v(" "),i("li",[t._v("如果条目不存在, 创建一个新用户变量 Path ，然后将 flutter\\bin 的全路径作为它的值.")])])]),t._v(" "),i("li",[i("p",[t._v("由于在国内访问 Flutter 有时可能会受到限制，Flutter 官方为中国开发者搭建了临时镜像，大家可以将如下环境变量加入到用户环境变量中：")]),t._v(" "),i("ul",[i("li",[t._v("PUB_HOSTED_URL=https://pub.flutter-io.cn")]),t._v(" "),i("li",[t._v("FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn")])])]),t._v(" "),i("li",[i("p",[t._v("如果运行 flutter doctor 时将出现 Unable to find git in your PATH 错误，此时需要手动添加 C:\\Program Files\\Git\\bin 至 Path 系统环境变量中")])])])])}),[],!1,null,null,null);r.default=d.exports}}]);