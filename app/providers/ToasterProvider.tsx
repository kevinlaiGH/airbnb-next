"use client";
// Reference: https://beta.nextjs.org/docs/rendering/server-and-client-components
// Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.
// toaster is 3rd party lib that is not from nextjs, a client component that we want to use from the app
// it needs to have at least one client-parent
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
