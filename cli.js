
const meow = require('meow');

module.exports = meow(`
	Usage
	  $ instagram-profile-crawl <name>
	  
	Options
	  --chrome      use chrome
	  --firefox     use firefox
	  --phantomjs   use phantomjs

	Examples
	  $ instagram-profile-crawl nacimgoura
`, {
	default: { chrome: true },
});
