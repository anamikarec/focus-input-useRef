import React from 'react';

const Form = () => {
    const emailInputRef = React.useRef(null);

React.useEffect(()=>{
  emailInputRef.current.focus();
}, []);

// <input type="email" name="email" ref={emailInputRef} />
  return (
    <form>
    <h1>Maintain Input Focus</h1>
     Email:  <input type="email" name="email" placeholder="Enter your Email" ref={emailInputRef} className="form-input"/>
    </form>
  )
};
export default Form;