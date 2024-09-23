import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { parse } from "query-string-for-all";

import { ADMIN_BOARD_PRODUCT } from "@/app/util/constant";
import { instance } from "@/app/util/instance";
import { BasicLabelListType, BasicLabelParams } from "@/app/util/LabelType";

export const useBasicLabelHooks = () => {
  const navigate = useRouter();
  const params = useParams<{ labelId: string }>();
  const { group_id, sub_id } = parse(window.location.search);

  const [basicLabelList, setBasicLabelList] = useState<BasicLabelListType>();
  const [pageSize, setPageSize] = useState<number>(1);
  const [basicLabelParams, setBasicLabelParams] = useState<BasicLabelParams>({
    sub_id: 0,
    title: "",
    is_show: "",
    desc: "",
    main_img: "",
    bottom_img1: "",
    material: "",
    size: "",
    shape: "",
    keywords: "",
  });

  const handleChangeBasicLabelParams = (key: string, value: any) => {
    setBasicLabelParams({ ...basicLabelParams, [key]: value });
  };

  const handleGetBasicLabelList = async () => {
    try {
      const response = await instance.get(
        `${ADMIN_BOARD_PRODUCT}?group_id=${group_id}&sub_id=${params.labelId}&page=${pageSize}&page_size=10&sort=created_at|asc`
      );

      if (response) {
        setBasicLabelList(response.data.data);
      }
    } catch (error) {
      console.log(error, "<<<");
    }
  };

  const handleCreateBasicLabel = async () => {
    try {
      const response = await instance.post(
        `${ADMIN_BOARD_PRODUCT}/create`,
        basicLabelParams,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        navigate.push(
          `/label/${
            response.data.data.group_id === 3 ? "basic" : "digital"
          }?group_id=${response.data.data.group_id}&sub_id=${
            response.data.data.sub_id
          }`
        );
        window.location.reload();
      }
    } catch (error: any) {
      alert(error.response.data.error.message);
      console.log(error, "<<<");
    }
  };

  useEffect(() => {
    handleGetBasicLabelList();
  }, [group_id, sub_id]);

  return {
    basicLabelList,
    basicLabelParams,
    handleChangeBasicLabelParams,
    handleCreateBasicLabel,
  };
};
