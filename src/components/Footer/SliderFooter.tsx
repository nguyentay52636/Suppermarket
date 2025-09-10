import React from 'react'

export default function SliderFooter() {
    const partnerLogos = [
        { id: 1, name: "Vegetarian", logo: "" },
        { id: 2, name: "Organic", logo: "" },
        { id: 3, name: "Fresh", logo: "" },
        { id: 4, name: "Natural", logo: "" },
        { id: 5, name: "Healthy", logo: "" },
        { id: 6, name: "Premium", logo: "" },
    ]
    return (
        <div className="bg-muted/30 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-items-center">
                    {partnerLogos.map((partner) => (
                        <div key={partner.id} className="flex items-center justify-center p-4">
                            <img
                                src={partner.logo || "/placeholder.svg"}
                                alt={partner.name}
                                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
