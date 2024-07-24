import React from "react";

const DashboardLauout = ({children} : {children : React.ReactNode}) => {
    return ( 
        <main className="flex flex-col gap-y-4">
            <nav className="bg-black text-white">
                This is a shared navbar for dashborad
            </nav>
            {children}
        </main>
     );
}
 
export default DashboardLauout;