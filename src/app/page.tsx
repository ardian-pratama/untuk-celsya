'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  const [tab, setTab] = useState('satu');

  return (
    <Tabs
      value={tab}
      onValueChange={setTab}
      className='my-auto container mx-auto'
    >
      <TabsList className='hidden'>
        <TabsTrigger value='satu'>Account</TabsTrigger>
        <TabsTrigger value='dua'>Password</TabsTrigger>
      </TabsList>
      <TabsContent
        value='satu'
        className='p-5 md:px-20 flex flex-col gap-5'
      >
        <div className='flex flex-col items-center gap-2'>
          <div>
            <p className='font-agbalumo'>Dari</p>
            <p className='text-5xl font-extrabold font-agbalumo text-pink-300'>
              Ardian Pratama
            </p>
          </div>
          <p className='font-agbalumo'>Untuk</p>
          <p className='text-5xl font-extrabold font-agbalumo text-pink-300'>
            Celsya Nalvira
          </p>
        </div>
        <p className='mt-10 text-justify'>
          Bumi itu bentuknya bulat, dan di dalam bumi yang bulat ini terdapat
          8.229.922.495 manusia yang menghuni permukaannya. Dari jumlah
          tersebut, sekitar 4.139.651.012 adalah cowo dan 4.090.271.483 adalah
          cewe.
        </p>
        <Button
          onClick={() => setTab('dua')}
          className='self-end w-fit bg-pink-300 hover:bg-pink-400'
        >
          Selanjutnya <ArrowRight />
        </Button>
      </TabsContent>
      <TabsContent
        value='dua'
        className='p-5 md:px-20 flex flex-col gap-5'
      >
        <p className='text-justify'>
          Dari 4.090.271.483 cewe yang ada di bumi, 1 diantaranya berhasil
          menaklukkan hati seorang cowo bumi ini.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-2'>
            <Image
              src='/IMG-20250612-WA0038.jpg'
              alt='celsya senyum'
              width={500}
              height={500}
              className='w-full h-auto rounded-md'
            />
            <p className='text-center'>Lewat senyuman manisnya</p>
          </div>
          <div className='flex flex-col gap-2'>
            <Image
              src='/IMG-20250625-WA0012.jpg'
              alt='celsya random'
              width={500}
              height={500}
              className='w-full h-auto rounded-md'
            />
            <p className='text-center'>Berbagai hal randomnya</p>
          </div>
          <div className='flex flex-col gap-2'>
            <Image
              src='/IMG-20250620-WA0220.jpg'
              alt='celsya ngambek'
              width={500}
              height={500}
              className='w-full h-auto rounded-md'
            />
            <p className='text-center'>
              Walaupun suka ngambek tapi lucuu bangeeet
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <Image
              src='/IMG-20250620-WA0004.jpg'
              alt='celsya nuduh aku punya banyak cewe'
              width={500}
              height={500}
              className='w-full h-auto rounded-md'
            />
            <p className='text-center'>
              Suka nuduh aku punya banyak cewe, padahal aku lagi deketin dia
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <Image
              src='/IMG-20250621-WA0084.jpg'
              alt='celsya suka anak kecil'
              width={500}
              height={500}
              className='w-full h-auto rounded-md'
            />
            <p className='text-center'>
              Dan suka anak kecil, seru kalau akrab sama anak kecil. tapi asya
              dah kenal aku belum
            </p>
          </div>
        </div>
        <p className='text-justify mt-10'>Jadi yang mau ku katakan adalah...</p>
        <Link href='/bagian-spesial' className='self-end'>
          <Button className='bg-pink-300 hover:bg-pink-400'>
            Selanjutnya <ArrowRight />
          </Button>
        </Link>
      </TabsContent>
    </Tabs>
  );
}
