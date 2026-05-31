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
		client: {start:"_app/immutable/entry/start.XlXGQ5VA.js",app:"_app/immutable/entry/app.BKQ-Ix5S.js",imports:["_app/immutable/entry/start.XlXGQ5VA.js","_app/immutable/chunks/BbucmZWv.js","_app/immutable/chunks/CELcJ3Ad.js","_app/immutable/chunks/CRWcTHQl.js","_app/immutable/chunks/0IyOi8kv.js","_app/immutable/chunks/BJBxP7N5.js","_app/immutable/entry/app.BKQ-Ix5S.js","_app/immutable/chunks/CRWcTHQl.js","_app/immutable/chunks/0IyOi8kv.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CELcJ3Ad.js","_app/immutable/chunks/DME8-kaT.js","_app/immutable/chunks/De_aJ3fJ.js","_app/immutable/chunks/g-yMpXWH.js","_app/immutable/chunks/DZLINI36.js","_app/immutable/chunks/BJBxP7N5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DTkOZ9dY.js')),
			__memo(() => import('./chunks/1-Z0X0HpSs.js')),
			__memo(() => import('./chunks/2-IBkRBfmg.js')),
			__memo(() => import('./chunks/3-B6VC-TYB.js')),
			__memo(() => import('./chunks/4-CWQgTeCZ.js')),
			__memo(() => import('./chunks/5-g7eOO5ws.js')),
			__memo(() => import('./chunks/6-CdMTCYay.js')),
			__memo(() => import('./chunks/7-CZObXU-z.js')),
			__memo(() => import('./chunks/8-CXwbr952.js')),
			__memo(() => import('./chunks/9-BMCNtzIJ.js')),
			__memo(() => import('./chunks/10-Nrzz6d_w.js')),
			__memo(() => import('./chunks/11-DkFmRkz1.js')),
			__memo(() => import('./chunks/12-CsDg-6jd.js')),
			__memo(() => import('./chunks/13-Be_stNtF.js'))
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
		prerendered_routes: new Set(["/vizardry/30-day-chart-challenge-2026","/vizardry/30-day-chart-challenge-2026/__data.json","/vizardry/30-day-map-challenge-2026","/vizardry/30-day-map-challenge-2026/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/vizardry/30-day-chart-challenge-2026","/vizardry/30-day-chart-challenge-2026/__data.json","/vizardry/30-day-map-challenge-2026","/vizardry/30-day-map-challenge-2026/__data.json"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
