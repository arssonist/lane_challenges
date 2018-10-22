import React from 'react'
import ReactDOM from 'react-dom'

class History extends React.Component {
	render() {
		return (<div className="history-container">
			{this.props.text}

			{
				this.props.array.map((item, i) => {

					return (<div className="history-return">

						<div key={i} onClick={this.props.onClick}>{item.title}

						</div>
					</div>)
				})
			}

		</div>)
	}
}

export default History
