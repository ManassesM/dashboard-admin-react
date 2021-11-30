import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
	'',
	'name',
	'email',
	'phone',
	'total orders',
	'total spend',
	'location',
]

const renderHead = (item, idx) => <th key={idx}>{item}</th>

const renderBody = (item, idx) => (
	<tr key={idx}>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.email}</td>
		<td>{item.phone}</td>
		<td>{item.total_orders}</td>
		<td>{item.total_spend}</td>
		<td>{item.location}</td>
	</tr>
)

const Customers = () => {
	return (
		<div>
			<h2 className='page-header'>Customers</h2>
			<div className='row'>
				<div className='col-12'>
					<div className='card'>
						<div className='card__body'>
							<Table
								limit='10'
								headData={customerTableHead}
								renderHead={(item, idx) => renderHead(item, idx)}
								bodyData={customerList}
								renderBody={(item, idx) => renderBody(item, idx)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Customers
