import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', async (req, res) => {
	const url = 'https://gozambiajobs.com/wp-json/wp/v2/job-listings?job-types=6';

    const response = await fetch(url); 
    const data = await response.json();

	res.render('home', { listings: data });
});

router.get('/:more', async (req, res) => {

	if (req.params.more === 'next') {
		const url = 'https://jobsearchzm.com/wp-json/wp/v2/job-listings?job-types=8';
		
        const response = await fetch(url); 
        const data = await response.json();

		res.json(data);
	}
});

export default router;
