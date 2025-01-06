import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/ui/hero";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">
				<Hero />
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
					{/* Additional content will go here later */}
				</div>
			</main>
		</div>
	);
}
