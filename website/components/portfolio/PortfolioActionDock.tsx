import {MailIcon} from 'lucide-react';
import FacebookIcon from '../ui/icons/FacebookIcon';
import GithubIcon from '../ui/icons/GithubIcon';
import {DossierActionDock, DossierActionItem} from './Dossier';
import LinkedInIcon from '../ui/icons/LinkedInIcon';

const ACTIONS: DossierActionItem[] = [
	{
		id: 'github',
		code: '01',
		label: 'GitHub Profile',
		command: 'open github.com/stefankornel',
		href: 'https://github.com/skornel02',
		hoverSelector: "group-has-[[data-dock-id='github']:is(:hover,:focus-visible)]/dock:inline",
		icon: <GithubIcon className="size-5 fill-current" />,
	},
	{
		id: 'linkedin',
		code: '02',
		label: 'LinkedIn',
		command: 'open linkedin.com/in/stefankornel',
		href: 'https://linkedin.com/in/skornel02',
		hoverSelector: "group-has-[[data-dock-id='linkedin']:is(:hover,:focus-visible)]/dock:inline",
		icon: <LinkedInIcon className="size-5 fill-current" />,
	},
	{
		id: 'facebook',
		code: '03',
		label: 'Facebook',
		command: 'open facebook.com/stefankornel',
		href: 'https://www.facebook.com/stefankornel02',
		hoverSelector: "group-has-[[data-dock-id='facebook']:is(:hover,:focus-visible)]/dock:inline",
		icon: <FacebookIcon className="size-5 fill-current" />,
	},
	{
		id: 'email',
		code: '04',
		label: 'Send Email',
		command: 'send email...',
		href: 'https://aemail.com/Elgl',
		hoverSelector: "group-has-[[data-dock-id='email']:is(:hover,:focus-visible)]/dock:inline",
		icon: <MailIcon />,
	},
];

export function PortfolioActionDock() {
	return (
		<DossierActionDock
			actions={ACTIONS}
			ghostButton={{
				label: 'Open my posts',
				href: '/posts',
			}}
		/>
	);
}
