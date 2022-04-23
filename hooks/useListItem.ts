import { useEffect, useState } from "react";

export interface  ListDataProps {
  iconUrl: string;
  name: string;
  twitterId: string;
  totalJpyc: string;
};

export default function useListItem(
) {
  const [lists, setLists] = useState<ListDataProps[]>([
    {
      iconUrl:"",
      name: "名前１",
      twitterId: "@aaaaaa",
      totalJpyc:"100000",
    },
    {
      iconUrl:"",
      name: "名前２２２２",
      twitterId: "@aaaaaa",
      totalJpyc:"10000",
    },
    {
      iconUrl:"",
      name: "名前３３３３３３３３３",
      twitterId: "@aaaaaa",
      totalJpyc:"500",
    },
    {
      iconUrl:"",
      name: "名前４４４４４４４４４４４",
      twitterId: "@aaaaaa",
      totalJpyc:"100",
    },
    {
      iconUrl:"",
      name: "名前５５５５５５５５５５５５５",
      twitterId: "@aaaaaa",
      totalJpyc:"70",
    },
    {
      iconUrl:"",
      name: "名前６６６６６６６６６６６６６６",
      twitterId: "@aaaaaa",
      totalJpyc:"0",
    },
    {
      iconUrl:"",
      name: "７７７７７７７７７７７",
      twitterId: "@aaaaaa",
      totalJpyc:"100000",
    },
  ]);

  return lists;
}
