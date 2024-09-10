import { useState } from "react";

export const ButtonCountTen = () => {
  const [contar, setContar] = useState(0);

  return (
    <>
      <button onClick={() => setContar((contar) => contar + 10)}>
        Count2 is {contar}
      </button>
    </>
  );
};
