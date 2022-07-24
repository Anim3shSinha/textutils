import React from 'react'

function Alert(props) {
  return (
       props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show role="alert`}>
                {props.alert.Type}  : {props.alert.msg} 
        </div>
  );
}
export default Alert
