import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'

const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<Route
					render={(props) => (
						<div className='layout'>
							<Sidebar {...props} />
							<div className='layout__content'>
								<div className='layout__content-main'>
									<Routes />
								</div>
							</div>
						</div>
					)}
				/>
			</BrowserRouter>
		</div>
	)
}

export default Layout
