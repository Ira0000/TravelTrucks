import { ThreeDots } from "react-loader-spinner";

export default function LoaderMain() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-200">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#E44848"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
