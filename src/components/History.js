import React from 'react'
import ReactDOM from 'react-dom'

function History(props){
        return (<div className="history-return">
                    <div onClick={props.onClick}>
                    </div>{props.nodeText}
                </div>)

}

export default History
