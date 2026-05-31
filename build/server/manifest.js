const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.svg","flower.svg","fonts/TT Jenevers Trial Light.otf","fonts/TT Jenevers Trial Medium Italic.otf","fonts/TT Jenevers Trial Medium.otf","fonts/TT Jenevers Trial Regular.otf","images/.DS_Store","images/30-day-chart-challenge-doubt-slide.jpg","images/30daychartchallenge-2026/30-day-chart-challenge-preview.gif","images/30daychartchallenge-2026/30-day-chart-challenge-preview.mp4","images/30daychartchallenge-2026/day1-part-to-whole.png","images/30daychartchallenge-2026/day10-popculture.png","images/30daychartchallenge-2026/day11-physical.jpeg","images/30daychartchallenge-2026/day12-flowing-data.png","images/30daychartchallenge-2026/day13-ecosystems.png","images/30daychartchallenge-2026/day14-trade.png","images/30daychartchallenge-2026/day15-correlation.png","images/30daychartchallenge-2026/day16-causation.png","images/30daychartchallenge-2026/day17-remake.png","images/30daychartchallenge-2026/day18-unicef.png","images/30daychartchallenge-2026/day19-evolution.png","images/30daychartchallenge-2026/day2-pictogram.mp4","images/30daychartchallenge-2026/day20-globalchange.png","images/30daychartchallenge-2026/day21-historical.png","images/30daychartchallenge-2026/day22-newtool-revised.png","images/30daychartchallenge-2026/day23-seasons.png","images/30daychartchallenge-2026/day24-south-china-morning-post.png","images/30daychartchallenge-2026/day25-space.png","images/30daychartchallenge-2026/day26-trend.png","images/30daychartchallenge-2026/day27-animation.mp4","images/30daychartchallenge-2026/day28-modeling.png","images/30daychartchallenge-2026/day29-monochrome.png","images/30daychartchallenge-2026/day3-mosaic.png","images/30daychartchallenge-2026/day30-global-health-data-exchange.png","images/30daychartchallenge-2026/day4-slope.mp4","images/30daychartchallenge-2026/day5-experimental.png","images/30daychartchallenge-2026/day6-reporters-without-borders.png","images/30daychartchallenge-2026/day7-multiscale.png","images/30daychartchallenge-2026/day8-circular.png","images/30daychartchallenge-2026/day9-wealth.png","images/30daychartchallenge-2026/thumbs/day1-part-to-whole.jpg","images/30daychartchallenge-2026/thumbs/day10-popculture.jpg","images/30daychartchallenge-2026/thumbs/day11-physical.jpg","images/30daychartchallenge-2026/thumbs/day12-flowing-data.jpg","images/30daychartchallenge-2026/thumbs/day13-ecosystems.jpg","images/30daychartchallenge-2026/thumbs/day14-trade.jpg","images/30daychartchallenge-2026/thumbs/day15-correlation.jpg","images/30daychartchallenge-2026/thumbs/day16-causation.jpg","images/30daychartchallenge-2026/thumbs/day17-remake.jpg","images/30daychartchallenge-2026/thumbs/day18-unicef.jpg","images/30daychartchallenge-2026/thumbs/day19-evolution.jpg","images/30daychartchallenge-2026/thumbs/day2-pictogram.jpg","images/30daychartchallenge-2026/thumbs/day20-globalchange.jpg","images/30daychartchallenge-2026/thumbs/day21-historical.jpg","images/30daychartchallenge-2026/thumbs/day22-newtool-revised.jpg","images/30daychartchallenge-2026/thumbs/day23-seasons.jpg","images/30daychartchallenge-2026/thumbs/day24-south-china-morning-post.jpg","images/30daychartchallenge-2026/thumbs/day25-space.jpg","images/30daychartchallenge-2026/thumbs/day26-trend.jpg","images/30daychartchallenge-2026/thumbs/day27-animation.jpg","images/30daychartchallenge-2026/thumbs/day28-modeling.jpg","images/30daychartchallenge-2026/thumbs/day29-monochrome.jpg","images/30daychartchallenge-2026/thumbs/day3-mosaic.jpg","images/30daychartchallenge-2026/thumbs/day30-global-health-data-exchange.jpg","images/30daychartchallenge-2026/thumbs/day4-slope.jpg","images/30daychartchallenge-2026/thumbs/day5-experimental.jpg","images/30daychartchallenge-2026/thumbs/day6-reporters-without-borders.jpg","images/30daychartchallenge-2026/thumbs/day7-multiscale.jpg","images/30daychartchallenge-2026/thumbs/day8-circular.jpg","images/30daychartchallenge-2026/thumbs/day9-wealth.jpg","images/data-vis-dispatch-01.png","images/data-vis-dispatch-02.png","images/flourish-chart-challenge.png","images/global-partnership-finalist.png","images/indiaspend-ias.png","images/kontinentalist_bollywood.png","images/lede-gurgaon.png","images/lede-met-cats.png","images/mint-bollywood-remakes.png","images/mint-fiscal-deficit.png","images/mint-nobel-prize.png","images/mint-rbi.png","images/og-30-day-chart-challenge-2026.png","images/revisuallabs_arkavathy.png","images/sabew-nikkei-winner.png","images/talk-the-other-interface.png","images/the-pudding-cup-winner.png","images/thibi_ejnacademy.png","images/tmc-passport.png","images/training-thibi-ejn.png","images/words-of-wordle.png","world-map.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".otf":"font/otf",".jpg":"image/jpeg",".gif":"image/gif",".mp4":"video/mp4",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.vns5L3Jv.js",app:"_app/immutable/entry/app.DEBtq4Wh.js",imports:["_app/immutable/entry/start.vns5L3Jv.js","_app/immutable/chunks/BBDMJiC1.js","_app/immutable/chunks/B8_qDSkM.js","_app/immutable/chunks/DDI9mzuK.js","_app/immutable/chunks/DsU2P2FH.js","_app/immutable/chunks/Bze-GV9_.js","_app/immutable/entry/app.DEBtq4Wh.js","_app/immutable/chunks/DDI9mzuK.js","_app/immutable/chunks/DsU2P2FH.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B8_qDSkM.js","_app/immutable/chunks/CzeZhf9a.js","_app/immutable/chunks/D-EvJEQT.js","_app/immutable/chunks/Nd9GYR4W.js","_app/immutable/chunks/BR0h39s4.js","_app/immutable/chunks/Bze-GV9_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B4fMcyKX.js')),
			__memo(() => import('./chunks/1-CUimBZ6N.js')),
			__memo(() => import('./chunks/2-CsnPiShw.js')),
			__memo(() => import('./chunks/3-MDRLEZ6f.js')),
			__memo(() => import('./chunks/4-fN0blI4H.js')),
			__memo(() => import('./chunks/5-CFrsbjO5.js')),
			__memo(() => import('./chunks/6-Turpz52S.js')),
			__memo(() => import('./chunks/7-DMdHh6u8.js')),
			__memo(() => import('./chunks/8-BKMTgDso.js')),
			__memo(() => import('./chunks/9-BqIMtheN.js')),
			__memo(() => import('./chunks/10-Dv-D53K4.js')),
			__memo(() => import('./chunks/11-D70rSuyi.js')),
			__memo(() => import('./chunks/14-DKNg5IWu.js')),
			__memo(() => import('./chunks/15-BE0LFEXs.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/steps",
				pattern: /^\/api\/steps\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DuaoI5zG.js'))
			},
			{
				id: "/api/talks",
				pattern: /^\/api\/talks\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-JR2ywqx2.js'))
			},
			{
				id: "/api/visual-stories",
				pattern: /^\/api\/visual-stories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server--0QA4acS.js'))
			},
			{
				id: "/archive",
				pattern: /^\/archive\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/bookmarks",
				pattern: /^\/bookmarks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/colophon",
				pattern: /^\/colophon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/garden",
				pattern: /^\/garden\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/places",
				pattern: /^\/places\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/readme",
				pattern: /^\/readme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/seeds",
				pattern: /^\/seeds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/visual-stories",
				pattern: /^\/visual-stories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/vizardry",
				pattern: /^\/vizardry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/thoughts","/vizardry/30-day-chart-challenge-2026","/vizardry/30-day-chart-challenge-2026/__data.json","/vizardry/30-day-map-challenge-2026","/vizardry/30-day-map-challenge-2026/__data.json","/thoughts/colour-is-not-decoration","/thoughts/finding-patterns-in-noise"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/thoughts","/vizardry/30-day-chart-challenge-2026","/vizardry/30-day-chart-challenge-2026/__data.json","/vizardry/30-day-map-challenge-2026","/vizardry/30-day-map-challenge-2026/__data.json","/thoughts/colour-is-not-decoration","/thoughts/finding-patterns-in-noise"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
