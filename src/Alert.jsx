import React from "react";

export default function Alert(props) {
  return (
<div style={{height:"45px"}}>
    {props.Alert && (
      <div>
        <div
          className={`alert alert-${props.Alert.alerttype} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.Alert.alertmsg}</strong>
        </div>
      </div>
    )}
    </div>
  );
}
