import { useRouter } from "next/router";

export const useAuthenticated = (fn: any) => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const credentials = localStorage.getItem('houpa-sales:account')
    const hasCredentials = !!credentials

    if (hasCredentials) {
      return fn()
    } else {
      router.push('/')
    }
  }
}