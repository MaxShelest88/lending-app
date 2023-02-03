'use client';

import { FieldErrors, UseFormRegister, RegisterOptions } from 'react-hook-form';

interface InputProps {
  name: 'message' | 'fullName' | 'email' | 'subject';
  label: string;
  register: UseFormRegister<ContactData>;
  options: RegisterOptions;
  errors: FieldErrors<ContactData>;
  [key: string]: unknown;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  register,
  options,
  errors,
  ...rest
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="mt-8 font-light text-gray-500 dark:text-gray-50"
      >
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        id={name}
        className="border-b bg-transparent pt-2 pl-4 font-light text-sky-700 ring-blue-500 focus:rounded-md focus:outline-none focus:ring-1"
        {...register(name, { ...options })}
        {...rest}
      />
      <div className="h-2 text-red-500">
        {errors?.[name] && (errors?.[name]?.message?.toString() || 'Ошибка')}
      </div>
    </>
  );
};
export default Input;
