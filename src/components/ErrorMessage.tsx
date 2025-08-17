import React from 'react'
type ErrorMessageProps = {
    children?: React.ReactNode;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div className="bg-red-500 text-white p-2 rounded">
      {children}
    </div>
  )
}

export default ErrorMessage