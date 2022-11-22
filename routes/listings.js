const express = require('express');
const { exec } = require('node:child_process');
const router = express.Router();


router.get('/', (req, res) => {
	const url = 'https://gozambiajobs.com/wp-json/wp/v2/job-listings?job-types=6';
	
	// run the `wget` command using exec
	const cmd = `wget -O - ${url} --user-agent="Mozilla/5.0" | jq`;

	exec(cmd, (err, output) => {
		// invoke callback fxn after executing cmd
		if (err) {
				// log and return if we encounter an error
				console.error("could not execute command: ", err);
				return;
		}

		const data = JSON.parse(output);

		res.render('home', { listings: data });
	});
});

router.get('/:more', (req, res) => {

	if (req.params.more === 'next') {
		const url = 'https://jobsearchzm.com/wp-json/wp/v2/job-listings?job-types=8';
		
		// run the `wget` command using exec
		const cmd = `wget -O - ${url} --user-agent="Mozilla/5.0" | jq`;

		exec(cmd, (err, output) => {
			// invoke callback fxn after executing cmd
			if (err) {
					// log and return if we encounter an error
					console.error("could not execute command: ", err);
					return;
			}

			const data = JSON.parse(output);
			res.json(data);
		});
	}
});

module.exports = router;
