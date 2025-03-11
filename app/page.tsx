"use client"

import { useState } from "react"
import { ArrowRight, Code, Compass, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"
import { Toaster } from "@/components/ui/toaster"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AboutSection } from "@/components/about-section"
import { SparklingCursor } from "@/components/sparkling-cursor"
import { ContactForm } from "@/components/contact-form"
import { EnhancedFooter } from "@/components/enhanced-footer"

export default function Home() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <SparklingCursor />
      <Toaster />
      <QuoteForm open={quoteFormOpen} onOpenChange={setQuoteFormOpen} />
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />

      <Navigation onQuoteClick={() => setQuoteFormOpen(true)} onContactClick={() => setContactFormOpen(true)} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
          {/* Neon glow effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <ScrollAnimation animation="fadeUp">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                      Blending Creativity with Code
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      We craft digital experiences that captivate, engage, and convert. Your vision, our expertise.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      onClick={() => setQuoteFormOpen(true)}
                      className="group relative overflow-hidden rounded-lg px-4 py-2 transition-all duration-300 ease-out hover:bg-primary/90 border border-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    >
                      <span className="relative z-10">Get a Quote</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-primary/80 opacity-100 transition-all duration-300 ease-out group-hover:opacity-0"></span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></span>
                    </Button>
                    <Button
                      variant="outline"
                      className="group relative overflow-hidden rounded-lg border border-primary/20 bg-background px-4 py-2 transition-all duration-300 ease-out hover:border-primary/30 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      onClick={() => {
                        const servicesSection = document.querySelector("#services")
                        if (servicesSection) {
                          servicesSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      <span className="relative z-10">Explore Services</span>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeLeft" delay={0.3}>
                <div className="hidden lg:block">
                  <div className="relative h-full w-full overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 shadow-[0_0_25px_rgba(139,92,246,0.2)]">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                      <div className="flex h-full flex-col items-center justify-center space-y-4">
                        <div className="h-20 w-20 rounded-full bg-primary/10 p-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                          <Code className="h-full w-full text-primary" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold">Web Development</h3>
                          <p className="text-sm text-muted-foreground">
                            We build modern, responsive websites that look great on any device.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/80 to-background relative overflow-hidden"
        >
          {/* Neon glow effects */}
          <div className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollAnimation animation="fadeUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Our Projects
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We Want Your Website to Be Here
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((i) => (
                <ScrollAnimation key={i} animation="glow" delay={i * 0.2}>
                  <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                      <div className="flex h-full flex-col items-center justify-center space-y-4">
                        <div className="h-20 w-20 rounded-full bg-primary/10 p-4 transition-all duration-300 ease-out group-hover:bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                          <div className="h-full w-full rounded-full bg-background"></div>
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold">We Want Your Project to Be Here</h3>
                          <p className="text-sm text-muted-foreground">
                            Your amazing project could be featured in this space. Let's create something extraordinary
                            together.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fadeUp" delay={0.6}>
              <div className="flex justify-center">
                <Button
                  onClick={() => setQuoteFormOpen(true)}
                  className="group relative overflow-hidden rounded-lg px-4 py-2 transition-all duration-300 ease-out hover:bg-primary/90 border border-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-primary/80 opacity-100 transition-all duration-300 ease-out group-hover:opacity-0"></span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></span>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/90 to-background/80 relative overflow-hidden"
        >
          {/* Neon glow effects */}
          <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollAnimation animation="fadeRight">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
                      Our Services
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      We offer a comprehensive range of web development and design services to help your business
                      succeed online.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <div className="grid gap-6 sm:grid-cols-2">
                <ScrollAnimation animation="fadeUp" delay={0.2}>
                  <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                      <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 ease-out group-hover:bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                          <Code className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Web Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Custom websites built with the latest technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeUp" delay={0.3}>
                  <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                      <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 ease-out group-hover:bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                          <Compass className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">UI/UX Design</h3>
                        <p className="text-sm text-muted-foreground">
                          Intuitive interfaces that enhance user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeUp" delay={0.4}>
                  <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                      <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 ease-out group-hover:bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Consultation</h3>
                        <p className="text-sm text-muted-foreground">Expert advice on your digital strategy.</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeUp" delay={0.5}>
                  <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-1 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-background p-6">
                      <div className="flex flex-col space-y-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 ease-out group-hover:bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-primary"
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Custom Solutions</h3>
                        <p className="text-sm text-muted-foreground">Tailored development for your specific needs.</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background/80 via-background to-background relative overflow-hidden"
        >
          {/* Neon glow effects */}
          <div className="absolute bottom-1/3 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollAnimation animation="fadeUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                    Get in Touch
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ready to start your next project? Contact us today.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <div className="grid gap-4">
                    <Button
                      onClick={() => setContactFormOpen(true)}
                      className="group relative overflow-hidden rounded-lg px-4 py-2 transition-all duration-300 ease-out hover:bg-primary/90 border border-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-primary/80 opacity-100 transition-all duration-300 ease-out group-hover:opacity-0"></span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <EnhancedFooter onContactClick={() => setContactFormOpen(true)} />
    </div>
  )
}

