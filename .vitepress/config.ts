import { type DefaultTheme, defineConfig } from "vitepress";

export default defineConfig({
	lang: "zh-Hans",
	// base: "/apple-developer-documentation-zh/",
	title: "Apple 开发者文档",
	description: "浏览最新的示例代码、文章、教程和 API 参考。",
	srcExclude: ["**/README.md", "**/TODO.md"],
	lastUpdated: true,
	cleanUrls: true,
	themeConfig: {
		nav: nav(),

		search: { options: searchOptions() },

		sidebar: {
			"/documentation/coremotion": {
				base: "/documentation/coremotion",
				items: sidebarCoreMotion(),
			},
			"/documentation/swift/": {
				base: "/documentation/swift/",
				items: sidebarSwift(),
			},
			"/documentation/swiftui": {
				base: "/documentation/swiftui/",
				items: sidebarSwiftUI(),
			},
			"/documentation/swiftdata": {
				base: "/documentation/swiftdata",
				items: sidebarSwiftData(),
			},
			"/documentation/foundation": {
				base: "/documentation/foundation",
				items: sidebarFoundation(),
			},
			"/documentation/usernotifications": {
				base: "/documentation/usernotifications",
				items: sidebaruserNotifications(),
			},
			"/documentation/xcode": {
				base: "/documentation/xcode",
				items: sidebarXcode(),
			},
		},

		editLink: {
			pattern:
				"https://github.com/wangqiyangx/apple-developer-documentation-zh/edit/main/:path",
			text: "在 GitHub 上编辑此页面",
		},

		footer: {
			message: "基于 MIT 许可发布",
			copyright: `版权所有 © 2025-${new Date().getFullYear()} @wangqiyangx`,
		},

		docFooter: {
			prev: "上一页",
			next: "下一页",
		},

		outline: {
			level: "deep",
			label: "页面导航",
		},

		lastUpdated: {
			text: "最后更新于",
			formatOptions: {
				forceLocale: true,
				dateStyle: "full",
				timeStyle: "medium",
			},
		},

		notFound: {
			title: "页面未找到",
			quote:
				"但如果您不改变方向，并且继续寻找，您可能最终会到达您所前往的地方。",
			linkLabel: "前往首页",
			linkText: "带我回首页",
		},

		langMenuLabel: "多语言",
		returnToTopLabel: "回到顶部",
		sidebarMenuLabel: "菜单",
		darkModeSwitchLabel: "主题",
		lightModeSwitchTitle: "切换到浅色模式",
		darkModeSwitchTitle: "切换到深色模式",
		skipToContentLabel: "跳转到内容",
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/wangqiyangx/apple-developer-documentation-zh",
				ariaLabel: "GitHub",
			},
			{ icon: "x", link: "https://x.com/wangqiyangx", ariaLabel: "X" },
		],
	},
});

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "框架",
			activeMatch: "/documentation",
			items: [
				{
					text: "Core Motion",
					link: "/documentation/coremotion/",
				},
				{
					text: "Foundation",
					link: "/documentation/foundation/",
				},
				{
					text: "Network Extension",
					link: "/documentation/networkextension/",
				},
				{
					text: "Swift",
					link: "/documentation/swift/preface/about-swift",
				},
				{
					text: "Swift Data",
					link: "/documentation/swiftdata/",
				},
				{
					text: "SwiftUI",
					link: "/documentation/swiftui/",
				},
				{
					text: "User Notifications",
					link: "/documentation/usernotifications/",
				},
				{
					text: "WebKit",
					link: "/documentation/webkit/",
				},
				{
					text: "WidgetKit",
					link: "/documentation/widgetkit/",
				},
				{
					text: "Xcode",
					link: "/documentation/xcode/",
				},
			],
		},
	];
}

function sidebarCoreMotion(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Activity",
			collapsed: false,
			base: "/documentation/coremotion/activity/",
			items: [
				{
					text: "CMHeadphoneActivityManager",
					collapsed: true,
					base: "/documentation/coremotion/activity/cmheadphoneactivitymanager/",
					link: "/",
					items: [
						{
							text: "isActivityActive",
							link: "isactivityactive",
						},
					],
				},
			],
		},
	];
}

function sidebarSwift(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "开始",
			collapsed: false,
			base: "/documentation/swift/preface/",
			items: [
				{
					text: "关于 Swift",
					link: "about-swift",
				},
				{
					text: "版本兼容性",
					link: "version-compatibility",
				},
				{
					text: "Swift 入门之旅",
					link: "a-swift-tour",
				},
			],
		},
		{
			text: "指南",
			collapsed: true,
			base: "/documentation/swift/guide/",
			items: [
				{
					text: "基础语法",
					link: "the-basics",
				},
				{
					text: "基本运算符",
					link: "basic-operators",
				},
				{
					text: "字符串和字符",
					link: "strings-and-characters",
				},
				{
					text: "集合类型",
					link: "collection-types",
				},
				{
					text: "控制流",
					link: "control-flow",
				},
				{
					text: "函数",
					link: "functions",
				},
				{
					text: "闭包",
					link: "closures",
				},
				{
					text: "枚举",
					link: "enumerations",
				},
				{
					text: "结构体和类",
					link: "structures-and-classes",
				},
				{
					text: "属性",
					link: "properties",
				},
				{
					text: "方法",
					link: "methods",
				},
				{
					text: "下标",
					link: "subscripts",
				},
				{
					text: "继承",
					link: "inheritance",
				},
				{
					text: "初始化",
					link: "initialization",
				},
				{
					text: "反初始化",
					link: "deinitialization",
				},
				{
					text: "可选链",
					link: "optional-chaining",
				},
				{
					text: "错误处理",
					link: "error-handling",
				},
				{
					text: "并发",
					link: "concurrency",
				},
				{
					text: "宏",
					link: "macros",
				},
				{
					text: "类型转换",
					link: "type-casting",
				},
				{
					text: "嵌套类型",
					link: "nested-types",
				},
				{
					text: "扩展",
					link: "extensions",
				},
				{
					text: "协议",
					link: "protocols",
				},
				{
					text: "泛型",
					link: "generics",
				},
				{
					text: "不透明和装箱协议类型",
					link: "opaque-and-boxed-protocol-types",
				},
				{
					text: "自动引用计数",
					link: "automatic-reference-counting",
				},
				{
					text: "内存安全",
					link: "memory-safety",
				},
				{
					text: "访问控制",
					link: "access-control",
				},
				{
					text: "高级运算符",
					link: "advanced-operators",
				},
			],
		},
		{
			text: "参考",
			collapsed: true,
			base: "/documentation/swift/reference/",
			items: [
				{
					text: "关于语言参考",
					link: "about-the-language-reference",
				},
				{
					text: "词法结构",
					link: "lexical-structure",
				},
				{
					text: "类型",
					link: "types",
				},
				{
					text: "表达式",
					link: "expressions",
				},
				{
					text: "语句",
					link: "statements",
				},
				{
					text: "声明",
					link: "declarations",
				},
			],
		},
	];
}

function sidebarSwiftUI(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "视图",
			base: "/documentation/swiftui/views/",
			items: [
				{
					text: "控件和指示器",
					collapsed: true,
					base: "/documentation/swiftui/views/controls-and-indicators/",
					link: "/",
					items: [
						{
							text: "提供触觉反馈",
							collapsed: true,
							items: [
								{
									text: "sensoryFeedback(_:trigger:)",
									link: "sensoryfeedback(_:trigger:)",
								},
								{
									text: "sensoryFeedback(trigger:_:)",
									link: "sensoryfeedback(trigger:_:)",
								},
								{
									text: "SensoryFeedback",
									link: "sensoryfeedback",
								},
							],
						},
					],
				},
			],
		},
		{
			text: "视图布局",
			base: "/documentation/swiftui/view-layout/",
			items: [
				{
					text: "视图分组",
					collapsed: true,
					base: "/documentation/swiftui/view-layout/view-groupings/",
					link: "/",
					items: [],
				},
				{
					text: "滚动视图",
					collapsed: true,
					base: "/documentation/swiftui/view-layout/scroll-views/",
					link: "/",
					items: [
						{
							text: "创建滚动视图",
							collapsed: true,
							items: [
								{
									text: "ScrollView",
									link: "scrollview",
								},
								{
									text: "ScrollViewReader",
									link: "scrollviewreader",
								},
								{
									text: "ScrollViewProxy",
									link: "scrollviewproxy",
								},
							],
						},
						{
							text: "管理滚动位置",
							collapsed: true,
							items: [
								{
									text: "scrollPosition(_:anchor:)",
									link: "scrollPosition(_:anchor:)",
								},
								{
									text: "scrollPosition(id:anchor:)",
									link: "scrollPosition(id:anchor:)",
								},
								{
									text: "defaultScrollAnchor(_:)",
									link: "defaultScrollAnchor(_:)",
								},
								{
									text: "defaultScrollAnchor(_:for:)",
									link: "defaultScrollAnchor(_:for:)",
								},
								{
									text: "ScrollPosition",
									link: "scrollposition",
								},
							],
						},
						{
							text: "定义滚动目标",
							collapsed: true,
							items: [
								{
									text: "scrollTargetBehavior(_:)",
									link: "scrollTargetBehavior(_:)",
								},
								{
									text: "scrollTargetLayout(isEnabled:)",
									link: "scrollTargetLayout(isEnabled:)",
								},
								{
									text: "ScrollTarget",
									link: "scrolltarget",
								},
								{
									text: "ScrollTargetBehavior",
									link: "scrolltargetbehavior",
								},
								{
									text: "ScrollTargetBehaviorContext",
									link: "scrolltargetbehaviorcontext",
								},
								{
									text: "PagingScrollTargetBehavior",
									link: "pagingscrolltargetbehavior",
								},
								{
									text: "ViewAlignedScrollTargetBehavior",
									link: "viewalignedscrolltargetbehavior",
								},
								{
									text: "AnyScrollTargetBehavior",
									link: "anyscrolltargetbehavior",
								},
								{
									text: "ScrollTargetBehaviorProperties",
									link: "scrolltargetbehaviorproperties",
								},
								{
									text: "ScrollTargetBehaviorPropertiesContext",
									link: "scrolltargetbehaviorpropertiescontext",
								},
							],
						},
					],
				},
			],
		},
		{
			text: "事件处理",
			collapsed: true,
			base: "/documentation/swiftui/event-handling/",
			items: [
				{
					text: "手势",
					base: "/documentation/swiftui/event-handling/gestures/",
					link: "/",
					items: [
						{
							text: "重点",
							collapsed: false,
							items: [
								{
									text: "通过手势添加交互性",
									link: "adding-interactivity-with-gestures",
								},
							],
						},
						{
							text: "识别点击手势",
							collapsed: false,
							items: [
								{
									text: "onTapGesture(count:perform:)",
									link: "ontapgesture(count:perform:)",
								},
								{
									text: "onTapGesture(count:coordinateSpace:perform:)",
									link: "ontapgesture(count:coordinatespace:perform:)",
								},
								{
									text: "TapGesture",
									link: "tapgesture",
								},
								{
									text: "SpatialTapGesture",
									link: "spatialtapgesture",
								},
							],
						},
					],
				},
			],
		},
	];
}

function sidebarSwiftData(): DefaultTheme.SidebarItem[] {
	return [];
}

function sidebarFoundation(): DefaultTheme.SidebarItem[] {
	return [];
}

function sidebaruserNotifications(): DefaultTheme.SidebarItem[] {
	return [];
}

function sidebarXcode(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "界面",
			base: "/documentation/xcode/interface/",
			items: [
				{
					text: "",
				},
			],
		},
	];
}

function searchOptions(): Partial<DefaultTheme.LocalSearchOptions> {
	return {
		translations: {
			button: {
				buttonText: "搜索",
				buttonAriaLabel: "搜索",
			},
			modal: {
				displayDetails: "显示细节",
				resetButtonTitle: "重置搜索",
				backButtonTitle: "返回",
				noResultsText: "无搜索结果",
				footer: {
					selectText: "跳转",
					selectKeyAriaLabel: "跳转",
					navigateText: "选择",
					navigateUpKeyAriaLabel: "选择上一项",
					navigateDownKeyAriaLabel: "选择下一项",
					closeText: "关闭",
					closeKeyAriaLabel: "关闭",
				},
			},
		},
	};
}
