import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Button onClick={async () => { loginWithRedirect() }} variant='ghost' className='text-md text-gray-600 hover:text-orange-500 hover:bg-white'>Log In</Button>
    </div>
  )
}

export default MainNav