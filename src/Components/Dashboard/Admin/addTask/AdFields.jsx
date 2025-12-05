import React from 'react'
import TitleField from './Fields/TitleField'
import DateFiled from './Fields/DateFiled'
import EmailFeild from './Fields/EmailFeild'
import SectionFiled from './Fields/SectionFiled'

function AdFields({ title, date, email, category, onChange }) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-between">
      <TitleField value={title} onChange={onChange} />
      <DateFiled value={date} onChange={onChange} />
      <EmailFeild value={email} onChange={onChange} />
      <SectionFiled value={category} onChange={onChange} />
    </div>
  )
}

export default React.memo(AdFields)
