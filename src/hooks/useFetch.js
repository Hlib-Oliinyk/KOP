import { useCallback, useEffect, useMemo, useState } from 'react'

// fetcher(params, { signal }) must be stable, and params must keep its identity until it changes.
export function useFetch(fetcher, params) {
  const [attempt, setAttempt] = useState(0)
  const request = useMemo(() => ({ params, attempt }), [params, attempt])
  const [result, setResult] = useState({ request: null, data: null, error: null })

  useEffect(() => {
    const controller = new AbortController()

    fetcher(request.params, { signal: controller.signal })
      .then((data) => {
        if (!controller.signal.aborted) setResult({ request, data, error: null })
      })
      .catch((error) => {
        if (!controller.signal.aborted) setResult({ request, data: null, error })
      })

    return () => controller.abort()
  }, [fetcher, request])

  const refetch = useCallback(() => setAttempt((count) => count + 1), [])
  const loading = result.request !== request

  return {
    data: result.data,
    loading,
    error: loading ? null : result.error,
    refetch,
  }
}
