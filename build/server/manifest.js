const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","flower.svg","fonts/TT Jenevers Trial Light.otf","fonts/TT Jenevers Trial Medium Italic.otf","fonts/TT Jenevers Trial Medium.otf","fonts/TT Jenevers Trial Regular.otf","images/30daychartchallenge-2026/day1.png","images/global-partnership-finalist.png","images/indiaspend-ias.png","images/kontinentalist_bollywood.png","images/lede-gurgaon.png","images/lede-met-cats.png","images/mint-bollywood-remakes.png","images/mint-fiscal-deficit.png","images/mint-nobel-prize.png","images/mint-rbi.png","images/revisuallabs_arkavathy.png","images/sabew-nikkei-winner.png","images/the-pudding-cup-winner.png","images/thibi_ejnacademy.png","images/tmc-passport.png","images/training-thibi-ejn.png","images/words-of-wordle.png","world-map.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".otf":"font/otf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CEdWCBYR.js",app:"_app/immutable/entry/app.CzMt4AKM.js",imports:["_app/immutable/entry/start.CEdWCBYR.js","_app/immutable/chunks/B93BnXt0.js","_app/immutable/chunks/C2vq7jDC.js","_app/immutable/chunks/8xnrZX9H.js","_app/immutable/chunks/BusnrD9v.js","_app/immutable/chunks/UUpkyAZx.js","_app/immutable/entry/app.CzMt4AKM.js","_app/immutable/chunks/8xnrZX9H.js","_app/immutable/chunks/BusnrD9v.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/C2vq7jDC.js","_app/immutable/chunks/BHVE5eft.js","_app/immutable/chunks/DFnQD04B.js","_app/immutable/chunks/_uJ4Q_jL.js","_app/immutable/chunks/CBAr5Qi8.js","_app/immutable/chunks/UUpkyAZx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Ci-sG8lm.js')),
			__memo(() => import('./chunks/1-9nKtjNo8.js')),
			__memo(() => import('./chunks/2-qQP_hsTP.js')),
			__memo(() => import('./chunks/3-7wNCzx50.js')),
			__memo(() => import('./chunks/4-fnFOO4Ub.js')),
			__memo(() => import('./chunks/5-DFMkGZSh.js')),
			__memo(() => import('./chunks/6-B5uq8xc0.js')),
			__memo(() => import('./chunks/7-8VTvNyu_.js')),
			__memo(() => import('./chunks/8-DNiGnK7J.js')),
			__memo(() => import('./chunks/9-Yfb0HVQX.js')),
			__memo(() => import('./chunks/10-TehVljaJ.js')),
			__memo(() => import('./chunks/11-Bu2Gu3qN.js')),
			__memo(() => import('./chunks/12-3qBYtUm5.js')),
			__memo(() => import('./chunks/15-BQrHEXb1.js')),
			__memo(() => import('./chunks/16-CXd1t-RN.js')),
			__memo(() => import('./chunks/17-BuaL15Fs.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/bookmarks",
				pattern: /^\/bookmarks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/colophon",
				pattern: /^\/colophon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/garden",
				pattern: /^\/garden\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/places",
				pattern: /^\/places\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/readme",
				pattern: /^\/readme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/seeds",
				pattern: /^\/seeds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/visual-stories",
				pattern: /^\/visual-stories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/vizardry",
				pattern: /^\/vizardry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/vizardry/30-day-chart-challenge-2026",
				pattern: /^\/vizardry\/30-day-chart-challenge-2026\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/thoughts","/thoughts/colour-is-not-decoration","/thoughts/finding-patterns-in-noise"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/thoughts","/thoughts/colour-is-not-decoration","/thoughts/finding-patterns-in-noise"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
