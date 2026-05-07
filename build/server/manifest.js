const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.svg","flower.svg","fonts/TT Jenevers Trial Light.otf","fonts/TT Jenevers Trial Medium Italic.otf","fonts/TT Jenevers Trial Medium.otf","fonts/TT Jenevers Trial Regular.otf","images/.DS_Store","images/30daychartchallenge-2026/day1-part-to-whole.png","images/30daychartchallenge-2026/day10-popculture.png","images/30daychartchallenge-2026/day11-physical.jpeg","images/30daychartchallenge-2026/day12-flowing-data.png","images/30daychartchallenge-2026/day13-ecosystems.png","images/30daychartchallenge-2026/day14-trade.png","images/30daychartchallenge-2026/day15-correlation.png","images/30daychartchallenge-2026/day16-causation.png","images/30daychartchallenge-2026/day17-remake.png","images/30daychartchallenge-2026/day18-unicef.png","images/30daychartchallenge-2026/day19-evolution.png","images/30daychartchallenge-2026/day2-pictogram.mp4","images/30daychartchallenge-2026/day20-globalchange.png","images/30daychartchallenge-2026/day21-historical.png","images/30daychartchallenge-2026/day22-newtool-revised.png","images/30daychartchallenge-2026/day23-seasons.png","images/30daychartchallenge-2026/day24-south-china-morning-post.png","images/30daychartchallenge-2026/day25-space.png","images/30daychartchallenge-2026/day26-trend.png","images/30daychartchallenge-2026/day27-animation.mp4","images/30daychartchallenge-2026/day28-modeling.png","images/30daychartchallenge-2026/day29-monochrome.png","images/30daychartchallenge-2026/day3-mosaic.png","images/30daychartchallenge-2026/day30-global-health-data-exchange.png","images/30daychartchallenge-2026/day4-slope.mp4","images/30daychartchallenge-2026/day5-experimental.png","images/30daychartchallenge-2026/day6-reporters-without-borders.png","images/30daychartchallenge-2026/day7-multiscale.png","images/30daychartchallenge-2026/day8-circular.png","images/30daychartchallenge-2026/day9-wealth.png","images/global-partnership-finalist.png","images/indiaspend-ias.png","images/kontinentalist_bollywood.png","images/lede-gurgaon.png","images/lede-met-cats.png","images/mint-bollywood-remakes.png","images/mint-fiscal-deficit.png","images/mint-nobel-prize.png","images/mint-rbi.png","images/revisuallabs_arkavathy.png","images/sabew-nikkei-winner.png","images/the-pudding-cup-winner.png","images/thibi_ejnacademy.png","images/tmc-passport.png","images/training-thibi-ejn.png","images/words-of-wordle.png","world-map.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".otf":"font/otf",".png":"image/png",".jpeg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.uOuBeZGe.js",app:"_app/immutable/entry/app._uqOBSpt.js",imports:["_app/immutable/entry/start.uOuBeZGe.js","_app/immutable/chunks/BNSLxry3.js","_app/immutable/chunks/BETNdb23.js","_app/immutable/chunks/CX6YoJRe.js","_app/immutable/chunks/D6ICSAgh.js","_app/immutable/chunks/BBE_IsE5.js","_app/immutable/entry/app._uqOBSpt.js","_app/immutable/chunks/CX6YoJRe.js","_app/immutable/chunks/D6ICSAgh.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BETNdb23.js","_app/immutable/chunks/mTpKAz6e.js","_app/immutable/chunks/B9pPcge4.js","_app/immutable/chunks/CPBsW8DU.js","_app/immutable/chunks/d1J9Q947.js","_app/immutable/chunks/BBE_IsE5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-N_V_msZf.js')),
			__memo(() => import('./chunks/1-BsbnBKce.js')),
			__memo(() => import('./chunks/4-CuImByaP.js')),
			__memo(() => import('./chunks/5-D_D_K1ja.js')),
			__memo(() => import('./chunks/6-6aL1YMDN.js')),
			__memo(() => import('./chunks/7-BIkQ47aw.js')),
			__memo(() => import('./chunks/8-C5xMGJSH.js')),
			__memo(() => import('./chunks/9-DyBdBv0U.js')),
			__memo(() => import('./chunks/10-BDZ_JN2z.js')),
			__memo(() => import('./chunks/11-Wkf9JxVe.js')),
			__memo(() => import('./chunks/12-Dm6cE2NE.js')),
			__memo(() => import('./chunks/13-DftY6cIO.js')),
			__memo(() => import('./chunks/16-Cr5oGrOl.js')),
			__memo(() => import('./chunks/17-8PLMzJAP.js'))
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
