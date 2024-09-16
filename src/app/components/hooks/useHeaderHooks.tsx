import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderItem } from "@/app/models/HeaderType";
import { instance } from "@/app/util/instance";

export const useHeaderHooks = () => {
  const router = useRouter();
  const [headerItem, setHeaderItem] = useState<HeaderItem[]>();
  const [visibleHeaderItem, setVisibleHeaderItem] =
    useState<string>("게시판관리");

  const handelOnClickHeaderItem = (headerContents: string) => {
    setVisibleHeaderItem(headerContents);
  };

  const getNavigateInformation = async () => {
    try {
      const response = await instance.get("admin/menu/main");

      if (response) {
        setHeaderItem(response.data.data);
      }
    } catch (error: any) {
      if (error.response.status === 500) {
        localStorage.removeItem("token");
      }
    }
  };

  const handleGetUrl = (id: number): string => {
    switch (id) {
      case 1: {
        return "/company-introduce";
      }
      case 2: {
        return "/business-introduce";
      }
      case 3: {
        return "/basic-label";
      }
      case 4: {
        return "/digital-label";
      }
      case 5: {
        return "/estimate-inquiry";
      }
      default:
        return "";
    }
  };

  const handleNavigatePage = (id: number) => {
    switch (id) {
      case 1: {
        return router.push(`${handleGetUrl(id)}?group_id=${id}`);
      }
      case 2: {
        return router.push(`${handleGetUrl(id)}?group_id=${id}`);
      }
      case 3: {
        return router.push(`${handleGetUrl(id)}?group_id=${id}`);
      }
      case 4: {
        return router.push(`${handleGetUrl(id)}?group_id=${id}`);
      }
      case 5: {
        return router.push(`${handleGetUrl(id)}?group_id=${id}`);
      }
      default:
        return;
    }
  };

  useEffect(() => {
    getNavigateInformation();
  }, []);

  return {
    headerItem,
    visibleHeaderItem,
    handelOnClickHeaderItem,
    handleGetUrl,
    handleNavigatePage,
  };
};
