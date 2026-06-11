import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import ErrorMessage from "../components/ErrorMessage";
import type { LoginData } from "../types";
import api from "../config/axios";

export default function Login() {
	const initialValues = {
		email: "",
		password: "",
	};

	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

	const handleLogin = async (dataForm : LoginData) => {
		try {
			const { data } = await api.post(`/auth/login`, dataForm);
			localStorage.setItem("AUTH_TOKEN", data);
			toast.success(data.message);
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				toast.error(error.response.data.message || "Error al crear la cuenta");
			}
		}
	};

	return (
		<>
			<h1 className="text-4xl text-white font-bold">Iniciar Sesión</h1>

			<form
				onSubmit={handleSubmit(handleLogin)}
				className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
				noValidate
			>
				<div className="grid grid-cols-1 space-y-3">
					<label htmlFor="email" className="text-2xl text-slate-500">
						Correo Electrónico
					</label>
					<input
						id="email"
						type="email"
						placeholder="Correo Electrónico"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{...register("email", {
							required: "El Correo Electrónico es obligatorio",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Correo Electrónico no válido",
							},
						})}
					/>
					{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
				</div>
				<div className="grid grid-cols-1 space-y-3">
					<label htmlFor="password" className="text-2xl text-slate-500">
						Contraseña
					</label>
					<input
						id="password"
						type="password"
						placeholder="Contraseña de inicio de sesión"
						className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
						{...register("password", {
							required: "La Contraseña es obligatoria",
						})}
					/>
					{errors.password && (
						<ErrorMessage>{errors.password.message}</ErrorMessage>
					)}
				</div>

				<input
					type="submit"
					className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
					value="Iniciar Sesión"
				/>
			</form>
			<nav className="mt-10">
				<Link
					to="/auth/register"
					className="text-center text-white text-lg block"
				>
					¿No tienes una cuenta? Regístrate
				</Link>
			</nav>
		</>
	);
}
