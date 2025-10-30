'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Languages } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
    	const technicalSkills = [
		{ name: 'Embedded Systems (Arduino, ESP32)', level: 9 },
		{ name: 'IoT Device Integration', level: 8 },
		{ name: 'Biomedical Instrumentation', level: 8 },
		{ name: 'Signal Processing & Sensors', level: 7 },
		{ name: 'Microcontrollers & Circuits', level: 8 },
		{ name: 'PCB Design Basics', level: 6 },
	];
	const softwareSkills = [
		{ name: 'C / C++', level: 8 },
		{ name: 'Java', level: 7 },
		{ name: 'Python (Basic)', level: 6 },
		{ name: 'SQL / MySQL Workbench', level: 8 },
		{ name: 'MATLAB', level: 7 },
		{ name: 'Git / GitHub', level: 8 },
	];

	const softSkills = [
		{ name: 'Problem Solving', level: 9 },
		{ name: 'Team Collaboration', level: 9 },
		{ name: 'Analytical Thinking', level: 8 },
		{ name: 'Leadership', level: 8 },
		{ name: 'Time Management', level: 8 },
		{ name: 'Adaptability', level: 9 },
	];

	const languageSkills = [
		{ name: 'English', level: 9 },
		{ name: 'Tamil', level: 10 },
	];
	const SkillCategory = ({
		title,
		skills,
		icon,
		delay
	}: {
		title: string;
		skills: typeof technicalSkills;
		icon: React.ReactNode;
		delay: number;
	}) => (
		<motion.div variants={fadeIn('up', delay)}>
			<Card className="card-gradient">
				<CardContent className="p-6">
					<div className="flex items-center gap-2 mb-6">
						{icon}
						<h2 className="text-2xl font-semibold">{title}</h2>
					</div>
					<div className="space-y-4">
						{skills.map((skill, index) => (
							<div key={index}>
								<div className="flex justify-between mb-1">
									<span>{skill.name}</span>
									<span className="text-muted-foreground">{skill.level}/10</span>
								</div>
								<div className="skill-bar">
									<motion.div
										className="skill-progress"
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
	);

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A comprehensive overview of my technical abilities, software proficiency,
							soft skills, and language capabilities.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<SkillCategory
							title="Technical Skills"
							skills={technicalSkills}
							icon={<Cpu className="h-6 w-6 text-primary" />}
							delay={0.3}
						/>
						<SkillCategory
							title="Software Proficiency"
							skills={softwareSkills}
							icon={<Code2 className="h-6 w-6 text-secondary" />}
							delay={0.4}
						/>
						<SkillCategory
							title="Soft Skills"
							skills={softSkills}
							icon={<Brain className="h-6 w-6 text-accent" />}
							delay={0.5}
						/>
						<SkillCategory
							title="Languages"
							skills={languageSkills}
							icon={<Languages className="h-6 w-6 text-primary" />}
							delay={0.6}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}