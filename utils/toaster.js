import React from "react";
import { toast } from "react-toastify";

export function success(message) {
	toast.success(message, {
		position: toast.POSITION.TOP_RIGHT,
		autoClose: 1500,
	});
}

export function error(message) {
	toast.error(message, {
		position: toast.POSITION.TOP_RIGHT, // Bildirimin pozisyonunu ayarlayabilirsiniz.
		autoClose: 1500,
	});
}

export default { success, error };
