function Image(props) {
  return (
    <div className="w-full lg:w-2/5 bg-amber-50 min-h-[15vh] lg:h-screen">
      <img
        src={props.imgUrl}
        alt="Image Flex"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default Image
