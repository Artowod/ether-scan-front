import { useEffect } from "react";
import * as dbRequests from "../../shared/services/Api.jsx";
import Notiflix from "notiflix";

const Header = () => {
  useEffect(() => {
    dbRequests.initializingApp().catch((err) => {
      Notiflix.Notify.warning(err.response, {
        timeout: 3000,
      });
    });
  }, []);

  useEffect(() => {
    return function stop() {
      dbRequests.stop();
    };
  });

  return (
    <>
      <header className="header">
        <span className="header__text-block">AppCo</span>
      </header>
    </>
  );
};
export default Header;
