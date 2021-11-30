import React from 'react'

import './table.css'

const Table = (props) => {
	return (
		<div>
			<div className='table-wrapper'>
				<table>
					<thead>
						{props.headData && props.renderHead ? (
							<thead>
								<tr>
									{props.headData.map((item, idx) =>
										props.renderHead(item, idx)
									)}
								</tr>
							</thead>
						) : null}
						{props.bodyData && props.renderBody ? (
							<tbody>
								{props.bodyData.map((item, idx) => props.renderBody(item, idx))}
							</tbody>
						) : null}
					</thead>
				</table>
			</div>
		</div>
	)
}

export default Table