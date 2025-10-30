'use client';

import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
		// Personalized certificates list
	const certificates = [
		{
			title: 'Java (Intermediate)',
			issuer: 'HackerRank',
			date: '2024',
			id: 'HR-JAVA-INT-001',
			url: 'https://www.hackerrank.com/certificates', // replace with your real URL
			pdf: '/certificates/java_intermediate.pdf', // optional local PDF path
		},
		{
			title: 'MATLAB Onramp',
			issuer: 'MathWorks',
			date: '2024',
			id: '',
			url: 'https://matlabacademy.mathworks.com/', // replace with your certificate URL if available
			pdf: '/certificates/matlab_onramp.pdf',
		},
		{
			title: 'Finalist - BIT Hackathon 2023',
			issuer: 'Bannari Amman Institute of Technology',
			date: '2023',
			id: '',
			url: '',
			pdf: '/certificates/bit_hackathon_finalist.pdf',
		},
		{
			title: 'Runner-Up - Healthcare Monitoring Presentation',
			issuer: 'Bannari Amman Institute of Technology',
			date: '2023',
			id: '',
			url: '',
			pdf: '/certificates/runnerup_presentation.pdf',
		},
	];
		return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					{/* Header */}
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Certificates & Achievements</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Certifications and accomplishments that highlight my continuous learning
							and excellence in Biomedical Engineering and IoT development.
						</p>
					</motion.div>

					{/* Certificates Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="card-gradient shadow-lg hover:shadow-xl transition-all duration-300">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<Award className="h-8 w-8 text-primary shrink-0" />
											<div>
												<h2 className="text-xl font-semibold mb-1">{cert.title}</h2>
												<p className="text-muted-foreground">{cert.issuer}</p>
												<p className="text-sm text-muted-foreground mt-2">
													Issued: {cert.date}
												</p>
												{cert.id && (
													<p className="text-sm text-muted-foreground">
														Certificate ID: {cert.id}
													</p>
												)}
											</div>
										</div>
									</CardContent>
									<CardFooter className="p-6 pt-0 flex gap-2">
										{cert.url && (
											<Button size="sm" variant="outline" asChild>
												<a href={cert.url} target="_blank" rel="noreferrer">
													<ExternalLink className="h-4 w-4 mr-2" />
													Verify
												</a>
											</Button>
										)}
										{cert.pdf && (
											<Button size="sm" variant="outline" asChild>
												<a href={cert.pdf} download>
													<FileDown className="h-4 w-4 mr-2" />
													Download
												</a>
											</Button>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}