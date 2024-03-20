import React from 'react'

const Header = ({ refreshPage }) => {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='d-flex justify-content-center pt-4'>
        <div className="App">
          <img src="./logo.png" alt="logo" max-width={400} height={45} />
        </div>
        </div>
        </div>
        <div className='col-sm-6'>
          <div className='d-flex justify-content-center pt-4'>
          <button
          class="btn btn-outline-dark"
            type='button'
            onClick={refreshPage}
          >Bg Remover</button> 
          </div>
        </div>
    </div>
  )
}

export default Header

















