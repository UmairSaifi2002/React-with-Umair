import Script from 'next/script'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Script>{`alert('Welcome to the Contact Page.')`}</Script>
        <h1>Hello this is a Contact Page.</h1>
    </div>
  )
}

export default contact

export const metadata = {
    title: "Facebook Connect with World using Contact Page.",
    description: "This is facebook and we can connect with the world using facebook content page.",
  };

