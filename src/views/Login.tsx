import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
        </div>
        <nav className="card-footer">
          <Link to="/auth/register" className="card-link">
            ¿No tienes una cuenta? Regístrate
          </Link>
        </nav>
      </div>
    </>
  )
}
