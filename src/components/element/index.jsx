import { useEffect, useState } from "react"
import { Converter } from 'showdown'
import styles from './styles.module.css'

const Element = (props) => {
	const {name, mdn, html, id, selfClosing, example, updateElements, elements } = props
	const [votes, setVotes] = useState(props.votes || 0)
	const [markdown, setMarkdown] = useState(props.markdown || null)
	const [processing, setProcessing] = useState(false)
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const addVote = async () => {
		setProcessing(true)
		await fetch(`https://workshopapi.azurewebsites.net/workshop-htmlElements?element=${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
		})
			.then(res => res.json())
			.then(res => {
				setVotes(res.votes)
				updateElements(
					elements.map(element => ({
						...element,
						votes: res.votes ? res.votes : element.votes
					}))
				)
				setProcessing(false)
			})
	}
	const openExample = async () => {
		setOpen(true)
		if(!markdown) {
			setLoading(true)

			await fetch(`https://workshopapi.azurewebsites.net/workshop-htmlElements?element=${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
			})
				.then(res => res.json())
				.then(res => {
					setMarkdown(res.markdown)
	
					updateElements(
						elements.map(element => {
							if(element.id === id) {
								return ({ 
									...element, 
									...res 
								})
							}
							return element
						})
					)
	
					setLoading(false)
				})
		}
	}

	useEffect(() => {
		const dialog = document.querySelector('dialog')
		
		if(open) dialog.showModal()
		else dialog.close()
	}, [open])

	return (
		<div className={styles.card}>
			<h2 className="sr-only">{name}</h2>
			<pre className={styles.sample}>
				{selfClosing
					? `<${name} />`
					: `<${name}></${name}>`
				}
			</pre>
			<span className={styles.votes}>{votes}</span>
			<a href={mdn} target="_blank">MDN Reference</a>
			<a href={html} target="_blank">HTML Reference</a>
			{example &&
				<>
					<button className={styles.link} onClick={openExample}>View Example</button>
					<dialog className={styles.dialog}>
						<button className={styles.close} onClick={() => setOpen(false)}>
							✕
							<span className="sr-only">Close</span>
						</button>
						{loading ? 'Loading example...' : <div 
							className={styles.example}
							dangerouslySetInnerHTML={{
								__html: new Converter().makeHtml(markdown)
							}}
						/>}
					</dialog>
				</>
			}
			<button 
				className={styles.vote}
				onClick={addVote} 
				disabled={processing}
			>
				{processing ? 'Voting...' : 'Vote'}
			</button>
		</div>
	)
}

export default Element