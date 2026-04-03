"use client"

import { useState } from "react"
import { ArrowLeft, X } from "lucide-react"
import { steps, Step } from "@/data/razorpayarticle"
import Link from "next/link"


export default function PaymentFlowDiagram() {
    const [activeFilter, setActiveFilter] = useState("all")
    const [selectedStep, setSelectedStep] = useState<Step | null>(null)

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
    }

    const handleStepClick = (step: Step) => {
        setSelectedStep(step)
    }

    const closeModal = () => {
        setSelectedStep(null)
    }

    const isStepVisible = (step: Step) => {
        return activeFilter === "all" || step.phase === activeFilter
    }

    const getActorColor = (actor: string) => {
        switch (actor) {
            case "browser":
                return "bg-blue-100 border-blue-200"
            case "backend":
                return "bg-indigo-100 border-indigo-200"
            case "razorpay":
                return "bg-purple-100 border-purple-200"
            default:
                return "bg-gray-100 border-gray-200"
        }
    }

    const getStepNumberColor = (actor: string) => {
        switch (actor) {
            case "browser":
                return "bg-blue-600"
            case "backend":
                return "bg-indigo-600"
            case "razorpay":
                return "bg-purple-600"
            default:
                return "bg-gray-600"
        }
    }

    const MobileStepCard = ({ step, index }: { step: Step; index: number }) => (
        <div className="mb-6">
            <div
                onClick={() => handleStepClick(step)}
                className={`cursor-pointer transition-all duration-300 text-black p-4 rounded-lg border relative ${getActorColor(step.actor)} ${!isStepVisible(step) ? "opacity-20 scale-95" : "hover:shadow-md active:scale-95"
                    }`}
            >
                <span
                    className={`absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full text- black shadow-lg text-sm font-bold ${getStepNumberColor(step.actor)}`}
                >
                    {step.id}
                </span>
                <div className="ml-2">
                    <div className="text-xs font-medium text-gray-500 mb-1">
                        {step.actor === "browser" && "👤 Browser"}
                        {step.actor === "backend" && "⚙️ Backend"}
                        {step.actor === "razorpay" && "💳 Razorpay"}
                    </div>
                    <div className="text-sm font-bold ">{step.content}</div>
                </div>
            </div>
            {index < steps.length - 1 && (
                <div
                    className={`flex justify-center my-2 transition-opacity duration-300 ${!isStepVisible(step) ? "opacity-20" : ""}`}
                >
                    <div className="text-blue-500 text-xl">↓</div>
                </div>
            )}
        </div>
    )

    return (
        <div className="width-fit m-auto min-h-screen bg-black font-sans">
            <div className="  mx-auto p-4 lg:p-8 max-w-7xl">
                <Link href={"/"} className="inline-flex items-center text-emerald-400 hover:text-emerald-600 mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2 text-emerald-400" />
                    <span className="text-emerald-400 hover:text-emerald-600">Back to Main Page</span>
                </Link>
                <header className="text-center mb-6 lg:mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text- black shadow-lg leading-tight">
                        End-to-End Payment Integration Flow
                    </h1>
                    <p className="mt-2 text-base lg:text-lg text- black shadow-lg px-4">
                        An interactive visualization of the process between a user, a backend, and Razorpay.
                    </p>
                </header>

                <main>
                    <section className="bg-black p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200">
                        <div className="mb-6 lg:mb-8 pb-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text- black shadow-lg mb-3 text-center">Filter by Phase:</h2>
                            <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                                {[
                                    { key: "all", label: "Show All" },
                                    { key: "create", label: "1. Order Creation" },
                                    { key: "pay", label: "2. Payment Execution" },
                                    { key: "confirm", label: "3. Webhook Confirmation" },
                                    { key: "verify", label: "4. Client Verification" },
                                ].map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => handleFilterChange(filter.key)}
                                        className={`px-3 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-200 touch-manipulation ${activeFilter === filter.key
                                                ? "bg-blue-600 text- black shadow-lg border-blue-600 shadow-md"
                                                : "bg-black border-gray-300 hover:bg-gray-100 active:bg-gray-200"
                                            }`}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-3 gap-4 text-center mb-6 font-bold text-gray-800">
                                <h2 className="text-lg text-white">👤 User's Browser (Frontend)</h2>
                                <h2 className="text-lg text-white">⚙️ Payload CMS (Backend)</h2>
                                <h2 className="text-lg text-white">💳 Razorpay Servers</h2>
                            </div>

                            <div className="space-y-4">
                                {/* Step 1 & 2 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div
                                        onClick={() => handleStepClick(steps[0])}
                                        className={`cursor-pointer text-black transition-all duration-300 p-3 rounded-lg border relative ${getActorColor("browser")} ${!isStepVisible(steps[0]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("browser")}`}
                                        >
                                            1
                                        </span>
                                        {steps[0].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[0]) ? "opacity-20" : ""}`}
                                    >
                                        →
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[1])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("backend")} ${!isStepVisible(steps[1]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("backend")}`}
                                        >
                                            2
                                        </span>
                                        {steps[1].content}
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>

                                {/* Step 3 & 4 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div></div>
                                    <div></div>
                                    <div
                                        onClick={() => handleStepClick(steps[2])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("backend")} ${!isStepVisible(steps[2]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("backend")}`}
                                        >
                                            3
                                        </span>
                                        {steps[2].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[2]) ? "opacity-20" : ""}`}
                                    >
                                        →
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[3])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("razorpay")} ${!isStepVisible(steps[3]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("razorpay")}`}
                                        >
                                            4
                                        </span>
                                        {steps[3].content}
                                    </div>
                                </div>

                                {/* Arrow down */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div></div>
                                    <div></div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[4]) ? "opacity-20" : ""}`}
                                    >
                                        ↓
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>

                                {/* Step 5 & 6 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div
                                        onClick={() => handleStepClick(steps[5])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("browser")} ${!isStepVisible(steps[5]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("browser")}`}
                                        >
                                            6
                                        </span>
                                        {steps[5].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[4]) ? "opacity-20" : ""}`}
                                    >
                                        ←
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[4])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("backend")} ${!isStepVisible(steps[4]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("backend")}`}
                                        >
                                            5
                                        </span>
                                        {steps[4].content}
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>

                                {/* Step 7 & 8 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div
                                        onClick={() => handleStepClick(steps[6])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("browser")} ${!isStepVisible(steps[6]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("browser")}`}
                                        >
                                            7
                                        </span>
                                        {steps[6].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[6]) ? "opacity-20" : ""}`}
                                    >
                                        →
                                    </div>
                                    <div></div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[7]) ? "opacity-20" : ""}`}
                                    >
                                        →
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[7])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("razorpay")} ${!isStepVisible(steps[7]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("razorpay")}`}
                                        >
                                            8
                                        </span>
                                        {steps[7].content}
                                    </div>
                                </div>

                                {/* Step 9 & 10 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div></div>
                                    <div></div>
                                    <div
                                        onClick={() => handleStepClick(steps[9])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("backend")} ${!isStepVisible(steps[9]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("backend")}`}
                                        >
                                            10
                                        </span>
                                        {steps[9].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[8]) ? "opacity-20" : ""}`}
                                    >
                                        ←
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[8])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("razorpay")} ${!isStepVisible(steps[8]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("razorpay")}`}
                                        >
                                            9
                                        </span>
                                        {steps[8].content}
                                    </div>
                                </div>

                                {/* Arrow down */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div></div>
                                    <div></div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[10]) ? "opacity-20" : ""}`}
                                    >
                                        ↓
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>

                                {/* Step 11 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div></div>
                                    <div></div>
                                    <div
                                        onClick={() => handleStepClick(steps[10])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("backend")} ${!isStepVisible(steps[10]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("backend")}`}
                                        >
                                            11
                                        </span>
                                        {steps[10].content}
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>

                                {/* Step 12, 13, 14 */}
                                <div className="grid grid-cols-5 gap-4 items-center">
                                    <div
                                        onClick={() => handleStepClick(steps[11])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("browser")} ${!isStepVisible(steps[11]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("browser")}`}
                                        >
                                            12
                                        </span>
                                        {steps[11].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[12]) ? "opacity-20" : ""}`}
                                    >
                                        →
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[12])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative ${getActorColor("backend")} ${!isStepVisible(steps[12]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span
                                            className={`absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text- black shadow-lg text-xs font-bold ${getStepNumberColor("backend")}`}
                                        >
                                            13
                                        </span>
                                        {steps[12].content}
                                    </div>
                                    <div
                                        className={`text-2xl text-blue-500 text-center transition-opacity duration-300 ${!isStepVisible(steps[13]) ? "opacity-20" : ""}`}
                                    >
                                        ←
                                    </div>
                                    <div
                                        onClick={() => handleStepClick(steps[13])}
                                        className={`cursor-pointer transition-all duration-300 text-black p-3 rounded-lg border relative bg-green-100 border-green-200 ${!isStepVisible(steps[13]) ? "opacity-20 scale-95" : "hover:shadow-md"
                                            }`}
                                    >
                                        <span className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text- black shadow-lg text-xs font-bold">
                                            14
                                        </span>
                                        {steps[13].content}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="lg:hidden">
                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <MobileStepCard key={step.id} step={step} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="text-center mt-6 lg:mt-8 text-xs lg:text-sm text-gray-500 px-4">
                    <p>Click on any step to view example code. An interactive diagram to clarify complex system flows.</p>
                </footer>
            </div>

            {/* Modal */}
            {selectedStep && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 lg:p-4 z-50">
                    <div className="bg-black rounded-lg w-full max-w-4xl max-h-[95vh] lg:max-h-[90vh] overflow-hidden">
                        <div className="flex items-start justify-between p-4 lg:p-6 border-b border-gray-200">
                            <div className="flex-1 pr-4">
                                <h3 className="text-lg lg:text-xl font-bold text-white  leading-tight">
                                    Step {selectedStep.id}: {selectedStep.content}
                                </h3>
                                <p className="text-sm text-white mt-1 leading-relaxed">{selectedStep.description}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-100 hover:text-black rounded-full transition-colors touch-manipulation flex-shrink-0"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 lg:p-6 overflow-y-auto max-h-[calc(95vh-120px)] lg:max-h-[calc(90vh-120px)]">
                            <div className="bg-gray-900 rounded-lg p-3 lg:p-4 overflow-x-auto">
                                <pre className="text-green-400 text-xs lg:text-sm leading-relaxed">
                                    <code>{selectedStep.code}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
