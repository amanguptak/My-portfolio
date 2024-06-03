import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import axios from 'axios';
import { toast } from 'react-toastify';



const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const emailLink = import.meta.env.VITE_EMAIL

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(emailLink, form);
      if (res?.data?.ok) {
        toast.success('Thanks we got your mail');
        setLoading(false);
        setForm(INITIAL_STATE);
      } else {
        setLoading(false);
        toast.error('something went wrong');
      }
    } catch (err) {
      setLoading(false);
      toast.error('something went wrong');
      console.log(err);
    }
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-white flex-[0.75] rounded-2xl p-8"
      >
        <h1 className="text-5xl font-bold text-gray-600">Contact</h1>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-gray-600">{span}</span>
                <Component
                  type={input === 'email' ? 'email' : 'text'}
                  name={input}
                  value={form[`${input}`]}
                  required
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-[#428bd0] placeholder:text-white rounded-lg border-none px-6 py-4 font-medium text-gray-600 outline-none"
                  {...(input === 'message' && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-[#428bd0] shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white-600 shadow-md outline-none"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 cursor-grab"
      >
        <EarthCanvas />
       
      </motion.div>
    
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
