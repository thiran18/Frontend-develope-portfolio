'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skills } from '@/lib/constants';
import { staggerContainer, fadeIn } from '@/lib/motion';

export function SkillsPreview() {
	// Filter top skills from each category (3 per category)
		// Thiran's personalized skill data
	const technicalSkills = [
		{ name: 'C', level: 9 },
		{ name: 'Java', level: 8 },
		{ name: 'C++', level: 8 },
		{ name: 'SQL', level: 7 },
		{ name: 'Arduino', level: 8 },
		{ name: 'Biomedical Instrumentation', level: 8 },
	];

	const softwareSkills = [
		{ name: 'GitHub', level: 9 },
		{ name: 'Visual Studio Code', level: 9 },
		{ name: 'Figma', level: 8 },
		{ name: 'MySQL Workbench', level: 8 },
	];

	const softSkills = [
		{ name: 'Leadership', level: 9 },
		{ name: 'Cognitive Flexibility', level: 8 },
		{ name: 'Team Collaboration', level: 8 },
		{ name: 'Problem Solving', level: 9 },
	];

	// Select top 3 from each
	const topTechnicalSkills = technicalSkills.slice(0, 3);
	const topSoftwareSkills = softwareSkills.slice(0, 3);
	const topSoftSkills = softSkills.slice(0, 3);

	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="Technical Skills"
					description="Key competencies and technical expertise that I've developed throughout my biomedical and IoT engineering journey."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
				>
					{/* Technical Skills */}
					<motion.div variants={fadeIn('up', 0.1)} className="space-y-6">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">Programming & Domain</h3>
								<div className="space-y-4">
									{topTechnicalSkills.map((skill, index) => (
										<div key={index}>
											<div className="flex justify-between mb-1">
												<span>{skill.name}</span>
												<span className="text-muted-foreground">{skill.level}/10</span>
											</div>
											<div className="skill-bar bg-muted rounded-full h-2">
												<motion.div
													className="skill-progress bg-primary h-2 rounded-full"
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level * 10}%` }}
													viewport={{ once: true }}
													transition={{ duration: 1, delay: index * 0.1 }}
												/>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Software Tools */}
					<motion.div variants={fadeIn('up', 0.2)} className="space-y-6">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">Software Proficiency</h3>
								<div className="space-y-4">
									{topSoftwareSkills.map((skill, index) => (
										<div key={index}>
											<div className="flex justify-between mb-1">
												<span>{skill.name}</span>
												<span className="text-muted-foreground">{skill.level}/10</span>
											</div>
											<div className="skill-bar bg-muted rounded-full h-2">
												<motion.div
													className="skill-progress bg-primary h-2 rounded-full"
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level * 10}%` }}
													viewport={{ once: true }}
													transition={{ duration: 1, delay: index * 0.1 }}
												/>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Soft Skills */}
					<motion.div variants={fadeIn('up', 0.3)} className="space-y-6">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-4">Soft Skills</h3>
								<div className="space-y-4">
									{topSoftSkills.map((skill, index) => (
										<div key={index}>
											<div className="flex justify-between mb-1">
												<span>{skill.name}</span>
												<span className="text-muted-foreground">{skill.level}/10</span>
											</div>
											<div className="skill-bar bg-muted rounded-full h-2">
												<motion.div
													className="skill-progress bg-primary h-2 rounded-full"
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level * 10}%` }}
													viewport={{ once: true }}
													transition={{ duration: 1, delay: index * 0.1 }}
												/>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>

				{/* View All Button */}
				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/skills">
							View All Skills <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}