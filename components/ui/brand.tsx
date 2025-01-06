import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import type { FC } from "react";

// Define strict types for our data structures
type CompanyInfo = {
	readonly name: string;
	readonly legalName: string;
	readonly tagline: string;
	readonly description: string;
	readonly founding: number;
	readonly domain: string;
	readonly email: string;
	readonly phone: string;
	readonly licenseNumber: string;
};

type LocationInfo = {
	readonly street: string;
	readonly suite: string;
	readonly city: string;
	readonly state: string;
	readonly zip: string;
	readonly country: string;
	readonly full: string;
	readonly cityState: string;
};

type SocialInfo = {
	readonly facebook: string;
	readonly instagram: string;
	readonly linkedin: string;
	readonly twitter: string;
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	titleId?: string;
}

export const BrandIcon: FC<IconProps> = ({
	className,
	titleId = "settlewell-icon",
	...props
}) => {
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
};

// Helper function to create social media URLs
const createSocialUrls = (companyName: string): SocialInfo => {
	const normalizedName = companyName.toLowerCase().replace(/\s/g, "");
	return {
		facebook: `https://facebook.com/${normalizedName}`,
		instagram: `https://instagram.com/${normalizedName}`,
		linkedin: `https://linkedin.com/company/${normalizedName}`,
		twitter: `https://twitter.com/${normalizedName}`,
	};
};

// Define company information
const company: CompanyInfo = {
	name: "SettleWell Realty",
	legalName: "SettleWell Realty LLC",
	tagline: "Full-Service Realty & Property Management",
	description:
		"Denver-based property management and real estate brokerage focused on delivering exceptional service and reliable property management solutions.",
	founding: 2024,
	domain: "settlewellrealty.com",
	email: "contact@settlewellrealty.com",
	phone: "(720) 555-0123", // TODO: Replace with actual phone number
	licenseNumber: "EC.XXXXX", // TODO: Replace with actual Colorado Real Estate License number
} as const;

// Define location information
const location: LocationInfo = {
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

const social = createSocialUrls(company.name);

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
		images: [
			{
				url: "/settlewell-realty-og.png",
				width: 1200,
				height: 630,
				alt: `${company.name} - ${company.tagline}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: company.name,
		description: company.description,
		creator: `@${company.name.toLowerCase().replace(/\s/g, "")}`,
		images: ["/settlewell-realty-og.png"],
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
