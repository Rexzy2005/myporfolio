import Section from '@/components/ui/Section';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyBlock from '@/sections/work/CaseStudyBlock';
import MoreWork from '@/sections/work/MoreWork';
import RecognitionList from '@/sections/work/RecognitionList';

export default function Work() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected work"
      title="Selected engineering work"
      intro="Systems I have helped design and build, written up as case studies: the problem, how each is structured, and the decisions behind it."
    >
      <div>
        {caseStudies.map((study) => (
          <CaseStudyBlock key={study.id} study={study} />
        ))}
      </div>
      <MoreWork />
      <RecognitionList />
    </Section>
  );
}
