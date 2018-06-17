const config = {
	"CORS": "*",
	"DATABASE": {
		"HOST": "evaniacrawlerdb.cdmandmiw5ls.ap-southeast-1.rds.amazonaws.com",
		"USER": "crawler",
		"PASSWORD": "crawler1234",
		"NAME": "crawldb"
	},
	"SUGAR": {
		"platform": "production"
	},
	"XERO": {
		"userAgent": "universe",
		"consumerKey": "ZPNWK2PMZWO3WYNXZO0J6HKXXDQMGJ",
		"consumerSecret": "UUZSFCW96WWLVVBHA5K3FJ8YO5K4HD",
	},
	"SENDE_EP": {
		"token": "12285a7181d64a8c5d5e4f34b8cc0eb0d70c2903",
		"username": "EPNewsdestages",
		"url": "https://sf27.sendsfx.com/xml.php"
	},
	"SENDE": {
		"token": "8211cc13e49928b7d45c99030583bd6771162928",
		"username": "Evania",
		"url": "https://sf27.sendsfx.com/xml.php"
	},
	"EXPERT_SENDER": {
		"API_KEY": "nIREZ0YhPhJfM7LuKp1B",
		"BASE_URL": "https://api3.esv2.com/Api/",
		"DEFAULT_DAY_DURATION": 10,
		"DEFAULT_TYPE": "newsletter"
	},
	"SALESFORCE": {
		"CLIENT_ID": "3MVG9HxRZv05HarQsJgzGsn9_h9H3w8DxlJXNabyLu4RRnPiC2tsHKWBirT4ke4NPep__IPTm9QeBqrFwNqnd",
		"CLIENT_SECRET": "1857782054063352496",
		"USER_NAME": "ninh@audienceserv.com",
		"PASSWORD": "KZWxeUP9Tr",
		"TOKEN": "3krL2GQUJTC3wGVR5NQ7ssGKz"
	}
};

module.exports = config;


