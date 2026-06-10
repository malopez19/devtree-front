import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import ErrorMessage from "../components/ErrorMessage";
import type { RegisterData } from "../types";
import api from "../config/axios";

export default function Register() {

	const initialValues =  {
		name: "",
		email: "",
		handle: "",
		password: "",
		password_confirmation: ""
	}

	const { register, getValues, handleSubmit, formState: { errors }, reset } = useForm<RegisterData>({ defaultValues: initialValues });

	const handleRegister = async (dataForm: RegisterData) => {
		try {
			const { data } = await api.post(`/auth/register`, dataForm);
			toast.success(data.message);
			reset();
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				toast.error(error.response.data.message || "Error al crear la cuenta");
			}
		}
	}

	return (
		<>
			<h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>
			<form
				onSubmit={handleSubmit(handleRegister)}
				className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
			>
				<div className="grid grid-cols-1 space-y-3">
					<label htmlFor="name" className="text-2xl text-slate-500">
						Nombre
					</label>
					<input
						id="name"
						type="text"
						placeholder="Tu Nombre"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{...register("name", { required: "El nombre es requerido" })}
					/>
          			{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
				</div>
				<div className="grid grid-cols-1 space-y-3">
					<label htmlFor="email" className="text-2xl text-slate-500">
						Correo Electrónico
					</label>
					<input
						id="email"
						type="email"
						placeholder="Correo Electrónico"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{ ...register("email", { required: "El correo es requerido", 
							pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } }) }
					/>
          			{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
				</div>
				<div className="grid grid-cols-1 space-y-3">
					<label htmlFor="handle" className="text-2xl text-slate-500">
						Handle
					</label>
					<input
						id="handle"
						type="text"
						placeholder="Nombre de usuario: sin espacios"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{ ...register("handle", { required: "El handle es requerido" }) }
					/>
          			{errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
				</div>
				<div className="grid grid-cols-1 space-y-3">
					<label htmlFor="password" className="text-2xl text-slate-500">
						Contraseña
					</label>
					<input
						id="password"
						type="password"
						placeholder="Contraseña de Registro"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{ ...register("password", { required: "El password es requerido", minLength: { value: 6, message: "El password debe tener al menos 6 caracteres" } }) }
					/>
          			{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
				</div>

				<div className="grid grid-cols-1 space-y-3">
					<label
						htmlFor="password_confirmation"
						className="text-2xl text-slate-500"
					>
						Repetir Contraseña
					</label>
					<input
						id="password_confirmation"
						type="password"
						placeholder="Repetir Contraseña"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{ ...register("password_confirmation", { required: "La confirmación del password es requerida", validate: (value) => value === getValues("password") || "Las contraseñas no coinciden" }) }
					/>
          			{errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
				</div>

				<input
					type="submit"
					className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
					value="Crear Cuenta"
				/>
			</form>
			<nav className="mt-10">
				<Link to="/auth/login" className="text-center text-white text-lg block">
					¿Ya tienes una cuenta? Inicia sesión
				</Link>
			</nav>
		</>
	);
}
