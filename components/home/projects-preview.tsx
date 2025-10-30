'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	// Only show the first 3 projects in the preview
    const projects = [
		{
			title: 'Fetal Monitoring System (EDII Hackathon)',
			description:
				'A non-invasive, low-cost fetal movement monitoring system using ESP32 and MPU6050 to help pregnant mothers track fetal activity at home, reducing frequent clinical visits.',
			tags: ['IoT', 'ESP32', 'Arduino IDE', 'Healthcare', 'Sensor Integration'],
			image: '/projects/fetal_monitoring.jpg',
			link: '', // optional demo link
			repo: 'https://github.com/thiran18/Fetal-Monitoring-System', // replace if you have
		},
		{
			title: 'Paralysis Patients Healthcare Monitoring',
			description:
				'An IoT-based healthcare system for paralysis patients using accelerometer and gyroscope-based motion recognition with wireless communication and caregiver alerts.',
			tags: ['IoT', 'Arduino', 'ESP32', 'Real-Time Monitoring', 'Healthcare'],
			image: '/projects/paralysis_monitoring.jpg',
			link: '',
			repo: 'https://github.com/thiran18/Paralysis-Healthcare-Monitoring',
		},
		{
			title: 'Home Automation System',
			description:
				'An IoT-based home automation system using ESP32-CAM, Firebase, and MIT App Inventor to enable remote appliance control, video monitoring, and keypad-based access for home security.',
			tags: ['IoT', 'ESP32-CAM', 'Firebase', 'Automation', 'MIT App Inventor'],
			image: '/projects/home_automation.jpg',
			link: '',
			repo: 'https://github.com/thiran18/Home-Automation-System',
		},
	];

		return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Featured Projects"
					description="Explore some of my recent biomedical and IoT-based engineering projects, merging innovation with healthcare and automation."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="flex"
						>
							<Card className="flex flex-col h-full card-gradient hover:shadow-xl transition-all duration-300">
								{/* Project Image */}
								<div className="relative h-48 w-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover rounded-t-lg"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>

								{/* Project Details */}
								<CardContent className="flex-grow p-6">
									<h3 className="font-bold text-xl mb-2">{project.title}</h3>
									<p className="text-muted-foreground mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, tagIndex) => (
											<Badge key={tagIndex} variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>

								{/* Footer Buttons */}
								<CardFooter className="p-6 pt-0 gap-2">
									{project.link && (
										<Button size="sm" variant="outline" asChild>
											<Link href={project.link} target="_blank" rel="noreferrer">
												<ExternalLink className="h-4 w-4 mr-2" />
												Demo
											</Link>
										</Button>
									)}
									{project.repo && (
										<Button size="sm" variant="outline" asChild>
											<Link href={project.repo} target="_blank" rel="noreferrer">
												<Github className="h-4 w-4 mr-2" />
												Repo
											</Link>
										</Button>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>

				{/* View All Projects Button */}
				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/projects">
							View All Projects <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}