import React from 'react'

function Alerts(props) {
  const capitalize = (type) => {
    let typeTxt = type[0].toUpperCase() + type.substr(1,type.length-1).toLowerCase();
    return typeTxt;
  };
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
    </div>}
    </div>
  )
}

export default Alerts
