import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [main, setMain] = useState(true);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [aname, setAname] = useState('');
  const [anumber, setAnumber] = useState('');
  const [amount, setAmount] = useState('');

  function getAmount(amm) {
    return Number(amm).toLocaleString();
  }

  function handlePrint() {
    window.print();
    setMain(true);
    setDone(false);
  }

  console.log(aname, anumber, amount);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMain(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false), setDone(true);
    }, 3000);
  };
  return (
    <div className='print'>
      <Head>
        <title>Create Fake Failed Payment</title>
        <meta
          name='description'
          content='Create a Fake Failed payment with any details of your choice - You are responsible for whatever you do with this app.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='flex flex-col mx-auto h-screen lg:mt-10 p-6 bg-black text-white max-w-xl print'>
        {main && (
          <div className='pb-6'>
            <div className='flex flex-col mx-auto sticky bg-black top-0 gap-6'>
              <span className='text-mainOrange font-bold text-4xl'>
                PrankPay
              </span>
              <div className='bg-mainOrange w-full h-0.5'></div>
            </div>

            <p className='pt-10'>
              Are you tired of giving excuses why you can not give shishi? Here
              is the solution. Create a fake failed transfer and save yourself
              the stress.
            </p>
            <div className='flex flex-col mx-auto pb-4 pt-8'>
              <span className='text-red-500 font-bold text-2xl underline'>
                Disclaimer
              </span>
            </div>
            <p className='pb-14'>
              I will not be held responsible for anything you use{' '}
              <span className='text-mainOrange font-bold'>PrankPay</span> for.
              The idea of this app is for fun purpose only and should not be
              abused.
            </p>

            <div className='flex flex-col mx-auto pb-6 font-bold text-2xl'>
              Account Details
            </div>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-2'>
                <label htmlFor='a_name' className='font-bold text-mainOrange'>
                  ACCOUNT NAME:
                </label>
                <input
                  type='text'
                  onChange={(e) => setAname(e.target.value)}
                  id='a_name'
                  className='bg-gray-300 rounded-lg text-gray-800 outline-none focus:border focus:border-mainOrange p-3'
                  maxLength={25}
                  required
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='a_number' className='font-bold text-mainOrange'>
                  ACCOUNT NUMBER:
                </label>
                <input
                  type='number'
                  id='a_number'
                  onChange={(e) => setAnumber(e.target.value)}
                  className='bg-gray-300 text-gray-800 outline-none focus:border rounded-lg focus:border-mainOrange p-3'
                  maxLength={10}
                  required
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='amount' className='font-bold text-mainOrange'>
                  AMOUNT:
                </label>
                <input
                  type='number'
                  id='amount'
                  onChange={(e) => setAmount(e.target.value)}
                  className='bg-gray-300 rounded-lg text-gray-800 outline-none focus:border focus:border-mainOrange p-3'
                  maxLength={10}
                  required
                />
              </div>
              <button className='bg-mainOrange p-3 font-bold text-lg'>
                Fake It
              </button>
            </form>
          </div>
        )}
        {loading && (
          <div className='flex flex-col mx-auto pt-40'>
            <Image src='/loading-new.gif' width={160} alt='' height={160} />
            <span className='text-center font-semibold text-mainOrange'>
              Loading...
            </span>
          </div>
        )}
        {done && (
          <div className='flex flex-col mx-auto pt-10 gap-2 print'>
            <div className='text-center'>
              <Image src='/failed.png' width={80} alt='' height={80} />
            </div>
            <span className='text-center font-semibold pt-4 text-xl'>
              Failed
            </span>
            <span className='text-center text-zinc-400'>Transfer failed</span>
            <span className='text-center pt-4 text-gray-300 p-4'>
              Transfer of{' '}
              <span className='text-white'>₦{getAmount(amount)}</span> to{' '}
              <span className='text-white'>
                {anumber} ({aname}){' '}
              </span>
              failed.
              <br />
              Recipient&#39;s account is full.
            </span>
            <div className='grid grid-cols-2 pt-10 gap-4 mx-auto'>
              <div className='col-span-1'>
                <div className='flex flex-col rounded-lg bg-mainBlack text-white text-center p-4 w-40'>
                  <div>
                    <Image src='/1.png' width={70} alt='' height={65} />
                  </div>
                  <span className='text-xs font-light'>Save Beneficiary</span>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='flex flex-col rounded-lg bg-mainBlack text-white text-center p-4 w-40'>
                  <div>
                    <Image src='/2.png' width={70} alt='' height={68} />
                  </div>
                  <span className='text-xs font-light'>Schedule</span>
                </div>
              </div>
              <Link href='#' className='col-span-1'>
                <a
                  onClick={handlePrint}
                  className='flex flex-col rounded-lg bg-mainBlack text-white text-center p-4 w-40'
                >
                  <div>
                    <Image src='/3.png' width={70} alt='' height={65} />
                  </div>
                  <span className='text-xs font-light'>Share Receipt</span>
                </a>
              </Link>
              <div className='col-span-1'>
                <div className='flex flex-col rounded-lg bg-mainBlack text-white text-center p-4 w-40'>
                  <div>
                    <Image src='/4.png' width={70} alt='' height={65} />
                  </div>
                  <span className='text-xs font-light'>Add 1-Tap Payment</span>
                </div>
              </div>
            </div>
            <div className='pt-6 pr-7 pl-7'>
              <button
                onClick={handlePrint}
                className='bg-mainOrange w-full p-3'
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
