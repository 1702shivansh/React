import React from 'react'

const  Card = (props) => {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
  <div>
    <img
      src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
      alt="test"
      className="w-full  object-cover object-center rounded-t-xl"
    />
  </div>
  <div className="flex justify-between">
  <div className="flex-1 mr-2">
    <h1 className="font-bold break-words">{props.text}</h1>
  </div>
</div>

</div>
  )
}

export default  Card