import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	titleId?: string;
}

export function BrandIcon({
	className,
	titleId = "settlewell-icon",
	...props
}: IconProps) {
	return (
		<svg
			width="200"
			height="219"
			viewBox="0 0 200 219"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("text-primary-foreground", className)}
			aria-labelledby={titleId}
			{...props}
		>
			<title id={titleId}>SettleWell Realty Icon</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M159.422 106.056V53.2329L100.859 24.7311L42.3065 53.2324V106.056H20.0312V39.3315L26.2767 36.2617L96.0325 2.30817L100.911 0L105.722 2.32643L175.446 36.2616L181.691 39.3315V106.056H159.422ZM200 121.316H0V143.591H200V121.316ZM180.203 158.854H21.0312V181.129H180.203V158.854ZM158.915 196.39H43.0469V218.666H158.915V196.39Z"
				className="fill-current"
			/>
		</svg>
	);
}

const company = {
	name: "SettleWell Realty",
	legalName: "SettleWell Realty LLC",
	tagline: "Full-Service Realty & Property Management",
	description:
		"Denver-based property management and real estate brokerage focused on delivering exceptional service and reliable property management solutions.",
	founding: 2024,
	domain: "settlewellrealty.com",
	email: "contact@settlewellrealty.com",
	phone: "(720) 555-0123", // TODO: Replace with actual phone number
} as const;

const location = {
	street: "123 Market Street", // TODO: Replace with actual street address
	suite: "Suite 200", // TODO: Replace with actual suite number
	city: "Denver",
	state: "CO",
	zip: "80202", // TODO: Replace with actual zip code
	country: "United States",
	get full() {
		return `${this.street}, ${this.suite}, ${this.city}, ${this.state} ${this.zip}`;
	},
	get cityState() {
		return `${this.city}, ${this.state}`;
	},
} as const;

const social = {
	facebook: `https://facebook.com/${company.name.toLowerCase().replace(/\s/g, "")}`,
	instagram: `https://instagram.com/${company.name.toLowerCase().replace(/\s/g, "")}`,
	linkedin: `https://linkedin.com/company/${company.name.toLowerCase().replace(/\s/g, "")}`,
	twitter: `https://twitter.com/${company.name.toLowerCase().replace(/\s/g, "")}`,
} as const;

const brand = {
	colors: {
		primary: "hsl(var(--primary))",
		secondary: "hsl(var(--secondary))",
		accent: "hsl(var(--accent))",
	},
	logo: {
		favicon: "/favicon.ico",
	},
} as const;

export const metadata: Metadata = {
	title: {
		default: company.name,
		template: `%s | ${company.name}`,
	},
	description: company.description,
	keywords: [
		"Denver Property Management",
		"Real Estate",
		"Property Management",
		"Denver Real Estate",
		"Rental Property Management",
		"Property Manager Denver",
	],
	authors: [
		{
			name: company.name,
			url: `https://${company.domain}`,
		},
	],
	creator: company.name,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `https://${company.domain}`,
		title: company.name,
		description: company.description,
		siteName: company.name,
	},
	twitter: {
		card: "summary_large_image",
		title: company.name,
		description: company.description,
		creator: `@${company.name.toLowerCase().replace(/\s/g, "")}`,
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const Brand = {
	...company,
	location,
	social,
	brand,
	icon: BrandIcon,
} as const;

export const { name, legalName, tagline, description, email, phone } = company;
