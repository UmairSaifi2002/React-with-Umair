import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    setError, // We can throw custom error
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }

  // const onSubmit = async(data) => {
  //   await delay(4) // here we simulating network delay
  //   console.log(data);
  //   if (data.username === 'Subham') {
  //     setError('s', {message: 'User is Blocked by Backend Team.'})
  //     console.log('User is Blocked by Backend Team.');      
  //   }
  //   if (data.username === 'Akash') {
  //     setError('a', {message: 'User is not Permisible to Login.'})
  //     console.log('User is not Permisible to Login.');      
  //   }
  // }

  const onSubmit = async(data) => {
    let r = await fetch('http://localhost:3000/', 
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    )
    let res = await r.text()
    console.log(data, res);
    if (data.username === 'Subham') {
      setError('s', { message: 'User is Blocked by Backend Team.' })
      console.log('User is Blocked by Backend Team.');
    }
    if (data.username === 'Akash') {
      setError('a', { message: 'User is not Permisible to Login.' })
      console.log('User is not Permisible to Login.');
    }
  }

  return (
    <>

      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username'
            {
            ...register('username', {
              required: true,
              // minLength: 3, // it doesnot show the error or donot show the error message on display
              minLength: { value: 3, message: "Minimum Length is 3." },
              maxLength: { value: 10, message: "Maximum Length is 10" },
            })
            }
            type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input placeholder='password'
            {
            ...register('password', {
              required: true,
              minLength: { value: 4, message: "Minimum Length is 4" },
              maxLength: { value: 12, message: "Maximum Length is 12" },
            })
            }
            type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}

          <input disabled={isSubmitting} type="submit" value="Submit" />

          {/* Now we can Learn about How can we Display our own Custom Error */}
          {errors.s && <div className='yellow'>{errors.s.message}</div>}
          {errors.a && <div className='yellow'>{errors.a.message}</div>}
        </form>
      </div>
      {isSubmitting && <div>Loading...</div>}

    </>
  )
}

export default App
