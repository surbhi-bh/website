const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["flower.svg","images/30daychartchallenge-2026/day1.png","images/global-partnership-finalist.png","images/indiaspend-ias.png","images/kontinentalist_bollywood.png","images/lede-gurgaon.png","images/lede-met-cats.png","images/mint-bollywood-remakes.png","images/mint-fiscal-deficit.png","images/mint-nobel-prize.png","images/mint-rbi.png","images/revisuallabs_arkavathy.png","images/sabew-nikkei-winner.png","images/the-pudding-cup-winner.png","images/thibi_ejnacademy.png","images/tmc-passport.png","images/training-thibi-ejn.png","images/words-of-wordle.png","world-map.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BXtDFDey.js",app:"_app/immutable/entry/app.dDWFTu5O.js",imports:["_app/immutable/entry/start.BXtDFDey.js","_app/immutable/chunks/le7NKftF.js","_app/immutable/chunks/C3dTbOl3.js","_app/immutable/chunks/DgPHfiCu.js","_app/immutable/chunks/C6Psu_r3.js","_app/immutable/entry/app.dDWFTu5O.js","_app/immutable/chunks/C3dTbOl3.js","_app/immutable/chunks/BGsz7Puc.js","_app/immutable/chunks/v_o_gDag.js","_app/immutable/chunks/C6Psu_r3.js","_app/immutable/chunks/CB-bHNDz.js","_app/immutable/chunks/BHAMHhP8.js","_app/immutable/chunks/CNmZtFVe.js","_app/immutable/chunks/DgPHfiCu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Blq8JB5n.js')),
			__memo(() => import('./chunks/1-CaiiLrnr.js')),
			__memo(() => import('./chunks/2-BWFGMqai.js')),
			__memo(() => import('./chunks/3-C5l20XbY.js')),
			__memo(() => import('./chunks/4-BnaN5ltI.js')),
			__memo(() => import('./chunks/5-0dvTUzl-.js')),
			__memo(() => import('./chunks/6-nqSaXgrB.js')),
			__memo(() => import('./chunks/7-SXBYm6Ji.js')),
			__memo(() => import('./chunks/8-omTXhHHp.js')),
			__memo(() => import('./chunks/9-CwF6CN2o.js')),
			__memo(() => import('./chunks/12-CbmMUHHL.js')),
			__memo(() => import('./chunks/13-CiUw-Wr8.js')),
			__memo(() => import('./chunks/14-CGznbZZL.js'))
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
				id: "/seeds",
				pattern: /^\/seeds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/talks",
				pattern: /^\/talks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/visual-stories",
				pattern: /^\/visual-stories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/vizardry",
				pattern: /^\/vizardry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/vizardry/30-day-chart-challenge-2026",
				pattern: /^\/vizardry\/30-day-chart-challenge-2026\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
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
