import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img src="logo.png" alt="Logo" height="28" className="d-inline-block align-text-top" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/"><i className="bi bi-house"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about"><i className="bi bi-people-fill"></i>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/service"><i className="bi bi-basket3"></i>Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact"><i className="bi bi-person-vcard"></i>Contact</Link>
            </li>
          </ul>

          <form className="d-flex">
            <button className="btn btn-outline-primary me-2" type="button"><i className="bi bi-file-lock"></i>Sign Up</button>
            <button className="btn btn-outline-primary" type="button"><i className="bi bi-file-lock-fill"></i>Sign In</button>
          </form>
        </div>
      </div>
    </nav>
  );
}