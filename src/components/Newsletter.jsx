import { useState } from 'react';

const Newsletter = () => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    console.log(value);
    setValue('');
  };

  return (
    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
          <div className="input-group news-input">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              aria-label="Enter Email"
              aria-describedby="newsletter-button"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="button"
              id="newsletter-button"
              className="btn btn-dark btn-lg"
              onClick={handleClick}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
