import { useAuth } from "../../context/AuthProvaider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    console.log(user);

    if (!user) {
        window.location.assign("/login");
    }

    return children;
};
