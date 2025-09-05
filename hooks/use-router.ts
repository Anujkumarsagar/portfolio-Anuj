import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function useRouterHook() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function navigateTo(path: string) {
    return router.push(path, {scroll:true});
  }

  function navigateBack() {
    return router.back();
  }

  function replaceWith(path: string) {
    return router.replace(path);
  }

  function goForward() {
    return router.forward();
  }

  function prefetchRoute(path: string){
    return router.prefetch(path)
  }

  function refreshPage() {
    return router.refresh();
  }

  function getSearchParam(key: string) {
    return searchParams?.get(key) ?? null;
  }

  function getAllSearchParams() {
    return searchParams ?? new URLSearchParams();
  }

  function setSearchParams(params: Record<string, string | null>) {
    // Merge current params with provided ones; null removes the key
    const current = new URLSearchParams(searchParams?.toString());
    Object.entries(params).forEach(([k, v]) => {
      if (v === null) current.delete(k);
      else current.set(k, v);
    });

    const queryString = current.toString();
    const newPath = `${pathname ?? "/"}${queryString ? `?${queryString}` : ""}`;
    return router.push(newPath);
  }

  return {
    navigateTo,
    navigateBack,
    replaceWith,
    goForward,
    refreshPage,
    pathname,
    searchParams,
    getSearchParam,
    getAllSearchParams,
    setSearchParams,
    prefetchRoute
  };

}