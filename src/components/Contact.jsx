import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { SignInButton, SignUpButton,RedirectToSignIn, SignOutButton,SignedIn, UserButton, SignedOut } from '@clerk/clerk-react'

import { Fox } from "../model/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "./Alert";
import Loader from "./Loader";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "", NPM: "", faculty: "", jurusan: "", });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading, loading1] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "ALNO MUJABAR",
          from_email: form.email,
          to_email: "jabarhah@gmail.com",
          message: form.message,
          NPM: form.NPM,
          jurusan: form.jurusan,
          faculty: form.faculty
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(true);
          showAlert({
            show: true,
            text: "Terima kasih telah mengirimkan keluhan anda, kami akan membalas keluhan anda melalu email yang anda cantumkan 💙💙",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(true);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
              NPM: "",
              jurusan: "",
              faculty: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(true);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text justify-center items-center'>Isi form dibawah:</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Nama
            <input
              type='text'
              name='name'
              className='input'
              placeholder='alno'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            E-mail
            <input
              type='email'
              name='email'
              className='input'
              placeholder='alno@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            NPM:
            <input
              type='text'
              name='NPM'
              className='input'
              placeholder='24073122003'
              required
              value={form.NPM}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Fakultas:
            <input
              type='text'
              name='faculty'
              className='input'
              placeholder='FKOMINFO'
              required
              value={form.faculty}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

          </label>
          <label className='text-black-500 font-semibold'>
            Prodi:
            <input
              type='text'
              name='jurusan'
              className='input'
              placeholder='Rekayasa Perangkat Lunak'
              required
              value={form.jurusan}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Keluhan Anda
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
        <SignedOut>
          
          <a
            href="/"
            className='btn'
            onClick={(e) => {
              e.preventDefault();
              showAlert({
                show: true,
                text: 'Silakan login untuk mengirimkan keluhan!!!',
                type: 'danger',
              });
            }}
            
            >
            Submit
          </a>
        </SignedOut>
        <SignedIn>
          
          <button
            type='submit'
            disabled={loading1}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
            {loading1 ? "Sending..." : "Submit"}
          </button>
        </SignedIn>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
