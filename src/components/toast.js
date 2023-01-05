import { toast } from "react-toastify";

import './toast.css'

const notify = (type, text) => {
  if (type === "success") {
    toast.success(text , {
        theme :"colored", 
        className : "test-1"
    });
  } else {
    toast.error(text , {
        theme : "colored",
        className : "test"
    });
  }
};

export default notify;
