import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Name' />
            <br />

            <input type="email" className="Email" />
            <br />

            <input type="message" className="Message" />
            <br />

            <button type="submit"> Submit </button>
        </form>
    </div>
  )
}

export default ContactForm