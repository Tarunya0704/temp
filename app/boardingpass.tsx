
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function boardingpass() {
  return (
    <Card className="w-full max-w-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/placeholder.svg"
            width={40}
            height={40}
            alt="Airline Logo"
            className="rounded-md"
            style={{ aspectRatio: "40/40", objectFit: "cover" }}
          />
          <div className="font-semibold">Acme Airlines</div>
        </div>
        <div className="text-sm text-muted-foreground">Boarding Pass</div>
      </div>
      <Separator className="my-4" />
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-muted-foreground">Seat 12A</div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Flight #AB123</div>
            <div className="text-sm text-muted-foreground">SFO - JFK</div>
          </div>
          <div className="text-sm text-muted-foreground">Boarding Group: A</div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Departure</div>
            <div className="text-sm text-muted-foreground">10:30 AM</div>
          </div>
          <div>
            <div className="font-medium">Arrival</div>
            <div className="text-sm text-muted-foreground">5:45 PM</div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/placeholder.svg"
            width={200}
            height={60}
            alt="Barcode"
            className="w-full max-w-[200px]"
            style={{ aspectRatio: "200/60", objectFit: "cover" }}
          />
        </div>
      </div>
    </Card>
  )
}