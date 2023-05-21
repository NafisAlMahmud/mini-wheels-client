import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Mini Wheels`;
  }, [title]);
};
export default useTitle;
