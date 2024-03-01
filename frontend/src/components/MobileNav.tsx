import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const MobileNav = () => {
    const { loginWithRedirect } = useAuth0();
  return (
      <Sheet>
          <SheetTrigger>
              <Menu className='text-orange-500' />
          </SheetTrigger>
          <SheetContent className=' space-y-3'>
              <SheetTitle className='text-orange-500 '>Welcome to AyushEats.com</SheetTitle>
              <Separator />
              <div className='flex'>
                  <Button onClick={async ()=>{loginWithRedirect()}} className='flex-1 hover:bg-orange-500'>Log In</Button>

              </div>
          </SheetContent>
      </Sheet>
  )
}

export default MobileNav
