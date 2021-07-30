import { ArrowUpCircle } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-light text-center position-relative">
      <div className="container">
        <p className="lead">
          Copyright &copy; {new Date().getFullYear()} Frontend Bootcamp
        </p>
        <a href="#!" className="position-absolute bottom-0 end-0 p-5">
          <ArrowUpCircle className="h1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
