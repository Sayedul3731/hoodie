"use client";

import { useEffect, useState } from "react";

const Bar = ({ children }: { children?: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <div className="bg-[#d00000] py-5 block lg:hidden">{children}</div>;
};

export default Bar;
