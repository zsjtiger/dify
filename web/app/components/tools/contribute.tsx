'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heart02 } from '../base/icons/src/vender/solid/education'

const Contribute: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='shrink-0 p-2'>
      <div className='inline-block p-2 bg-white shadow-lg rounded-lg'>
        <Heart02 className='w-3 h-3 text-[#EE46BC]' />
      </div>
    </div>
  )
}
export default React.memo(Contribute)
