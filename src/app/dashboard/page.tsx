import { signOut } from "next-auth/react";
import { auth } from "../../../auth";

const DashboardPage = async () => {
    const session = await auth();
    console.log(session);
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}

export default DashboardPage;
