import React from 'react'

class BookList extends React.Component {
	// Konstruktor-funktionen kör när komponenten skapas
	constructor(props) {
		super(props)
		console.log('BookList constructor');

		// Kommer ihåg context för this
		// this.handleSearchChange = this.handleSearchChange.bind(this)

		// State-variabler buntas ihop i ett objekt
		this.state = {
			books: null,
			searchText: ''
		}
		// En set-funktion i stället för flera: this.setState
		// const [books, setBooks] = useState([.....])
	}

	handleSearchChange = (event) => {
		// Glömmer context för this
		console.log('BookList handleSearchChange', this);
		this.setState({ searchText: event.target.value })
	}

	componentDidMount = async () => {
		console.log('BookList componentDidMount');
		// Obs! Lägg till proxy i package.json
		const response = await fetch('http://localhost:1339/api/books', { method: 'GET' })
		const bookArray = await response.json()
		console.log('BookList fetch: got data from api', bookArray);
		this.setState({ books: bookArray })
	}

	render() {
		// Kommer ihåg context för this
		console.log('BookList render', this);
		const searchLowerCase = this.state.searchText.toLowerCase()

		return (
			<div>
				<div>
				<input type="text" placeholder="Search for books"
					onChange={this.handleSearchChange}
					/>
				</div>

				{this.state.books === null
				? 'Loading books, please wait...'
				: this.state.books
					.filter(book => this.state.searchText === '' ? true : book.title.toLowerCase().includes(searchLowerCase))

					.map(book => (
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
