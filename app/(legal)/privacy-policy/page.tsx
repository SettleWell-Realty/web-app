import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Brand } from "@/components/ui/brand";
import { Bell, Lock, Shield, Users } from "lucide-react";

export default function PrivacyPolicy() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="max-w-3xl mx-auto space-y-12">
						{/* Header Section */}
						<div className="space-y-4 border-b pb-8">
							<h1 className="text-4xl font-bold tracking-tight">
								Privacy Policy
							</h1>
							<p className="text-muted-foreground">
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</div>

						<section className="prose prose-slate dark:prose-invert max-w-none">
							{/* Introduction */}
							<div className="rounded-lg bg-muted/50 p-6 mb-12">
								<p className="text-lg leading-relaxed m-0">
									At {Brand.name}, we take your privacy seriously. This policy
									outlines how we collect, use, and protect your personal
									information.
								</p>
							</div>

							<h2>1. Information Collection</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
								<div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
									<h3 className="font-semibold mb-2">Personal Details</h3>
									<ul className="text-sm text-muted-foreground list-none p-0 m-0">
										<li>Contact information</li>
										<li>Property preferences</li>
										<li>Financial records</li>
									</ul>
								</div>
								<div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
									<h3 className="font-semibold mb-2">Usage Data</h3>
									<ul className="text-sm text-muted-foreground list-none p-0 m-0">
										<li>Website analytics</li>
										<li>Communication history</li>
										<li>Service interactions</li>
									</ul>
								</div>
							</div>

							<h2>2. Data Protection Measures</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
								<div className="flex flex-col items-center text-center p-4">
									<Shield className="h-8 w-8 text-brand mb-2" />
									<p className="text-sm font-medium">Secure Storage</p>
								</div>
								<div className="flex flex-col items-center text-center p-4">
									<Lock className="h-8 w-8 text-brand mb-2" />
									<p className="text-sm font-medium">Encryption</p>
								</div>
								<div className="flex flex-col items-center text-center p-4">
									<Users className="h-8 w-8 text-brand mb-2" />
									<p className="text-sm font-medium">Access Control</p>
								</div>
								<div className="flex flex-col items-center text-center p-4">
									<Bell className="h-8 w-8 text-brand mb-2" />
									<p className="text-sm font-medium">Monitoring</p>
								</div>
							</div>

							<h2>3. Information Usage</h2>
							<p>
								We use your information to provide and improve our real estate
								and property management services, process transactions, and
								communicate with you about your property needs.
							</p>

							<h2>4. Information Sharing</h2>
							<div className="rounded-lg border p-4 my-6">
								<p className="font-medium mb-3">
									We share information only with:
								</p>
								<ul className="grid gap-2 text-sm text-muted-foreground">
									<li>Property owners and tenants (as necessary)</li>
									<li>Authorized service providers</li>
									<li>Legal and regulatory authorities</li>
								</ul>
							</div>

							<h2>5. Your Privacy Rights</h2>
							<p>
								You have the right to access, correct, or delete your personal
								information. Contact us to exercise these rights.
							</p>

							<h2>6. Cookies and Tracking</h2>
							<p>
								Our website uses cookies and similar technologies to enhance
								user experience and analyze website traffic.
							</p>

							{/* Contact Section */}
							<div className="mt-12 rounded-lg bg-gradient-to-br from-brand to-brand/90 text-brand-foreground p-8">
								<h2 className="text-xl font-semibold mb-4 text-brand-foreground">
									Privacy Inquiries
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<p className="font-medium">Privacy Officer</p>
										<p className="mt-2 text-brand-foreground/90">
											{Brand.name}
											<br />
											{Brand.location.street}
											<br />
											{Brand.location.suite}
											<br />
											{Brand.location.city}, {Brand.location.state}{" "}
											{Brand.location.zip}
										</p>
									</div>
									<div>
										<div className="space-y-2">
											<p>
												<span className="text-brand-foreground/75">
													Phone:{" "}
												</span>
												{Brand.phone}
											</p>
											<p>
												<span className="text-brand-foreground/75">
													Email:{" "}
												</span>
												{Brand.email}
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
