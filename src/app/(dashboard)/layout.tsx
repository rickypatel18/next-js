import Link from "next/link";
import React from "react";

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className="bg-black flex gap-5 items-center justify-center">
      <Link href="">profile</Link>
      <Link href="">setting</Link>
    </div>
      {children}
      <div className="bg-black">
        footer
      </div>
      
    </>
  );
};

export default layout;
