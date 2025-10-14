import { getServerSession } from "next-auth/next";
import React, { useStat, useEffect } from "react";

import PageHoc from "@/components/providersHoc/pageHOC";
import AdminComponent from "@/components/admin";

const Admin = () => <AdminComponent />;
export default () => PageHoc(Admin, "Admin", false);

export async function getServerSideProps(context) {
	return {
		props: {
			session: await getServerSession(context.req, context.res),
		},
	};
}
