"use client"

import { useEffect } from "react"
import Button from "@/components/atoms/Button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Terjadi Kesalahan</h1>
          <p className="text-gray-600 mb-4">
            Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang menangani masalah ini.
          </p>

          {process.env.NODE_ENV === "development" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-left">
              <p className="text-sm text-red-800 font-mono">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-sm text-red-600 mt-2">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Button onClick={reset} className="w-full flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Coba Lagi
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent flex items-center justify-center gap-2"
            onClick={() => (window.location.href = "/")}
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Jika masalah terus berlanjut, silakan hubungi support kami di info@umkmresep.com</p>
        </div>
      </div>
    </div>
  )
}
