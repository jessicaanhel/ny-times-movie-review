import React, { useRef, useState, useEffect } from 'react';

const Context = React.createContext(null);

export function ModalProvider({children}: any) {
  const modalRef = useRef(null);
  const [context, setContext] = useState();
  
  useEffect(() => {
      setContext(modalRef.current)
  }, []);

  return (
    <div>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </div>
  )
}