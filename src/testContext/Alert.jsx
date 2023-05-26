
// import { useContext } from 'react'
// import { ToggleContext } from './App'
import { CustomUseContext } from "./Context/Context"


const Alert = () => {

	const result = CustomUseContext()

	console.log('result :>> ', result)
	return result.toggleValue && <div className='alert alert-danger'>Messaaaaaggee</div>

	
}

export default Alert
