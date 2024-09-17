import { ADMIN_BOARD_BOARD } from "@/app/util/constant";
import { instance } from "@/app/util/instance";
import { useState } from "react";

export interface EstimateParams {
  sub_id: number;
  company: string;
  title: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  password: string;
  mapping_categories: string;
  size: string;
  purpose: string;
  material: string;
  shape: string;
  quantity: string;
  desc: string;
  etc_file: File | null;
}

export const useEstimateInquiryHooks = () => {
  const [estimateParams, setEstimateParams] = useState<EstimateParams>({
    sub_id: 12,
    company: "",
    title: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    password: "",
    mapping_categories: "1",
    size: "",
    purpose: "",
    material: "",
    shape: "",
    quantity: "",
    desc: "",
    etc_file: null,
  });
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleSetEstimateParams = (key: string, value: any) => {
    setEstimateParams({ ...estimateParams, [key]: value });
  };

  const handleCreateEstimateBoard = async () => {
    try {
      const response = await instance.post(
        `${ADMIN_BOARD_BOARD}/create`,
        estimateParams,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        setIsComplete(true);
      }
    } catch (error: any) {
      alert(error.response.data.error.message);
    }
  };

  return {
    estimateParams,
    isComplete,
    handleSetEstimateParams,
    handleCreateEstimateBoard,
  };
};
