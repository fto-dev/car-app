import React, { useStat, useEffect } from "react";

import PageHoc from "@/components/providersHoc/pageHOC";
import LoginComponent from "@/components/login";

const Login = () => <LoginComponent />;
export default () => PageHoc(Login, "Login", false);
