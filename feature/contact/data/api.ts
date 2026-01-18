import { FormValues } from "../schema/contactForm"

const baseURL = process.env.NEXT_PUBLIC_REGISTRATION_GOOGLEFORM

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_REGISTRATION_GOOGLEFORM URL is not defined")
}

export const registrationapi = async (
  formData: FormValues
): Promise<boolean> => {
  try {
    const body = new URLSearchParams()
    body.append("entry.297616346", formData.fullName)
    body.append("entry.1583932013", formData.email)
    body.append("entry.627014730", formData.phoneNumber)
    formData.language.forEach((lang) => {
      body.append("entry.1396283937", lang)
    })
    body.append("entry.940451344", formData.age)

    await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      mode: "no-cors",
    })

    return true
  } catch (error) {
    console.error("server error:", error)
    return false
  }
}
