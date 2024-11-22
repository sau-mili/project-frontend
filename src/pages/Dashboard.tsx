import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { GrapeIcon as Grain, MapPin, ChevronRight } from 'lucide-react' //User

export default function FarmerDashboard() {
  const farmerData = {
    name: "Akash Das",
    location: "Purulia, West Bengal",
    crops: ["Paddy", "Mustard", "Potato"],
    avatar: "/placeholder.svg?height=40&width=40"
  }

  const negotiations = [
    { buyerName: "ABC Corp", crop: "Wheat", priceOffered: "$0.5/kg" },
    { buyerName: "XYZ Foods", crop: "Paddy", priceOffered: "$0.4/kg" },
  ]

  // const acceptedOffers = [
  //   { buyerName: "DEF Limited", crop: "Mustard", finalPrice: "$0.8/kg" },
  //   { buyerName: "GHI Traders", crop: "Potato", finalPrice: "$0.3/kg" },
  // ]

  const currentHarvest = [
    {
      crop: "Wheat (Premium)",
      buyer: "ABC Corp",
      dateOfDelivery: "2024-03-15",
      progress: 75
    },
    {
      crop: "Wheat (Regular)",
      buyer: "XYZ Foods",
      dateOfDelivery: "2024-03-20",
      progress: 50
    },
    {
      crop: "Wheat (Organic)",
      buyer: "DEF Limited",
      dateOfDelivery: "2024-03-25",
      progress: 25
    },
    {
      crop: "Wheat (Premium)",
      buyer: "GHI Traders",
      dateOfDelivery: "2024-03-30",
      progress: 10
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#e8f5e9] pt-16">
      <main className="p-4 md:p-6 space-y-6">
        {/* Farmer Profile Card */}
        <Card className="w-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200 border-none">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-4 ring-emerald-600/20 ring-offset-4">
                  <AvatarImage src={farmerData.avatar} alt={farmerData.name} />
                  <AvatarFallback className="bg-[#2e7d32] text-white">{farmerData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-grow space-y-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{farmerData.name}</h2>
                  <p className="text-base flex items-center gap-2 text-gray-600 mt-1">
                    <MapPin className="h-5 w-5 text-emerald-600" /> {farmerData.location}
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {farmerData.crops.map((crop, i) => (
                    <span key={i} className="px-4 py-2 bg-light3 text-dark3 text-sm font-medium rounded-full border border-med3">
                      {crop}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Button className="bg-dark1 border-dark1 hover:bg-light1 text-white ">
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="bg-light1 border-med1 text-dark2 hover:bg-med1 hover:text-light4">
                    View Analytics
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block border-l border-gray-200 pl-6 ml-6 space-y-3">
                <div className="space-y-1">
                  <p className="text-sm text-dark1">Total Revenue</p>
                  <p className="text-2xl font-bold text-med1">$24,500</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-dark1">Active Contracts</p>
                  <p className="text-2xl font-bold text-med1">12</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Negotiations Section */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200 border-none sticky top-20">
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
                  Ongoing Negotiations
                  <Button variant="ghost" size="sm" className="text-dark3 hover:text-dark2 hover:bg-transparent">
                    View all <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-hide">
                  {negotiations.map((item, index) => (
                    <div key={index} 
                      className="p-4 bg-light4 rounded-xl hover:bg-light3 transition-all duration-200 border border-med3"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <p className="font-semibold text-dark1">{item.buyerName}</p>
                          <p className="text-sm text-dark2">{item.crop}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-dark3">{item.priceOffered}</p>
                          <p className="text-xs text-med1 mt-1">Updated 2h ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Similar updates for Accepted Offers card... */}
          </div>

          {/* Current Harvest Section */}
          <div className="lg:col-span-8">
            <Card className="bg-white/90 shadow-lg hover:shadow-xl transition-all duration-200 border-none">
              <CardHeader className="p-6 flex flex-row items-center justify-between sticky top-0 bg-white/90 z-10">
                <CardTitle className="text-xl font-bold text-gray-800">Current Harvest Status</CardTitle>
                <Button variant="outline" size="sm" className="bg-dark2 text-light2 border-dark2 text-light3 hover:bg-dark3">
                  Download Report
                </Button>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="space-y-4">
                  {currentHarvest.map((item, index) => (
                    <div key={index} className="p-5 bg-light4 rounded-lg hover:bg-light3 transition-colors">
                      <div className="flex items-start gap-4">
                        <Grain className="h-6 w-6 text-dark3 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-dark1">{item.crop}</h3>
                          <div className="mt-1 space-y-1">
                            <p className="text-sm text-dark2">Buyer: <span className="font-medium text-gray-800">{item.buyer}</span></p>
                            <p className="text-sm text-dark2">Delivery: <span className="font-medium text-gray-800">{item.dateOfDelivery}</span></p>
                          </div>
                          <div className="mt-4">
                            <div className="h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-med1 rounded-full transition-all duration-500 ease-in-out"
                                //style={{ width: `${item.progress}%` }}
                              />
                            </div>
                            <div className="flex justify-between mt-2">
                              <span className="text-sm font-medium text-dark3">{item.progress}% Complete</span>
                              <Button variant="link" className="text-sm text-dark3 h-auto p-0 hover:text-dark1">
                                View contract
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}