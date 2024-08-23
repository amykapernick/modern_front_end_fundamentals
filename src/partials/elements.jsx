import { useEffect, useState } from "react"
import Element from "src/components/element"

const HTMLElements = (props) => {
	const { apiUrl } = props
	const [elements, setElements] = useState([])
	const updateElements = (updatedElements) => {
		setElements(updatedElements)
		window.localStorage.setItem('elements', JSON.stringify(updatedElements))
		window.localStorage.setItem('elementsUpdated', new Date())
	} 

	useEffect(() => {
		const localElements = window.localStorage.getItem('elements')
		const localElementsUpdated = window.localStorage.getItem('elementsUpdated')

		if(
			localElements
			&& localElementsUpdated
			&& new Date(localElementsUpdated) > new Date(new Date().getTime() - 10 * 60000)
		) {
			setElements(JSON.parse(localElements))
		}
		else {
			fetch(`${apiUrl}/html`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					console.log({data})
					updateElements(data)
				})
		}

	}, [])

	return (
		<>
			{elements.length 
				? <ul className="elements">
					{elements
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((element)  => (
							<li className="element" key={element.id}>
								<Element
									{...element}
									elements={elements}
									updateElements={updateElements}
									apiUrl={apiUrl}
								/>
							</li>
						))
					}
				</ul> 
				: <p>Loading...</p>
			}
		</>
	)
}

export default HTMLElements