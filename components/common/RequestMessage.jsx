import React from 'react'

function RequestMessage({icon="bi bi-check2-circle" ,message}) {
  return (
    <div className="request-message">
      <i className={icon}></i> {message}
    </div>
  )
}

export default RequestMessage;