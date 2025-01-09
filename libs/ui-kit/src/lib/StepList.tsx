import React from 'react';

interface Step {
  title: string;
  isCompleted: boolean;
}

interface StepListProps {
  steps: Step[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <ol className="flex items-center">
      {steps.map((step, index) => (
        <li key={index} className="relative w-full">
          <div className="flex items-center">
            <div
              className={`z-10 flex items-center justify-center w-6 h-6 ${
                step.isCompleted ? 'bg-blue-600' : 'bg-gray-200'
              } rounded-full ring-0 ring-white dark:${
                step.isCompleted ? 'bg-blue-900' : 'bg-gray-700'
              } sm:ring-8 dark:ring-gray-900 shrink-0`}
            >
              {step.isCompleted ? (
                <svg
                  className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              ) : (
                <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            )}
          </div>
          <div className="mt-3">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {step.title}
            </h3>
          </div>
        </li>
      ))}
    </ol>
  );
}
