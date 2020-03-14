import React from "react";
import { useFirstPageRedirect } from "ignite";

export default function Custom404(props) {
  const page = useFirstPageRedirect();

  return page ? null : <div>Oops, looks like we can't find that page!</div>;
}