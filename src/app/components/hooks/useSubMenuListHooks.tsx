"use client";
import { useEffect, useState } from "react";
import { instance } from "@/app/util/instance";
import { SubMenuList } from "@/app/models/HeaderType";
import { ADMIN_SUB_MENU } from "@/app/util/constant";

export interface SubMenuParams {
  page: number;
  page_size: number;
  group_ud: number;
  search_cls: string;
  keyword: string;
}

export const useSubMenuListHooks = () => {
  const [subMenuList, setSubMenuList] = useState<SubMenuList>();
  const [basicLabelSubMenuList, setBasicLabelSubMenuList] =
    useState<SubMenuList>();

  const [subMenuParams, setSubMenuParams] = useState<SubMenuParams>({
    page: 1,
    page_size: 10,
    group_ud: 0,
    search_cls: "",
    keyword: "",
  });

  const handleSetSubmenuParams = (key: string, value: any) => {
    setSubMenuParams({ ...subMenuParams, [key]: value });
  };

  const getSubBasicLabelList = async (groupId: number) => {
    try {
      const response = await instance.get(
        `${ADMIN_SUB_MENU}?page=1&page_size=20&group_id=${groupId}`
      );

      if (response) {
        setBasicLabelSubMenuList(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    subMenuList,
    basicLabelSubMenuList,
    getSubBasicLabelList,
    handleSetSubmenuParams,
  };
};
