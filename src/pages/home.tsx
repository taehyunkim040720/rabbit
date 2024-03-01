import {
  InteractionText,
  WrapperBox,
  WrapperBoxContent,
  WrapperBoxTitle
} from '@/components/templates';
import { GridTemplate } from '@/components/templates/grid-template';

function Home() {
  return (
    <section className="flex flex-col gap-20 pt-24">
      <InteractionText
        delay={3000}
        texts={[
          '테스트성 텍스트입니다.',
          '아름다운 테스트성 텍스트입니다.',
          '모던해보이는 테스트성 텍스트입니다.'
        ]}
      />
      <GridTemplate>
        <WrapperBox>
          <WrapperBoxTitle>안녕하세요</WrapperBoxTitle>
          <WrapperBoxContent>반갑습니다 저는 김태현입니다.</WrapperBoxContent>
        </WrapperBox>
        <WrapperBox>
          <WrapperBoxTitle>안녕하세요</WrapperBoxTitle>
          <WrapperBoxContent>반갑습니다 저는 김태현입니다.</WrapperBoxContent>
        </WrapperBox>
        <WrapperBox>
          <WrapperBoxTitle>안녕하세요</WrapperBoxTitle>
          <WrapperBoxContent>반갑습니다 저는 김태현입니다.</WrapperBoxContent>
        </WrapperBox>
      </GridTemplate>
    </section>
  );
}

export default Home;
