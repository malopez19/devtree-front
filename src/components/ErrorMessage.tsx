
export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="bg-red-50 text-red-500 p-3 uppercase text-sm text-center font-bold">{children}</p>
  )
}
