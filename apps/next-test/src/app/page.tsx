'use client';
import { Button, StepList } from '@package/ui-kit';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */

  const steps = [
    { title: '첫번째', isCompleted: true },
    { title: '두번째', isCompleted: true },
    { title: '세번째', isCompleted: true },
    { title: '네번째', isCompleted: true },
  ];

  const handleAlert = (name: string) => {
    // 숫자만 입력받기
    const num = prompt('숫자를 입력해주세요.');
    if (!num) {
      alert('숫자를 입력해주세요.');
      return;
    }
    if (isNaN(Number(num))) {
      alert('숫자만 입력해주세요.');
      return;
    }

    alert(
      `안녕하세요 ${name}님! 입력하신 숫자는 ${num}이고, 2배한 값은 ${
        Number(num) * 2
      }입니다.`
    );
  };

  return (
    <div className="wrapper py-4 bg-slate-500">
      <div className="container mx-auto">
        <StepList steps={steps} />
        <div className={'my-6'}>
          <Button
            value={'이것은 버튼입니다2.'}
            rounded={'md'}
            callback={() => handleAlert('테스터')}
          />
        </div>
      </div>
    </div>
  );
}
