import pa11y from 'pa11y';
import fs from 'file-system'

pa11y('http://localhost:4321')
	.then((results) => {
		// console.log({ results });
		console.log(`There are ${results?.issues?.length || 0} issues`)
		fs.writeFileSync(
			`./tests/results/a11y.json`,
			JSON.stringify(results, null, 4)
		)
	})
	.catch((error) => {
		console.error({ error });
	})