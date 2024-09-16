import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RecordsEntity } from "@/app/util/LabelType";
import { instance } from "@/app/util/instance";
import { ADMIN_BOARD_DETAIL } from "@/app/util/constant";

export const useLabelDetailHooks = () => {
  const params = useParams<{ detailId: string }>();

  const [basicLabelDetailItem, setBasicLabelDetailItem] =
    useState<RecordsEntity>();

  const handleGetBasicLabelDetailItem = async () => {
    try {
      const response = await instance.get(
        `${ADMIN_BOARD_DETAIL}/product/${params.detailId}`
      );

      if (response) {
        setBasicLabelDetailItem(response.data.data);
      }
    } catch (error: any) {
      alert(error);
    }
  };

  useEffect(() => {
    handleGetBasicLabelDetailItem();
  }, []);

  return {
    basicLabelDetailItem,
  };
};
