import { useEffect, useState } from 'react';

const Modal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => console.log(userInfo), [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserInfo({
      firstName,
      lastName,
      email,
      phone,
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div
      className="modal fade"
      id="enroll"
      aria-labelledby="enroll-label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="enroll-label">
              Enrollment
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="lead">
              Fill out this form and we will get back to you
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="first-name" className="col-form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="last-name" className="col-form-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="col-form-label">
                  Phone:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
