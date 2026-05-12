import { useNavigate } from "@tanstack/react-router";

export function useHomeCardHelper() {
	const navigate = useNavigate();
	const onClickCard = (pathname: string, tenant: "vendor" | "membership") => {
		navigate({
			to: pathname,
			search: {
				tenant,
			},
		});
	};
	return {
		onClickCard,
	};
}
