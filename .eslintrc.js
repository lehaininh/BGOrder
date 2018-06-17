module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"jquery": true,
		"mocha": true
	},
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"jquery"
	],
	"rules": {
		"react/prop-types": 2,
		"react/jsx-uses-vars": 2,
		"react/jsx-uses-react": 2,
		"react/react-in-jsx-scope": 2,
		"no-undef": 2,
		"prefer-const": 1,
		"no-const-assign": 2,
		"no-redeclare": [
			"off",
			{"builtinGlobals": true}
		],
		"no-case-declarations": "off",
		"no-unused-vars": ["warn"],
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": [
			"error",
			{
				allow: ["warn", "error", "info", "debug"]
			}
		]
	},
	"overrides": [
		{
			"excludeFiles": "public/**.*"
		}
	],
	"globals": {
		"c3": true
	}
};
