import pa11y from 'pa11y'
import fs, { rmdirSync } from 'file-system'

// pa11y('http://localhost:4321')
// 	.then((results) => {
// 		// console.log({ results })
// 		fs.writeFileSync(
// 			`tests/a11y/results.json`,
// 			JSON.stringify(results, null, 4)
// 		)
// 	})
// 	.catch((error) => {
// 		console.log({ error })
// 	})

Promise.all([
	pa11y('http://localhost:4321/html'),
	pa11y('http://localhost:4321/add'),
])
	.then((allResults) => {
		allResults.forEach((testResults, index) => {
			fs.writeFileSync(
				`tests/a11y/results_${index}.json`,
				JSON.stringify(testResults, null, 4)
			)
		})
	})