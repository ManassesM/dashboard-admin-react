import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

import Routes from '../Routes'

import './layout.css'
import Topnav from '../topnav/TopNav'

const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<Route
					render={(props) => (
						<div className='layout'>
							<Sidebar {...props} />
							<div className='layout__content'>
								<Topnav />
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
