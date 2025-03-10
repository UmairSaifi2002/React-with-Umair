import { useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const [count, setCount] = useState(0); // State to manage a counter (not used in this form example)

  // Initialize the useForm hook to handle form state and validation
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }, // Destructure form state to access errors and submission status
  } = useForm();

  // Function to simulate a delay (not used in this example)
  const delay = (val) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, val * 1000);
    });
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    // Fetch API call to send form data to the backend
    let r = await fetch('http://localhost:3000/', {
      method: 'POST', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(data) // Convert the form data to JSON
    });
    let res = await r.text(); // Parse the response as text
    console.log(data, res); // Log the form data and the response from the backend
  };

  return (
    <>
      {isSubmitting && <div>Loading... </div>} // Display a loading message if the form is submitting
      <div>
        <h3>Learn about Handling Form and Connecting React to Express Backend</h3>
      </div>
      <div className="container">
        {/* Form with onSubmit handler */}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Username input field */}
          <input placeholder='username' 
            {...register('username', { 
              required: { value: true, message: "This field is required" }, // Validation: required field
              minLength: { value: 3, message: 'UserName is always greater than 3 characters' }, // Minimum length validation
              maxLength: { value: 8, message: 'UserName is always lesser than 8 characters' } // Maximum length validation
            })} 
            type="username" 
            name='username' 
          />
          {errors.username && <div className='red'>{errors.username.message}</div>} // Display error message if validation fails

          {/* Password input field */}
          <input placeholder='password' 
            {...register('password', { 
              required: { value: true, message: "This field is required" }, // Validation: required field
              minLength: { value: 3, message: 'password is always greater than 3 characters' }, // Minimum length validation
              maxLength: { value: 8, message: 'password is always lesser than 8 characters' } // Maximum length validation
            })} 
            type="password" 
            name='password' 
          />
          {errors.password && <div className='red'>{errors.password.message}</div>} // Display error message if validation fails
          <input disabled={isSubmitting} type="submit" value='Submit' /> // Submit button
          {errors.myForm && <div className='red'>{errors.myForm.message}</div>} // Display custom form error messages
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>} // Display custom blocked error messages
        </form>
      </div>
    </>
  );
}

export default App;