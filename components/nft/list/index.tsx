/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import NFTItemList from "../item";
import { NftMeta } from "@/types/nft";

type NFTListProps = {
  nfts: NftMeta[];
};
const NFTList: FunctionComponent<NFTListProps> = ({ nfts }) => {
  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
      {nfts.map((nft) => (
        <div
          key={nft.image}
          className='flex flex-col rounded-lg shadow-lg overflow-hidden'
        >
          <NFTItemList item={nft} />
        </div>
      ))}
    </div>
  );
};

export default NFTList;
