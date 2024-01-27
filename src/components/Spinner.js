import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center text-sm'>
        <img className='rounded mx-auto d-block' src={loading} alt="loading" />
      </div>
    )
  }
}
