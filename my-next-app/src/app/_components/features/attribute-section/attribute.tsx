import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button/button'
import { CountdownTimer } from '@/app/_components/ui/timer/timer'
import { COUNTDOWN_TARGET_DATE } from '@/configs/countdown'

export const AttributeSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap px-4 md:px-8">
      {/* Left Box */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 min-w-[300px] rounded bg-red-50 p-8 md:p-12">
        <span className="text-md font-bold text-yellow-400">New Arrival</span>
        <h3 className="mb-2 text-3xl font-bold text-gray-800">
          Make Your Home Beautiful <br />
          With <span className="text-green-500">Green Plants</span>
        </h3>
        <ul className="mt-0 list-disc pl-5">
          <li className="text-sm text-gray-900">Free Shipping. Secure Payment</li>
          <li className="text-sm text-gray-900">Contact us 24hrs a day</li>
          <li className="text-sm text-gray-900">Support gift service</li>
          <li className="text-sm text-gray-900">Garden care</li>
        </ul>
        <div className="flex items-center gap-3 mt-4">
          <Button variant="success" shape="default" className="bg-green-400 px-4 py-3 rounded text-xs md:text-md">
            Shop Now
          </Button>
          <Link href="#" className="text-gray-500 text-sm">
            More
          </Link>
        </div>
      </div>

      {/* Right Box */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2 min-w-[300px] rounded bg-red-50 p-8 md:p-12">
        <div className="flex flex-col gap-4 flex-1">
          <span className="text-md font-bold text-yellow-400">New Arrival</span>
          <h3 className="text-3xl font-bold text-gray-800">Plant a Tree Today</h3>
          <span className="text-sm text-gray-500">Remains until the end of the offer</span>
          <CountdownTimer targetDate={COUNTDOWN_TARGET_DATE} />
          <Button variant="success" shape="default" className="bg-green-400 px-4 py-3 rounded text-xs md:text-md">
            Shop Now
          </Button>
        </div>
        <div className="hidden md:flex self-end flex-1 justify-center">
          <Image
            src="/images/items/items.png"
            width={270}
            height={260}
            alt="bg-image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
