import React from 'react'
import { ClipLoader } from 'react-spinners'

const override = {
      display: 'block',
      margin: '100px auto'
}

const loading = ({loading}) => {
  return (
      <ClipLoader
      color='blue'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default loading 