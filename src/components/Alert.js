import React from 'react';

export default function Alert({alert}){
    
    return(
        alert && <div className={`alert m-0 p-${alert.padd} alert-${alert.typ} alert-dismissible m-0 fade show`} role="alert">
        <strong>{alert.msg}</strong> 
        
    </div>
    )
}