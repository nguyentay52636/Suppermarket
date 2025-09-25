import React from 'react'
import { Check } from 'lucide-react'
const steps = [
    { id: 1, name: "Giỏ hàng", completed: true },
    { id: 2, name: "Thông tin", completed: false, current: true },
    { id: 3, name: "Thanh toán", completed: false },
    { id: 4, name: "Xác nhận", completed: false },
]
export default function StepPayment() {
    return (
        <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav aria-label="Progress">
                    <ol className="flex items-center justify-center space-x-8">
                        {steps.map((step, stepIdx) => (
                            <li key={step.name} className="flex items-center">
                                <div className="flex items-center">
                                    <div
                                        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step.completed
                                            ? "bg-green-600 border-green-600 text-white"
                                            : step.current
                                                ? "border-green-600 text-green-600 bg-white"
                                                : "border-gray-300 text-gray-500 bg-white"
                                            }`}
                                    >
                                        {step.completed ? (
                                            <Check className="h-4 w-4" />
                                        ) : (
                                            <span className="text-sm font-medium">{step.id}</span>
                                        )}
                                    </div>
                                    <span
                                        className={`ml-2 text-sm font-medium ${step.current ? "text-green-600" : step.completed ? "text-green-600" : "text-gray-500"
                                            }`}
                                    >
                                        {step.name}
                                    </span>
                                </div>
                                {stepIdx < steps.length - 1 && (
                                    <div className={`ml-8 w-16 h-0.5 ${step.completed ? "bg-green-600" : "bg-gray-300"}`} />
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    )
}
