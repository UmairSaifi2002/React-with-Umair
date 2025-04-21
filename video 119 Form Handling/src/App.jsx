import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username' 
          {
            ...register('username', { 
              required: true, 
              minLength: 3, 
              maxLength: 10 
            })
          } 
          type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input placeholder='password' 
          {
            ...register('password',{
              required: true,
              minLength: 4,
              maxLength: 12
            })
          } 
          type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
