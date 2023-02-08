'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './UI/Input';
import { sendContactForm } from '../lib/contact';

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ContactData> = async (data) => {
    try {
      await sendContactForm(data);
    } catch (err) {}

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col rounded-xl bg-white px-8 py-8 shadow-md dark:bg-slate-800"
    >
      <h1 className="text-2xl font-bold dark:text-gray-50">
        Связаться со мной
      </h1>
      <div className="h-2 text-red-500"></div>
      <Input
        label="Имя"
        type="text"
        name="fullName"
        register={register}
        options={{ required: 'введите имя' }}
        errors={errors}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        register={register}
        options={{
          required: 'введите email',
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }}
        errors={errors}
      />
      <Input
        label="Тема"
        type="text"
        name="subject"
        register={register}
        options={{
          required: 'введите тему сообщения',
          min: 3,
          max: 30,
        }}
        errors={errors}
      />
      <label
        htmlFor="textMessage"
        className="mt-4 font-light text-gray-500 dark:text-gray-50"
      >
        Сообщение<span className="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        maxLength={1000}
        {...register('message', {
          required: 'поле не должно быть пустым',
          max: 1000,
        })}
        className="border-b bg-transparent pt-2 pl-4 font-light text-gray-500 ring-sky-500 focus:rounded-md focus:outline-none focus:ring-1"
      ></textarea>
      <div className="h-2 text-red-500">
        {errors?.message && (errors?.message?.message?.toString() || 'Ошибка')}
      </div>

      <div className="flex flex-row items-center justify-start">
        <button type="submit" className="button">
          Отправить
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
