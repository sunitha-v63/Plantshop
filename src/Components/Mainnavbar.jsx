import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Image/logo.png"

function Mainnavbar() {
  return (
        <nav className="navbar navbar-expand-lg custom-padding py-2 shadow-sm text-white" style={{ backgroundColor: " #0D4F36" }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand d-flex flex-column align-items-center" to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="img-fluid"
                        style={{ maxHeight: "50px" }}
                    />
                    <span className="text-green fw-bold text-white" style={{ fontSize: "12px", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                        Indo Green
                    </span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list" style={{ color: "white" }}></i>
                </button>

                <div className="collapse navbar-collapse justify-content-center fs-4" id="navbarContent" style={{ fontWeight: '600' }}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <NavLink
                                className="nav-mainlink"
                                to="/"
                                style={{ color: "white" }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-mainlink" to="/" style={{ color: "white" }}>
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-mainlink" to="/" style={{ color: "white" }}>
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-mainlink" to="/" style={{ color: "white" }}>
                                Blog
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <div className="d-none d-lg-flex align-items-center gap-4 fs-4">
                    <Link className="nav-link" to="/">
                        <i className="bi bi-cart fs-4"></i>
                    </Link>
                    <Link className="nav-link" to="/">
                        <i className="bi bi-heart fs-4"></i>
                    </Link>
                    <Link className="nav-link" to="/">
                    <i className="bi bi-person fs-2"></i>
                    </Link>
                    {/* <button className="btn nav-link text-white" onClick={handleLogoutConfirm}>
                        <i className="bi bi-person fs-2"></i>
                    </button> */}


                </div>
                <div className="d-flex d-lg-none gap-3">
                    <button
                        className="btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarIcons"
                        aria-expanded="false"
                        aria-controls="navbarIcons">
                        <i className="bi bi-three-dots-vertical" style={{ color: "white" }}></i>
                    </button>
                    <div className="collapse" id="navbarIcons">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="bi bi-cart fs-5"></i> Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="bi bi-heart fs-5"></i> Wishlist
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                <i className="bi bi-person fs-2"></i> logout
                                </Link>
                                </li>
                            {/* </li>
                            <button className="btn nav-link text-white" onClick={handleLogoutConfirm}>
                                <i className="bi bi-person fs-2"></i> logout
                            </button> */}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Mainnavbar;



