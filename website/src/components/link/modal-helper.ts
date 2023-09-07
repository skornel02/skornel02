export const openModal = (modalId: string, fallbackUrl: string | undefined) => {
	const element = document.getElementById(modalId) as HTMLDialogElement | null;
	if (element === null) {
		if (fallbackUrl) {
			window.open(fallbackUrl, '_blank');
		}
		throw Error(`Element with id ${modalId} not found`);
	}

	if (typeof element.showModal !== 'function') {
		if (fallbackUrl) {
			window.open(fallbackUrl, '_blank');
		}
		throw Error(`Element with id ${modalId} does not have a showModal function`);
	}

	element.showModal();
};
