import { Navigate } from 'react-router-dom';

interface Props {
    isAuthenticate: boolean;
    children: JSX.Element;
}

export const PrivateRoute = ({ isAuthenticate, children }: Props) => {
    if (isAuthenticate) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
};