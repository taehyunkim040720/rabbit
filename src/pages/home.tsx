import { Tag } from '@/components/templates';
import { InterectionText } from '@/components/templates/interection-text';

function Home() {
  return (
    <section className="grid gap-8 pt-32">
      <InterectionText
        texts={[
          '테스트성 텍스트입니다.',
          '아름다운 테스트성 텍스트입니다.',
          '모던해보이는 테스트성 텍스트입니다.'
        ]}
      />
      <Tag className="border-primary">개발</Tag>
    </section>
  );
}

export default Home;
