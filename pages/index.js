import React, { useStat, useEffect } from "react";

import PageHoc from "@/components/providersHoc/pageHOC";
import Mainpage from "@/components/home";

const Home = () => <Mainpage />;
export default () => PageHoc(Home, "Home");
