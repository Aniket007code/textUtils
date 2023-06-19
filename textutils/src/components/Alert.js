import React from 'react'

export default function Alert(props) {
    return (
        <>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <b>{props.alert.msg}</b> : <strong>{props.alert.type}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}
