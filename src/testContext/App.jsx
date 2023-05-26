import Alert from './Alert'
import Main from './Main'
import { Context } from './Context/Context';


const App = () => {
	return (
		<div className='container pt-2'>
			<Context>
				<Alert />
				<Main />
			</Context>
		</div>
	)
}

export default App
