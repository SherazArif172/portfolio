"use client"

import * as React from "react"
import { Github } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ConnectSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      id="connect"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10 text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-gray-900 dark:text-white font-mono">{"<"}</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
            <span className="text-gray-900 dark:text-white font-mono">{"/>"}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out my work on GitHub and let's connect there!
          </p>
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          className="flex flex-col items-center justify-center"
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-12 max-w-md w-full shadow-lg dark:shadow-none">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Github className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Explore my repositories, projects, and contributions on GitHub.
              </p>
              <Link
                href="https://github.com/SherazArif172/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                Visit My GitHub
              </Link>
                </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
