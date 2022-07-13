import axios from "axios";
import { BACKEND_URL } from "../../helpers/env";

export const getListUser = (token) => {
	return {
		type: "GET_LIST_USER",
		payload: axios({
			url: `${BACKEND_URL}/users?limit=20`,
			method: "GET",
			headers: { token },
		}),
	};
};
