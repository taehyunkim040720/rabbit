import { Button, Input } from '@/components/templates';

function Home() {
  return (
    <section className="grid gap-8">
      <Button>버튼입니다.</Button>
      <Input variants="sm" placeholder="this is awesome placeholder..." />
      <Input placeholder="this is awesome placeholder..." />
      <Input variants="lg" placeholder="this is awesome placeholder..." />
    </section>
  );
}

export default Home;
