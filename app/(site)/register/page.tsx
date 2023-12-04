import React from 'react'
import RegisterTabs from './components/RegisterTabs'

const Register = () => {
  return (
    <section> 
      <div> 
        <h1 className='font-bold text-3xl text-green-600'> Register Your Clinic</h1>
      </div>
      <main> 
        <RegisterTabs/>
      </main>
    </section>
  )
}

export default Register