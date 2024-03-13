import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Abhishek Patel",
        email: "abhishek@gmail.com"
    }
});

export default UserContext;