import React from 'react'

class BookList extends React.Component {
	// Konstruktor-funktionen kör när komponenten skapas
	constructor(props) {
		super(props)

		// State-variabler buntas ihop i ett objekt
		this.state = {
			books: [
				{ title: 'JavaScript: the good parts' },// eslint-disable-line no-script-url
				{ title: 'Den oändliga historien' },
				{ title: 'Sagan om ringen' },
				{ title: 'Kometen kommer' },
				{ title: 'The sun also rises', author: 'Ernest Hemingway' },
				{ title: 'Anne Franks dagbok' }
			]
		}
		// En set-funktion i stället för flera: this.setState
		// const [books, setBooks] = useState([.....])
	}

	render() {
		return (
			<div>
				{this.state.books.map(book => (
					<div key={book.title}>
						{book.title}
						{book.author ? ', ' + book.author : '' }
					</div>
				))}
			</div>
		)
	}
}

export default BookList
