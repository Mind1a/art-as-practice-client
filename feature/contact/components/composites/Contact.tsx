"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { FormSchema, FormValues } from "feature/contact/schema/contactForm"
import { registrationapi } from "feature/contact/data/api"
import PageHeader from "feature/common/components/composites/PageHeader"
import ReUsableInput from "../primitives/ReUsableInput"
import { ageRange, languages } from "feature/contact/data/contactData"

const Contact = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  })
  const { mutate, isPending } = useMutation({
    mutationFn: registrationapi,
    onSuccess: () => {
      console.log("Success, navigating now")
      router.push("/")
    },
    onError: () => {
      console.log("Form submission failed")
    },
  })
  const submitForm = (data: FormValues) => {
    mutate(data)
  }
  return (
    <div>
      <PageHeader title={"Registration"} />
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col items-center gap-[28px] px-[24px] py-[56px]"
      >
        <ReUsableInput
          label="Full Name"
          id="fullName"
          type="text"
          placeholder="Your Answer"
          register={register}
          errors={errors}
        />
        <ReUsableInput
          label="E-mail"
          id="email"
          type="email"
          placeholder="Your Answer"
          register={register}
          errors={errors}
        />
        <ReUsableInput
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          placeholder="Your Answer"
          register={register}
          errors={errors}
        />
        <div className="flex min-h-[232px] w-full max-w-[720px] flex-col gap-[24px] rounded-[12px] bg-white px-[24px] pt-[16px] pb-[24px] md:py-[16px] lg:max-w-[1114px]">
          <label className="cursor-pointer font-medium text-black">
            Pick the language (you can choose more than one)*
          </label>
          <div className="space-y-[16px]">
            {languages.map((lang) => (
              <div key={lang} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={lang}
                  value={lang}
                  {...register("language")}
                  className="h-[24px] w-[24px] cursor-pointer accent-[#F2430D]"
                />
                <label
                  htmlFor={lang}
                  className="cursor-pointer font-medium text-black"
                >
                  {lang}
                </label>
              </div>
            ))}
          </div>

          {errors.language && (
            <p className="text-[10px] text-red-600">
              {errors.language.message}
            </p>
          )}
        </div>

        <div className="flex min-h-[312px] w-full max-w-[720px] flex-col gap-[24px] rounded-[12px] bg-white px-[24px] pt-[16px] pb-[24px] md:py-[16px] lg:max-w-[1114px]">
          <label className="cursor-pointer font-medium text-black">Age</label>
          <div className="space-y-[16px]">
            {ageRange.map((lang) => (
              <div key={lang} className="flex items-center gap-3">
                <input
                  type="radio"
                  id={lang}
                  value={lang}
                  {...register("age")}
                  className="h-[24px] w-[24px] cursor-pointer accent-[#F2430D]"
                />
                <label
                  htmlFor={lang}
                  className="cursor-pointer font-medium text-black"
                >
                  {lang}
                </label>
              </div>
            ))}
          </div>

          {errors.age && (
            <p className="text-[10px] text-red-600">{errors.age.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="flex cursor-pointer items-center justify-center rounded-[8px] bg-[#F2430D] px-[16px] py-[12px] text-[15px] font-bold transition-all duration-300 ease-in-out hover:bg-[#B74C2C]"
        >
          {isPending ? "Sending..." : "Registration"}
        </button>
      </form>
    </div>
  )
}

export default Contact
