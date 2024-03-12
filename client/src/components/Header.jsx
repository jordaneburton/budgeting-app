import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


function Header({ header }) {
  return (
    <>
      <div>
        <h1 className='w100 bg-secondary z-2 ps-2 fw-bold px-md-5 my-0 d-flex flex-wrap align-content-center text-start text-white'>
          {header}
        </h1>
        <div>
            <>
              <Link className="btn btn-lg btn-info m-2" to="login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="signup">
                Signup
              </Link>
            </>
        </div>
      </div>
    </>
  );
}

export default Header