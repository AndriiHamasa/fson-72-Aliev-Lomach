// import { useContext } from "react"
// import { ToggleContext } from "./App"
import { CustomUseContext } from "./Context/Context"

const Main = () => {


	// const result = useContext(ToggleContext)
	const result = CustomUseContext()

	return (
		<div>
			<h1>Hello Context</h1>

			<button onClick={result.toggleFn}  className='btn btn-success'>
				Open Alert
			</button>
		</div>
	)
}

export default Main
