import { useRef } from 'react';
import fetchPonyfill from 'fetch-ponyfill'

import mainStyles from '../styles/main.module.css'
export default function NewsLetterSignUpForm(usePonyfill = true) {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await (usePonyfill ? fetchPonyfill() : { fetch }).fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
    const result = await res.json();
    console.log(result);
  };

return (
    <>
    <form onSubmit={subscribeUser} className={mainStyles.newsletterform}>
      {/* <label htmlFor="email-input" className={mainStyles.h1}>
        Your Best Email
      </label> */}

      <input
        type="email"
        className={mainStyles.emailaddress}
        id="email-input"
        name="email"
        placeholder="your best email"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button className={mainStyles.footertext} type="submit"  value="" name="subscribe">
        Subscribe
      </button>
    </form>
    </>
  );
}