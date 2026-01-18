import { ReUsableInputProps } from "feature/landing/types"
import React from "react"

const ReUsableInput: React.FC<ReUsableInputProps> = ({
  label,
  id,
  placeholder,
  register,
  errors,
  type = "text",
}) => (
  <div className="flex min-h-[130px] w-full max-w-[720px] flex-col gap-[10px] rounded-[12px] bg-white px-[24px] pt-[16px] pb-[24px] md:py-[16px] lg:max-w-[1144px]">
    <label htmlFor={id} className="cursor-pointer font-medium text-black">
      {label}
    </label>
    <input
      className="min-h-[56px] w-full max-w-[672px] border-b-1 border-[#707070] px-[24px] py-[16px] text-[#9E9E9E] focus:outline-none lg:max-w-[400px]"
      type={type}
      placeholder={placeholder}
      id={id}
      {...register(id)}
    />
    {errors[id]?.message && (
      <p className="text-[10px] text-red-600">{errors[id]?.message}</p>
    )}
  </div>
)

export default ReUsableInput
