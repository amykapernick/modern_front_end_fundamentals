import pa11y from 'pa11y'

const websiteUrl = 'https://opulent-space-orbit-69wpr9p4q7xfrq7r-4321.app.github.dev/'

pa11y(websiteUrl)
    .then((results) => {
        console.log({...results})
    })
    .catch((err) => {
        console.log({err})
    })