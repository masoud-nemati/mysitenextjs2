import { AttributeSection } from "../_components/attribute-section";
import ProductList from "../_components/products/product-list/product-list";
import SpecialOffersBanner from "../_components/special-offers-banner/special-offers-banner";
import {SmallBanner} from "../_components/small-baner/small-baner"
import {smallBannerData} from "@/data/small-baner-data"
import { FlexBoxes } from "../_components/testcomp/testbox";
import { Button } from "../_components/button"
import { Input } from "../_components/input";
import { IconAccount, IconCart, IconEmail } from "../_components/icons/icons"

import { COUNTDOWN_TARGET_DATE } from '@/configs/countdown'
import { ProductGroups } from "../_components/products/product-groups/product-groups";
import { CountdownTimer } from "../_components/timer/timer";

export default function Home() {
  return (
    <section className="container-fluid mx-auto flex flex-col items-center space-y-[50px] py-16">
      <h1>Masoud Nemati</h1>
      <ProductGroups />
      <section className="containerD">
        <AttributeSection />

      </section>



      <section className="containerD">
        {/* <FlexBoxes/> */}

      </section>

      <section className="containerD">
        <ProductList />
      </section>

      <section className="containerD">
        <SpecialOffersBanner />
      </section>

        <main className="containerD">
          <SmallBanner data={smallBannerData} />
    </main>


      {/* <CountdownTimer targetDate={COUNTDOWN_TARGET_DATE} /> */}

      {/* <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>

      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>

      <Input id="simple" label="Simple Input" placeholder="Enter text..." variant="info" color="primary" compsize="xm" byIcon={true} icon={<IconEmail width={18} height={18} color="black" />} />
      <Input id="with-icon" label="Input with Icon" placeholder="Search..." byIcon={true} variant="secondary" color="yellow" compsize="xl" icon={<IconAccount width={18} height={18} color="red" />} />
      <Input id="helper-text" label="Input with Helper" placeholder="Enter email..." helperText="Email is required" variant="info" color="other" compsize="xs" byIcon={true} icon={<IconCart width={18} height={18} />} />
      <Input id="disabled" label="Disabled Input" placeholder="Cannot type..." isdisabled={true} variant="danger" color="success" compsize="sm" />
      <Input id="large" label="Large Input" placeholder="Large size..." variant="info" color="warning" compsize="lg" />
      <Input id="test" label="test input" placeholder="تست میکنم" variant="danger" color="green" compsize="md" helperText="دارم تست میکنم" />
      <Input variant="primary" compsize="md" placeholder="Primary input" />
      <Input variant="secondary" compsize="md" placeholder="Secondary input" />
      <Input variant="success" compsize="md" placeholder="Success input" />
      <Input variant="danger" compsize="md" placeholder="Danger input" />
      <Input variant="warning" compsize="md" placeholder="Warning input" />
      <Input variant="info" compsize="md" placeholder="Info input" /> */}
    </section>
  );
}
