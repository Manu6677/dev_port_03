"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Application Developer",
    company: "Rimes",
    period: "May 2024 - Present",
    responsibilities: [
      "Developed scalable backend for IRains, an inter-governmental project, managing India’s district-level rainfall data, optimizing structure to reduce load time by 2 seconds.",
      "Made the filter component reuseable, helped team to increase productivity",
      "Secured the API’s which was exposed and worked on the securing User credentials by JWT.",
    ],
    skills: ["Next.js", "ReactJs", "JavaScript", "TailwindCSS", "Angular"],
  },
  {
    title: "Software Engineer",
    company: "Excellence",
    period: "Oct 2023 – May 2025",
    responsibilities: [
      "Made the resusable components so application load time decreases by 3 seconds and passed the google web vitals to have better SEO.",
      "Through reusable components send data from frontend to backend (nodejs) for storing in databse (mySql).",
      "Single handedly made a frontend for kestra project according to the clients requirements.",
    ],
    skills: ["Vuejs", "JavaScript", "UI/UX", "Responsive Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
