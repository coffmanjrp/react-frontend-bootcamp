import fundamentalImage from '../img/fundamentals.svg';
import reactImage from '../img/react.svg';

const Learn = () => {
  return (
    <>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src={fundamentalImage}
                alt="FLearn The Fundamentals"
                className="img-fluid"
              />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur illum sapiente distinctio laudantium beatae. Beatae.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae quas autem explicabo laudantium delectus est ex. Ea
                vel quam sit, delectus soluta provident dignissimos esse
                obcaecati aut saepe libero ullam!
              </p>
              <a href="#!" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right" /> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur illum sapiente distinctio laudantium beatae. Beatae.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae quas autem explicabo laudantium delectus est ex. Ea
                vel quam sit, delectus soluta provident dignissimos esse
                obcaecati aut saepe libero ullam!
              </p>
              <a href="#!" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right" /> Read More
              </a>
            </div>
            <div className="col-md">
              <img src={reactImage} alt="Learn React" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
