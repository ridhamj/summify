import {
    CircularProgress,
  } from "@chakra-ui/react";

const Loading = ({ loading }) => {
  return (
    <>
    {loading ? (
    <CircularProgress isIndeterminate color="#DBFE87" top={4} />
    ) : (<></>)}
    </>
  )
}

export default Loading