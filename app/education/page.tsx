'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function EducationPage() {
	const education = [
		{
			degree: 'Bachelor of Engineering',
			field: 'Biomedical Engineering',
			institution: 'Bannari Amman Institute of Technology',
			location: 'Sathyamangalam, Tamil Nadu, India',
			startDate: '2022',
			endDate: '2026 (Expected)',
			gpa: '7.81 / 10',
			achievements: [
				'Finalist in BIT Hack 2023 for Home Automation System Project',
				'Runner-up in Paralysis Patient Monitoring Hackathon',
				'HackerRank Java (Intermediate) Certification',
				'Completed MATLAB Onramp Certification',
			],
		},
		{
			degree: 'Higher Secondary Education',
			field: 'Physics, Chemistry, Mathematics, Biology',
			institution: 'Government Higher Secondary School',
			location: 'Erode, Tamil Nadu, India',
			startDate: '2020',
			endDate: '2022',
			achievements: [
				'Secured Distinction in Board Examination',
				'Participated in District-level Science Exhibition on Smart Healthcare Devices',
			],
		},
		{
			degree: 'Secondary School Education',
			field: 'General Education',
			institution: 'Government High School',
			location: 'Erode, Tamil Nadu, India',
			startDate: '2019',
			endDate: '2020',
			achievements: [
				'Top 5% performer in school final exams',
				'Represented school in State-level Quiz Competition on Science & Tech',
			],
		},
	];
	
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						className="text-4xl font-bold mb-6"
					>
						Education
					</motion.h1>

					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						My educational path has built the foundation for my technical expertise and passion for
						innovation in biomedical engineering and IoT. Each stage strengthened my curiosity and drive
						to create impactful healthcare solutions.
					</motion.p>

					<div className="space-y-8">
						{education.map((edu, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										{/* Header */}
										<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
											<div>
												<h2 className="text-2xl font-semibold">{edu.degree}</h2>
												<p className="text-primary">{edu.field}</p>
											</div>
											{edu.gpa && (
												<p className="text-lg font-semibold mt-2 md:mt-0">
													CGPA: {edu.gpa}
												</p>
											)}
										</div>

										{/* Meta Info */}
										<div className="space-y-3">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2" />
												{edu.institution}, {edu.location}
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2" />
												{edu.startDate} – {edu.endDate}
											</div>
										</div>

										{/* Achievements */}
										<div className="mt-6">
											<h3 className="text-lg font-semibold mb-3">Achievements</h3>
											<ul className="space-y-2">
												{edu.achievements.map((achievement, i) => (
													<li key={i} className="flex items-start">
														<Award className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
														<span className="text-muted-foreground">{achievement}</span>
													</li>
												))}
											</ul>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}