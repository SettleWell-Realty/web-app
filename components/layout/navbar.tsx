import { Brand } from "@/components/ui/brand";
import { ContactDialog } from "@/components/ui/contact-form";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="flex h-16 items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-2.5 transition-colors group"
					>
						<div className="rounded-md bg-primary p-1.5 transition-colors group-hover:bg-primary/90">
							<Brand.icon className="h-5 w-5 text-primary-foreground" />
						</div>
						<span className="font-medium text-lg">{Brand.name}</span>
					</Link>

					<div className="flex items-center gap-4">
						<ContactDialog />
						<ModeToggle />
					</div>
				</nav>
			</div>
		</header>
	);
}
