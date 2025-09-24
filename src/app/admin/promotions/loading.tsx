import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PromotionsLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header Skeleton */}
                <div className="flex justify-between items-center">
                    <div>
                        <Skeleton className="h-8 w-64 mb-2" />
                        <Skeleton className="h-4 w-96" />
                    </div>
                    <Skeleton className="h-10 w-32" />
                </div>

                {/* Stats Cards Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Card key={i}>
                            <CardHeader className="pb-2">
                                <Skeleton className="h-4 w-24" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-8 w-16 mb-1" />
                                <Skeleton className="h-3 w-20" />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Filters Skeleton */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex gap-4">
                            <Skeleton className="h-10 flex-1" />
                            <Skeleton className="h-10 w-40" />
                            <Skeleton className="h-10 w-32" />
                        </div>
                    </CardContent>
                </Card>

                {/* Table Skeleton */}
                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-48" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <Skeleton className="h-10 w-20" />
                                    <Skeleton className="h-10 w-10 rounded" />
                                    <Skeleton className="h-10 flex-1" />
                                    <Skeleton className="h-6 w-16" />
                                    <Skeleton className="h-10 w-24" />
                                    <Skeleton className="h-6 w-20" />
                                    <div className="flex gap-2">
                                        <Skeleton className="h-8 w-8" />
                                        <Skeleton className="h-8 w-8" />
                                        <Skeleton className="h-8 w-8" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
