import React from "react"

const EditExpensePage = props => {
    console.log(props)
    return <div>Edit ing id {props.match.params.id}</div>
}

export default EditExpensePage