import React, { useState } from 'react'

import './table.css'

const Table = (props) => {
	const iniDataShow =
		props.limit && props.bodyData
			? props.bodyData.slice(0, Number(props.limit))
			: props.bodyData

	const [dataShow, setDataShow] = useState(iniDataShow)
	const [currPage, setCurrPage] = useState(0)

	const slectPage = (page) => {
		const start = Number(props.limit) * page
		const end = start + Number(props.limit)

		setDataShow(props.bodyData.slice(start, end))
		setCurrPage(page)
	}

	let pages = 1
	let range = []

	if (props.limit !== undefined) {
		let page = Math.floor(props.bodyData.length / Number(props.limit))
		pages =
			props.bodyData.length % (Number(props.limit) === 0) ? page : page + 1
		range = [...Array(pages).keys()]
	}

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
								{dataShow.map((item, idx) => props.renderBody(item, idx))}
							</tbody>
						) : null}
					</thead>
				</table>
			</div>
			{pages > 1 ? (
				<div className='table__pagination'>
					{range.map((item, idx) => (
						<div
							key={idx}
							className={`table__pagination-item ${
								currPage === idx ? 'active' : ''
							}`}
							onClick={() => slectPage(idx)}
						>
							{item + 1}
						</div>
					))}
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default Table
