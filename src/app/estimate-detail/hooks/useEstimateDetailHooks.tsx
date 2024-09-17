"use client";
import { useEffect, useState } from "react";
import { EstimateDetailType } from "./type";
import { instance } from "@/app/util/instance";
import { useParams } from "next/navigation";
import { ADMIN_BOARD_DETAIL } from "@/app/util/constant";
import { EstimateParams } from "@/app/estimate-inquiry/hooks/useEstimateInquiryHooks";

export const useEstimateDetailHooks = () => {
  const params = useParams<{ id: string }>();
  const [boardDetailItem, setBoardDetailItem] = useState<EstimateDetailType>();
  const [validPassword, setValidPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAcceptSuccess, setIsAcceptSuccess] = useState<boolean>(false);
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

  const handleGetBasicLabelDetailItem = async () => {
    try {
      const response = await instance.get(
        `${ADMIN_BOARD_DETAIL}/board/${params.id}`
      );

      if (response) {
        const resultData: EstimateDetailType = response.data.data;

        setBoardDetailItem(resultData);
        setPassword(resultData.password);
        setEstimateParams({
          sub_id: 12,
          company: resultData.company,
          title: resultData.title,
          contact_name: resultData.contact_name,
          contact_email: resultData.contact_email,
          contact_phone: resultData.contact_phone,
          password: resultData.password,
          mapping_categories: resultData
            .categories!.map((item) => item.id)
            .join(","),
          size: resultData.size,
          purpose: resultData.purpose,
          material: resultData.material,
          shape: resultData.shape,
          quantity: resultData.quantity,
          desc: resultData.desc,
          etc_file: null,
        });
      }
    } catch (error: any) {
      alert(error.response.data.error.message);
    }
  };

  useEffect(() => {
    handleGetBasicLabelDetailItem();
  }, []);

  return {
    boardDetailItem,
    password,
    validPassword,
    isAcceptSuccess,
    estimateParams,
    setIsAcceptSuccess,
    setValidPassword,
  };
};
