import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Register</h5>
        </div>
        <nav className="card-footer">
          <Link to="/auth/login" className="card-link">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </nav>
      </div>
    </>
  )
}
