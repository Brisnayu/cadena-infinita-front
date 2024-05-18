import CompanyRegistrationForm from './CompanyRegistrationForm'
import AdminRegistrationForm from './AdminRegistrationForm'
import Button from '../../Atoms/Button'
import { Input } from 'postcss'

const Form = () => {
  return (
    <div className="p-4 font-poppins">
    <h1 className="text-5xl font-bold text-gray-800">Adopta un Junior!</h1>
    <p className="text-gray-600 mt-2">
      Página web de administración interna
    </p>
    <div className="bg-surfaceDim mt-8">
      <h2 className="text-3xl font-bold text-gray-800">Registro de Administradores</h2>
      <AdminRegistrationForm />
    </div>
    <div className="bg-surfaceDim mt-8">
      <h2 className="text-3xl font-bold text-gray-800">Registro de Empresas</h2>
      <CompanyRegistrationForm />
    </div>
    <Button text={"Hola"} bgColor="bg-purpleDark" />
    <Input
     placeholder="Escribe algo aquí..." 
   
     />
    
  </div>
  )
}

export default Form