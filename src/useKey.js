import { useEffect } from "react";
export function useKey(key, onCloseMovie) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          onCloseMovie();
          // console.log("CLOSING");
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie, key]
  );
}
