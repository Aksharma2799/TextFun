import React from 'react'

function Alert(props) {
    const toCap = (wd) =>{
        const lwr = wd.toLowerCase();
        return lwr.charAt(0).toUpperCase() + lwr.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{toCap(props.alert.type)}</strong>: {props.alert.msg}
            </div>}

            </div>
        
    )
}

export default Alert;
