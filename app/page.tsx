import { CardWithForm } from "@/components/examples/CardWithForm";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <CardWithForm />
      <Button className="w-max">Button</Button>
      <Button className="w-max" variant="secondary">
        Button
      </Button>
      <Button className="w-max" variant="ghost">
        Button
      </Button>
      <Button className="w-max" variant="outline">
        Button
      </Button>
      <h1 className="text-3xl">Ryan Knight</h1>
    </section>
  );
}
