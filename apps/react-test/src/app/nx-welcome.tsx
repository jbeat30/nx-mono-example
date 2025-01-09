/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import { MentorCard, Button, StepList } from '@package/ui-kit';

const steps = [
  { title: 'Step 1', isCompleted: true },
  { title: 'Step 2', isCompleted: true },
  { title: 'Step 3', isCompleted: false },
  { title: 'Step 4', isCompleted: false },
];
const handleAlert = (name: string) => {
  alert(`안녕하세요 ${name}님!`);
};

export function NxWelcome() {
  return (
    <div className="wrapper py-4 bg-slate-500">
      <div className="container mx-auto">
        <StepList steps={steps} />
        <div className={'my-6'}>
          <Button
            value={'이것은 버튼입니다.'}
            rounded={'md'}
            callback={() => handleAlert('테스터')}
            palette={{
              bgColor: 'bg-red-500', // 배경색 빨강
              borderColor: 'border-blue-500', // 테두리 색상 파랑
              textColor: 'text-white', // 텍스트 색상 흰색
              hoverBgColor: 'hover:bg-red-600', // 호버 시 배경색
              hoverBorderColor: 'hover:border-blue-600', // 호버 시 테두리 색상
            }}
          />
        </div>
        <div className={'my-6'}>
          <MentorCard />
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
