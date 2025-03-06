import { ERROR_URL } from "../utils/constants";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err= useRouteError();
    console.log(err);
  return (
    <div className="errorContainer">
        <div>{err.status + "    " + err.error.message}</div>
      <img src={ERROR_URL} />
    </div>
  );
};
export default Error; 