import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - NatureGraphy`;
  }, [title]);
};

export default useTitle;
