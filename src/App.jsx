import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
