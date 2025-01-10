import React, { ButtonHTMLAttributes, useCallback } from 'react';

type ButtonRounded = 'none' | 'md' | 'lg' | 'rounded';

interface ColorProps {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  rounded?: ButtonRounded;
  callback?: () => void;
  palette?: ColorProps;
}

export function Button({
  value = 'Button',
  rounded = 'md',
  type = 'button',
  callback,
  palette = {},
  className = '',
  ...rest
}: ButtonProps) {
  const {
    bgColor = 'bg-slate-800',
    borderColor = 'border-slate-800',
    textColor = 'text-white',
    hoverBgColor = 'hover:bg-slate-600',
    hoverBorderColor = 'hover:border-slate-600',
  } = palette;

  const roundedClass =
    rounded === 'md'
      ? 'rounded-md'
      : rounded === 'lg'
      ? 'rounded-lg'
      : rounded === 'rounded'
      ? 'rounded'
      : 'rounded-none';

  const handleClick = useCallback(() => {
    if (callback) {
      callback();
    }
  }, [callback]);

  return (
    <button
      type={type}
      className={`${bgColor} ${borderColor} ${hoverBgColor} ${hoverBorderColor} ${roundedClass} inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium ${textColor} disabled:bg-slate-400 disabled:border-slate-400 disabled:text-slate-500 ${className}`}
      onClick={callback && handleClick}
      {...rest}
    >
      {value}
    </button>
  );
}
