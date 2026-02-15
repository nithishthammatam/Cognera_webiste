import { useState, useEffect } from 'react'
import Link from 'next/link'
import DashboardMockup from './DashboardMockup'

export default function HeroAnimation() {
    const [step, setStep] = useState(0)

    // Timings for each step in ms
    useEffect(() => {
        // SUPER FAST LOOP Timings
        const timings = [
            1000, // Step 0: "With the aim..." (Very Fast)
            1000, // Step 1: "We build Intelligence..." (Very Fast)
            1500, // Step 2: "A Unified Behaviour..." (Quick reading)
            1000, // Step 3: "Unveiling Cognera" (Flash)
            1800, // Step 4: "Show Logo..."
            2200, // Step 5: "STAY SWITCH RETURN..."
            1500, // Step 6: "Turn Behaviour..."
            1500, // Step 7: "Privacy-First..."
            4000  // Step 8: "Final CTA" - Pause before restart
        ]

        let timer
        if (step < timings.length - 1) {
            // Normal progression
            timer = setTimeout(() => {
                setStep((s) => s + 1)
            }, timings[step])
        } else {
            // Loop back to start after the final pause
            timer = setTimeout(() => {
                setStep(0)
            }, timings[step])
        }
        return () => clearTimeout(timer)
    }, [step])

    // Flexible container that accepts animation class override
    const AnimContainer = ({ children, animation = "animate-fade-in-up", className = "" }) => (
        <div className={`${animation} w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 min-h-[400px] ${className}`}>
            {children}
        </div>
    )

    // Logo Component Pattern
    const Logo = ({ size = "normal" }) => {
        const dim = size === "large" ? "w-16 h-16 rounded-xl text-2xl" : "w-10 h-10 rounded-lg text-lg"
        return (
            <div className={`${dim} bg-[#6F2DBD] flex items-center justify-center shadow-lg hover:scale-105 transition-transform`}>
                <span className="text-white font-bold">C</span>
            </div>
        )
    }

    /* =========================================
       RENDER STEPS
       ========================================= */

    /* Frame 1 - Standard Fade Up */
    if (step === 0) {
        return (
            <AnimContainer animation="animate-fade-in-up">
                <div className="flex flex-col gap-4 max-w-4xl">
                    <p className="text-xl sm:text-2xl text-[#4A4458] font-semibold tracking-tight">
                        With the aim to decode
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171123] leading-tight tracking-tight">
                        Human Digital Behaviour
                    </h2>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 2 - Slide In from Right (Variation) */
    if (step === 1) {
        return (
            <AnimContainer animation="animate-slide-in-right">
                <div className="flex flex-col gap-4 max-w-4xl">
                    <p className="text-xl sm:text-2xl text-[#6F2DBD] font-semibold tracking-tight"> {/* Color Pop: Purple */}
                        We build Intelligence
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171123] leading-tight tracking-tight">
                        Beyond Clicks and Screens
                    </h2>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 3 - Zoom In (Variation) */
    if (step === 2) {
        return (
            <AnimContainer animation="animate-zoom-in">
                <div className="flex flex-col gap-5 max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171123] leading-tight tracking-tight">
                        A Unified Behaviour Intelligence Layer
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-bold tracking-tight"> {/* Color Shift: Grey to focus on H2 */}
                        For Modern Digital Platforms
                    </p>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 4 - Pulse/Impact (Standard) */
    if (step === 3) {
        return (
            <AnimContainer animation="animate-zoom-in"> {/* Zoom in for impact */}
                <div className="flex flex-col items-center justify-center h-full py-16">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#6F2DBD] drop-shadow-[0_0_25px_rgba(111,45,189,0.4)] animate-pulse tracking-tight leading-none">
                        Unveiling Cognera
                    </h2>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 5 - Blur In (Variation) */
    if (step === 4) {
        return (
            <AnimContainer animation="animate-blur-in">
                <div className="flex flex-col items-center justify-center text-center gap-8">
                    <div className="flex items-center gap-4">
                        <Logo size="large" />
                        <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#171123]">COGNERA</span>
                    </div>

                    <div className="h-1 w-32 bg-gray-200 rounded-full"></div>

                    <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#6F2DBD] tracking-tight">
                        Stay • Switch • Return
                    </p>

                    <p className="text-sm sm:text-base text-gray-500 font-bold tracking-widest uppercase">
                        Understanding the true journey of engagement
                    </p>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 6 - Staggered Focus (Same as before, good animation) */
    if (step === 5) {
        return (
            <AnimContainer animation="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4 items-center justify-items-center">
                    {/* STAY - Emerald Accent */}
                    <div className="flex flex-col gap-2 animate-fade-in-up items-center">
                        <h3 className="text-4xl sm:text-5xl font-black text-[#171123] tracking-tight">STAY</h3>
                        <span className="text-lg sm:text-xl font-bold text-[#10b981]">Measure Attention</span>
                    </div>

                    {/* SWITCH - Warning Accent */}
                    <div className="flex flex-col gap-2 animate-fade-in-up opacity-0 items-center" style={{ animationDelay: '1s' }}>
                        <h3 className="text-4xl sm:text-5xl font-black text-[#171123] tracking-tight">SWITCH</h3>
                        <span className="text-lg sm:text-xl font-bold text-[#F59E0B]">Detect Distraction</span>
                    </div>

                    {/* RETURN - Purple Accent */}
                    <div className="flex flex-col gap-2 animate-fade-in-up opacity-0 items-center" style={{ animationDelay: '2s' }}>
                        <h3 className="text-4xl sm:text-5xl font-black text-[#171123] tracking-tight">RETURN</h3>
                        <span className="text-lg sm:text-xl font-bold text-[#6F2DBD]">Predict Re-Engagement</span>
                    </div>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 7 - Slide In Left (Variation) */
    if (step === 6) {
        return (
            <AnimContainer animation="animate-slide-in-left">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171123] leading-tight max-w-5xl tracking-tight">
                    Turn Behaviour Patterns Into <span className="text-[#6F2DBD] underline decoration-4 decoration-[#10B981]/30 underline-offset-4">Growth Signals</span>
                </h2>
            </AnimContainer>
        )
    }

    /* Frame 8 - Fade In Up (Standard list) */
    if (step === 7) {
        return (
            <AnimContainer animation="animate-fade-in-up">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-[#10b981]"></div>
                        <span className="text-3xl sm:text-4xl font-bold text-[#171123] tracking-tight">Privacy-First</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-[#6F2DBD]"></div>
                        <span className="text-3xl sm:text-4xl font-bold text-[#171123] tracking-tight">Identity-Free</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-[#A663CC]"></div>
                        <span className="text-3xl sm:text-4xl font-bold text-[#171123] tracking-tight">Insight-Driven</span>
                    </div>
                </div>
            </AnimContainer>
        )
    }

    /* Frame 9 - FINAL CTA + DASHBOARD MOCKUP */
    if (step === 8) {
        return (
            <AnimContainer animation="animate-zoom-in" className="min-h-[500px]"> {/* Zoom in final frame */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-6xl px-4">

                    {/* Left: Text & CTA */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-slide-in-left" style={{ animationDuration: '0.8s' }}>
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-1">
                            <Logo size="normal" />
                            <span className="text-2xl font-bold tracking-tight text-[#171123]">COGNERA</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#171123] leading-tight tracking-tight">
                            The Behaviour Intelligence Platform
                        </h1>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-3">
                            <Link
                                href="/get-started"
                                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
                                style={{ background: 'linear-gradient(135deg, #6F2DBD 0%, #8B3FD4 100%)', color: '#FFFFFF', boxShadow: '0 8px 20px rgba(111,45,189,0.25)' }}
                            >
                                REGISTER
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Footer Note */}
                        <div className="flex items-center gap-2 text-base text-gray-500 font-medium">
                            <svg className="w-5 h-5 text-[#6F2DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            No Identity. Only Patterns.
                        </div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="flex-1 w-full max-w-xl animate-slide-in-right relative" style={{ animationDuration: '0.8s' }}>
                        <div className="transform scale-[1.02] hover:scale-105 transition-transform duration-500">
                            <DashboardMockup />
                        </div>
                    </div>

                </div>
            </AnimContainer>
        )
    }

    return null
}
