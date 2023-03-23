import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { SectionWrapper } from '../hoc';
import styles from '../styles/components/Contact.module.scss';
import { MailBoxCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_EMAILJS_SERVICE_ID,
        process.env.NEXT_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ray',
          from_email: form.email,
          to_email: 'ceb12618@gmail.com',
          message: form.message,
        },
        process.env.NEXT_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert('謝謝您的來信！我會盡快回覆您');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('發生錯誤，請重新再試');
        },
      );
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.form_box}
        variants={slideIn('left', 'tween', 0.2, 1)}
      >
        <p>Get in touch</p>
        <h2>Contact</h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            <span>您的稱呼</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='暱稱或姓名'
              autocomplete='off'
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='您的 Email 地址'
              autocomplete='off'
            />
          </label>

          <label>
            <span>您的訊息</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='歡迎聯絡我！'
              autocomplete='off'
            />
          </label>

          <button type='submit'>{loading ? '送出中...' : '送出'}</button>
        </form>
      </motion.div>

      <motion.div
        className={styles.canvas_box}
        variants={slideIn('right', 'tween', 0.2, 1)}
      >
        <MailBoxCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
