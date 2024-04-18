import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>{err?.status} {err?.statusText}</h1>
        <h2>{err?.data}</h2>
    </div>
  )
}

export default ErrorComponent;