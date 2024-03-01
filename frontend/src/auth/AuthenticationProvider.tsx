import { Auth0Provider } from '@auth0/auth0-react';

type Props = {
    children: React.ReactNode
}

function AuthenticationProvider({ children }: Props) {
    return (
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
            }}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthenticationProvider