import { useNavigate } from "@tanstack/react-router";

export function useHomeCardHelper() {
	const navigate = useNavigate();
	const onClickCard = (pathname: string) => {
		navigate({
			to: pathname,
		});
	};
	return {
		onClickCard,
	};
}
