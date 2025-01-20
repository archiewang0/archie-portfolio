import React from "react";
export default function Layout({children}:{children: React.ReactNode}){
    return <div className=" relative z-10 pt-40">{children}</div>
}