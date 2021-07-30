import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';

const Instructors = () => {
  return (
    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="John Doe"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias distinctio molestiae magnam, sapiente laudantium non.
                </p>
                <a href="#!">
                  <Twitter className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Facebook className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Linkedin className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Instagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="Steve Smith"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Steve Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias distinctio molestiae magnam, sapiente laudantium non.
                </p>
                <a href="#!">
                  <Twitter className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Facebook className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Linkedin className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Instagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="Sara Smith"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Sara Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias distinctio molestiae magnam, sapiente laudantium non.
                </p>
                <a href="#!">
                  <Twitter className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Facebook className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Linkedin className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Instagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="Jane Doe"
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Jane Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias distinctio molestiae magnam, sapiente laudantium non.
                </p>
                <a href="#!">
                  <Twitter className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Facebook className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Linkedin className="text-dark mx-1" />
                </a>
                <a href="#!">
                  <Instagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
