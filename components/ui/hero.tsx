"use client";

import { Brand } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ui/contact-form";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";

interface AvatarProps {
	src: string;
	alt: string;
	index: number;
}

const Avatar = ({ src, alt, index }: AvatarProps) => (
	<div
		className={cn(
			"relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-background",
			index > 0 && "-ml-3",
		)}
	>
		<Image src={src} alt={alt} fill className="object-cover" sizes="40px" />
	</div>
);

const StarRating = () => (
	<div className="flex text-yellow-500">
		{Array.from({ length: 5 }).map((_, i) => (
			<Star key={crypto.randomUUID()} className="fill-current" size={20} />
		))}
	</div>
);

const testimonialAvatars = [
	{
		src: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
		alt: "Property Manager",
	},
	{
		src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
		alt: "Real Estate Agent",
	},
	{
		src: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
		alt: "Property Owner",
	},
	{
		src: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
		alt: "Client",
	},
] as const;

export function Hero() {
	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
			<div className="grid lg:grid-cols-[1fr,1.5fr] gap-5">
				{/* Content Card */}
				<div className="flex h-auto flex-col rounded-2xl bg-muted p-8">
					{/* Location Badge */}
					<div className="inline-flex">
						<div className="rounded-full bg-secondary px-3">
							<span className="text-sm font-medium">
								{Brand.location.cityState}
							</span>
						</div>
					</div>

					{/* Main Content */}
					<div className="mt-8 space-y-4">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							{Brand.tagline}
						</h1>
						<p className="text-lg text-muted-foreground">
							Local experts providing personalized property management
							solutions. Every property is unique, which is why you'll always
							work with local members dedicated to your success.
						</p>
					</div>

					{/* Call to Action */}
					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<ContactDialog>
							<Button size="lg" className="font-medium">
								Speak with an Expert
							</Button>
						</ContactDialog>
						<Button size="lg" variant="outline">
							View Our Services
						</Button>
					</div>

					{/* Social Proof */}
					<div className="mt-8 border-t pt-6">
						<div className="flex items-center gap-4">
							<div className="flex">
								{testimonialAvatars.map((avatar, i) => (
									<Avatar key={avatar.alt} {...avatar} index={i} />
								))}
							</div>
							<StarRating />
						</div>
						<p className="mt-3 text-sm text-muted-foreground">
							Trusted by property owners across {Brand.location.cityState}
						</p>
					</div>
				</div>

				{/* Image Section */}
				<div className="relative overflow-hidden rounded-2xl">
					<Image
						src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
						alt="Modern apartment building"
						className="object-cover"
						fill
						sizes="(max-width: 768px) 100vw, 60vw"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
				</div>
			</div>
		</section>
	);
}