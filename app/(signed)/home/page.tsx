import Home from "@/features/home/home";
import { sendRequest } from "@/utils/fetch.api";
import { apiUrl } from "@/utils/url";

const HomePage = async () => {
  const systemDataResponse = await sendRequest<ApiResponse<SystemResponse[]>>({
    url: `${apiUrl}/system-setting`,
  });
  const accountAmounts = await sendRequest<ApiResponse<CustomerAmount>>({
    url: `${apiUrl}/account/count-customer-account`,
  });
  if (systemDataResponse.status !== 200 || accountAmounts.status !== 200) {
    return null;
  }
  return (
    <div className="relative ">
      <div className="flex justify-center min-h-[calc(100vh-150px)] relative top-30 overflow-x-hidden">
        <Home
          systemData={systemDataResponse.data}
          accountAmounts={accountAmounts.data}
        />
      </div>
    </div>
  );
};

export default HomePage;
