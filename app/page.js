"use client"
import Image from "next/image"
import Magnetic from "@/app/UI/Magnetic"
import { contentNoCode, contentAbout, contentHome } from "@/content"
import EMailForm from "@/app/UI/EmailFormNC"
import { ArrowDownIcon, CodeBracketIcon, CloudIcon, CpuChipIcon, CommandLineIcon } from "@heroicons/react/24/outline"
import TextCarousel from "@/app/UI/TextCarousel"
import Link from "next/link"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home() {
    useGSAP(() => {
        // Hero text animation
        gsap.from("#heroTitle", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })

        gsap.from("#heroSubtitle", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        })

        gsap.from("#heroIcons", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out"
        })

        // Scroll-triggered animations
        gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
            gsap.from(element, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            })
        })

        // Service cards stagger animation
        gsap.from(".service-card", {
            y: 60,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#services",
                start: "top 70%",
            }
        })

        // Timeline items animation
        gsap.from(".timeline-item", {
            x: -50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#experience",
                start: "top 70%",
            }
        })

        // Contact section slide up
        const tl = gsap.timeline()
        tl.to("#contact", {
            yPercent: -100,
            duration: 1
        })
        ScrollTrigger.create({
            animation: tl,
            trigger: "#content",
            start: "bottom bottom",
            scrub: true,
            pin: true,
        })
    })

    const iconClass = "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"

    return (
        <main className="bg-[#0a0a0f] overflow-x-hidden w-screen text-white">
            {/* Fixed Logo */}
            <Link href="#hero">
                <div className="z-40 fixed left-6 top-6 lg:left-10 lg:top-8 text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient">
                    MSH
                </div>
            </Link>

            {/* Fixed Nav */}
            <nav className="z-40 fixed right-6 top-6 lg:right-10 lg:top-8 hidden md:flex gap-6 text-sm lg:text-base text-gray-400">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center animated-gradient dot-pattern noise-overlay px-6 lg:px-20">
                <div className="max-w-5xl text-center z-10">
                    <p id="heroTitle" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gradient-warm">
                        {contentHome.heroIntro}
                    </p>
                    <p id="heroSubtitle" className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-gray-300">
                        Full-Stack Developer & Machine Learning Engineer
                    </p>

                    <div id="heroIcons" className="flex justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-16">
                        <Magnetic>
                            <div className="float">
                                <Image src="/images/python.png" alt="Python" width={438} height={480} className={iconClass} />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="float-delay-1">
                                <Image src="/images/js.png" alt="JavaScript" width={512} height={512} className={iconClass} />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="float-delay-2">
                                <Image src="/images/react.png" alt="React" width={640} height={557} className={iconClass} />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="float-delay-3">
                                <Image src="/images/tf.png" alt="TensorFlow" width={478} height={512} className={iconClass} />
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className="float-delay-4">
                                <Image src="/images/aws.webp" alt="AWS" width={478} height={512} className={iconClass} />
                            </div>
                        </Magnetic>
                    </div>
                </div>

                <TextCarousel
                    className="absolute left-0 bottom-32 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white/10"
                    text="Passionate | Self Motivated | Teamwork |"
                />

                <a href="#about" className="absolute bottom-10 scroll-indicator">
                    <ArrowDownIcon className="w-8 h-8 text-gray-400" />
                </a>
            </section>

            {/* Content Wrapper */}
            <section id="content" className="relative">
                {/* About Section */}
                <section id="about" className="min-h-screen w-full flex flex-col justify-center items-center px-6 lg:px-20 py-20 lg:py-32">
                    <div className="max-w-6xl w-full">
                        <p className="animate-on-scroll text-sm lg:text-base text-gray-500 uppercase tracking-widest mb-4">About Me</p>
                        <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient">
                            Building Digital Experiences That Matter
                        </h2>
                        <p className="animate-on-scroll text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed mb-16 max-w-4xl">
                            {contentAbout.aboutMe}
                        </p>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 animate-on-scroll">
                            <div className="glass-card rounded-2xl p-6 lg:p-8 col-span-2 glow-hover transition-all duration-300">
                                <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">3+</p>
                                <p className="text-gray-400">Years of Experience</p>
                            </div>
                            <div className="glass-card rounded-2xl p-6 lg:p-8 glow-hover transition-all duration-300">
                                <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">20+</p>
                                <p className="text-gray-400">Projects</p>
                            </div>
                            <div className="glass-card rounded-2xl p-6 lg:p-8 glow-hover transition-all duration-300">
                                <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">10+</p>
                                <p className="text-gray-400">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="min-h-screen w-full flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-32">
                    <div className="max-w-6xl w-full mx-auto">
                        <p className="animate-on-scroll text-sm lg:text-base text-gray-500 uppercase tracking-widest mb-4">Services</p>
                        <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-gradient">
                            What I Can Do For You
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            <ServiceCard
                                icon={<CodeBracketIcon className="w-8 h-8" />}
                                title={contentNoCode.webDev.title}
                                description={contentNoCode.webDev.explain}
                            />
                            <ServiceCard
                                icon={<CommandLineIcon className="w-8 h-8" />}
                                title={contentNoCode.sysDev.title}
                                description={contentNoCode.sysDev.explain}
                            />
                            <ServiceCard
                                icon={<CloudIcon className="w-8 h-8" />}
                                title={contentNoCode.cloud.title}
                                description={contentNoCode.cloud.explain}
                            />
                            <ServiceCard
                                icon={<CpuChipIcon className="w-8 h-8" />}
                                title={contentNoCode.ai.title}
                                description={contentNoCode.ai.explain}
                            />
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="min-h-screen w-full flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-32">
                    <div className="max-w-6xl w-full mx-auto">
                        <p className="animate-on-scroll text-sm lg:text-base text-gray-500 uppercase tracking-widest mb-4">Experience</p>
                        <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-gradient">
                            My Journey
                        </h2>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 timeline-line" />

                            <div className="space-y-12">
                                <TimelineItem
                                    title={contentNoCode.experience.FL.title}
                                    company={contentNoCode.experience.FL.at}
                                    years={contentNoCode.experience.FL.years}
                                    mode={contentNoCode.experience.FL.mode}
                                    isFirst
                                />
                                <TimelineItem
                                    title={contentNoCode.experience.AP.title}
                                    company={contentNoCode.experience.AP.at}
                                    years={contentNoCode.experience.AP.years}
                                    mode={contentNoCode.experience.AP.mode}
                                />
                                <TimelineItem
                                    title={contentNoCode.experience.SE.title}
                                    company={contentNoCode.experience.SE.at}
                                    years={contentNoCode.experience.SE.years}
                                    mode={contentNoCode.experience.SE.mode}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="flex justify-center items-center mt-20 scroll-indicator">
                        <p className="text-gray-500 mr-3">Scroll for contact</p>
                        <ArrowDownIcon className="w-5 h-5 text-gray-500" />
                    </div>
                </section>
            </section>

            {/* Contact Section */}
            <section id="contact" className="absolute bg-[#0a0a0f] rounded-t-3xl flex min-h-screen w-full justify-center items-center px-6 lg:px-20 py-20">
                <div className="max-w-4xl w-full">
                    <EMailForm />
                </div>
            </section>
        </main>
    )
}

function ServiceCard({ icon, title, description }) {
    return (
        <div className="service-card glass-card rounded-2xl p-8 lg:p-10 group hover:glow transition-all duration-300 hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    )
}

function TimelineItem({ title, company, years, mode, isFirst }) {
    return (
        <div className="timeline-item relative pl-8 md:pl-20">
            {/* Timeline dot */}
            <div className={`absolute left-0 md:left-8 w-4 h-4 rounded-full -translate-x-1/2 ${isFirst ? 'bg-gradient-to-r from-indigo-500 to-purple-600 glow' : 'bg-gray-600'}`} />

            <div className="glass-card rounded-2xl p-6 lg:p-8 hover:glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
                    <span className="text-indigo-400 font-medium">{years}</span>
                </div>
                <p className="text-gray-400">{company}</p>
                <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-white/5 text-gray-500">{mode}</span>
            </div>
        </div>
    )
}
