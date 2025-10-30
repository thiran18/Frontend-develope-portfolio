'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I'm <strong>Thiran V</strong>, a passionate <strong>Biomedical Engineer</strong>  student with a focus on innovation and problem-solving.
							My academic journey has equipped me with strong technical skills and a deep understanding
							of engineering principles.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Throughout my academic career, I've been involved in various projects that have
								helped me develop practical skills and theoretical knowledge. I believe in
								continuous learning and staying updated with the latest technological advancements.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/thiranimage.png"
							alt="Thiran V - Biomedical Engineer portrait"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									<strong>B.E Biomedical Engineering</strong><br />
									Bannari Amman Institute of Technology (2022–2026)<br />
									CGPA: 7.81
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									C, C++, Java, SQL, Arduino, ESP32, MATLAB, MySQL Workbench, Git, Figma
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.4)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Projects</h3>
								<p className="text-muted-foreground">
									<ul className="list-disc pl-4">
										<li>Fetal Monitoring System (ESP32 + MPU6050)</li>
										<li>Paralysis Patient Monitoring</li>
										<li>Smart Home Automation (ESP32-CAM)</li>
									</ul>
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.5)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Achievements</h3>
								<p className="text-muted-foreground">
									Finalist — BIT Hack 2023 (Home Automation System)<br />
									Runner-up — Paralysis Patient Monitoring Presentation<br />
									HackerRank Java (Intermediate)<br />
									MATLAB Onramp Certification
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}